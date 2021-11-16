
import Order from '../moduls/order.js'

// create
const createOrder = async = (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

//delete
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Order has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

//get user order
const getUserOrder = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get all orders
const getAll = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get monthly income
const monthlyIncome = async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previosMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1) )

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previosMonth } } },
            { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
            { $group: { _id: "$month", total: { $sum: "$sales" } } }
        ])
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
    }
}