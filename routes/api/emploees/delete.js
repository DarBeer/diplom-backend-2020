const router = require("express").Router();

const Emploee = require("../../../models/emploee");

router.delete("/:id", (req, res) => {
    Emploee.findByIdAndRemove(req.params.id)
        .then(item => { res.status(200).json(item) })
        .catch(err => { res.status(400).json({ msg: err }) })
});

module.exports = router;