const router = require("express").Router();

const Transactions = require("../../../models/transaction");

router.get("/", (req, res) => {
    if (!req.query.startDate && !req.query.finishDate) { res.status(400).json({ msg: "bad request"}) }

    Transactions.find({ 
        "date": { 
            $gte: req.query.startDate, $lte: req.query.finishDate 
        }}, { 
            "status": true, 
            "amount": true 
        })
        .then(items => {res.status(200).json(items)})
        .catch(error => { res.status(400).json(error) })
})

// get statistib by id resident
router.get("/:id", (req, res) => {
    Transactions.aggregate().match({ $or: [
            { "payer._id": req.params.id },
            { "recipient._id": req.params.id }
        ]})
        .then(items => {
            return items.map(item => {
                let newItem = {
                    "_id": item._id,
                    "payer_id": item.payer._id,
                    "recipient_id": item.recipient._id,
                    "date": item.date,
                    "amount": item.amount
                }
                return newItem;
            });
        })
        .then(items => { res.status(200).json(items) })
        .catch(error => { res.status(400).json(error) });
})

module.exports = router;