const router = require("express").Router();

const Transaction = require("../../../models/transaction");

// Send total amount
router.get("/", (req, res) => {
    Transaction.find()
        .then(items => {
            let sum = 0;
            items.forEach(item => { 
                switch (item.status) {
                    case "DEBT":
                    case "ДЕБЕТ": {
                        sum += item.amount;
                    } break;
                    case "KRED":
                    case "КРЕДИТ": {
                        sum -= item.amount;
                    }
                }
            });
            return sum;
        })
        .then(sum => { res.status(200).json({ sum : sum}) })
        .catch(error => { 
            console.error(error);
            res.status(500).json({ error: error }) 
        });
});

// Send details
router.get("/details", (req, res) => {
    Transaction.find()
        .then(items => {
            let details = {
                total: 0,
                debt: 0,
                kred: 0
            };
            items.forEach(item => { 
                switch (item.status) {
                    case "DEBT":
                    case "ДЕБЕТ": {
                        details.total += item.amount;
                        details.debt += item.amount;
                    } break;
                    case "KRED":
                    case "КРЕДИТ": {
                        details.total -= item.amount;
                        details.kred += item.amount;
                    }
                }
            });
            return details;
        })
        .then(details => { res.status(200).json(details) })
        .catch(error => { 
            console.error(error);
            res.status(500).json({ error: error })
        })
})

module.exports = router;