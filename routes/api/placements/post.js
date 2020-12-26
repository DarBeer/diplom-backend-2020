const router = require("express").Router();

const Placement = require("../../../models/placement");

router.post("/", (req, res) => {
    const newDocument = new Placement(req.body);
    newDocument.save()
        .then(item => { res.status(201).json(item) })
        .catch(err => {
            console.dir(err); 
            res.status(501).json({msg: "Create file is failed"}) 
        })
});

module.exports = router;