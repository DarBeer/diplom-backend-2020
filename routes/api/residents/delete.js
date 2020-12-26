const router = require("express").Router();

const Resident = require("../../../models/resident");

router.delete("/:id", (req, res) => {
    Resident.findByIdAndRemove(req.params.id)
        .then(item => { res.status(200).json(item) })
        .catch(err => { res.status(400).json({ msg: err }) })
});

module.exports = router;