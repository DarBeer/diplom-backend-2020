const router = require("express").Router();

const Project = require("../../../models/project");

// multiplicative search
router.get("/", (req, res) => {
    if (!req.query.s) { res.status(400).json({ msg: "bad request"}) }
    Project.aggregate([
        { $match: {
            $or: [
                { 'name': { '$regex': req.query.s, '$options': 'i' } },
                { 'description': { '$regex': req.query.s, '$options': 'i' } }
            ]
        }}
    ])
    .then(items => {
        res.status(200).json(items) 
    })
    .catch(err => { res.status(400).json(err) })
});

module.exports = router;