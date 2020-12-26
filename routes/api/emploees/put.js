const router = require("express").Router();

const Emploee = require("../../../models/emploee");

router.put("/:id", (req, res) => {
    const body = req.body;
    Emploee.findByIdAndUpdate(req.params.id, body)
        .then(item => { res.status(202).json({msg: `document ${item._id} has updated`}) })
        .catch(err => { res.status(501).json({msg: err}) })
});

module.exports = router;