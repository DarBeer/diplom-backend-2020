const router = require("express").Router();

const Transaction = require("../../../models/transaction");

router.post("/", (req, res) => {
    const newDocument = new Transaction(req.body);
    newDocument.save()
        .then(item => { res.status(201).json(item) })
        .catch(err => {
            console.dir(err); 
            res.status(501).json({msg: "Create file is failed"}) 
        })
});

module.exports = router;