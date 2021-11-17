import stripe from "stripe"

export const payment = async (req, res) => {
    stripe.charges.create({
        source: res.body.tokenId,
        amount: req.body.amount,
        currency: 'usd',
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
}