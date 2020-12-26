const router = require("express").Router();

const Placement = require("../../../models/placement");

// multiplicative search
router.get("/", (req, res) => {
    if (!req.query.s) { res.status(400).json({ msg: "bad request"}) }
    Placement.aggregate([
        { $match: {
            $or: [
                { 'name': { '$regex': req.query.s, '$options': 'i' } },
                { 'address': { '$regex': req.query.s, '$options': 'i' } },
                { 'type': { '$regex': req.query.s, '$options': 'i' } }
            ]
        }}
    ])
    .then(items => {
        res.status(200).json(items) 
    })
    .catch(err => { res.status(400).json(err) })
});

module.exports = router;