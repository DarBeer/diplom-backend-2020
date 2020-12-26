const router = require("express").Router();

const Resident = require("../../../models/resident");

router.get("/", (req, res) => {
    if (!req.query.startDate && !req.query.finishDate) { res.status(400).json({ msg: "bad request"}) }

    Resident.find({
            "date": { 
                $gte: req.query.startDate, $lte: req.query.finishDate 
        }}, {
            "debt": true, 
            "credit": true
        })
        .then(items => {res.status(200).json(items)})
        .catch(err => { res.status(400).json(err) })
});

module.exports = router;