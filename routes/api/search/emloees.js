const router = require("express").Router();

const Emploee = require("../../../models/emploee");

// multiplicative search
router.get("/", (req, res) => {
    if (!req.query.s) { res.status(400).json({ msg: "bad request"}) }
    Emploee.aggregate([
        { $match: {
            $or: [
                { 'firstname': { '$regex': req.query.s, '$options': 'i' } },
                { 'lastname': { '$regex': req.query.s, '$options': 'i' } }, 
                { 'position': { '$regex': req.query.s, '$options': 'i' } }, 
                { 'phone': { '$regex': req.query.s, '$options': 'i' } }, 
                { 'email': { '$regex': req.query.s, '$options': 'i' } }
            ]
        }}
    ])
    .then(items => {
        res.status(200).json(items) 
    })
    .catch(err => { res.status(400).json(err) })
});

module.exports = router;