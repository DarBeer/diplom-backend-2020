const router = require("express").Router();

const Project = require("../../../models/project");

router.delete("/:id", (req, res) => {
    Project.findByIdAndRemove(req.params.id)
        .then(item => { res.status(200).json(item) })
        .catch(err => { res.status(400).json({ msg: err }) })
});

module.exports = router;