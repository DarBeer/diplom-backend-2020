const router = require("express").Router();

const Placement = require("../../../models/placement");

router.delete("/:id", (req, res) => {
    Placement.findByIdAndRemove(req.params.id)
        .then(item => { res.status(200).json(item) })
        .catch(err => { res.status(400).json({ msg: err }) })
});

module.exports = router;