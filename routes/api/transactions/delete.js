const router = require("express").Router();

const Transaction = require("../../../models/transaction");

router.delete("/:id", (req, res) => {
    Transaction.findByIdAndRemove(req.params.id)
        .then(item => { res.status(200).json(item) })
        .catch(err => { res.status(400).json({ msg: err }) })
});

module.exports = router;