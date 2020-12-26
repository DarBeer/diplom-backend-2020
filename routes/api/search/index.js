const router = require("express").Router();

const Emploee = require("../../../models/emploee");
const Placement = require("../../../models/placement");
const Project = require("../../../models/project");
const Resident = require("../../../models/resident");

// emploees
router.use("/emploees", require("./emloees"));

// placement
router.use("/placement", require("./placements"));

// projects
router.use("/projects", require("./projects"));

// residents
router.use("/residents", require("./residents"));

// total search
router.get("/", async (req, res) => {
    let result = [];
    
    if (!req.query.s) { res.status(400).json({ msg: "bad request"}) }
    
    await Emploee.aggregate([
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
        if (items.length > 0) { result = result.concat(items); } 
    })
    .catch(err => { res.status(400).json(err) });

    await Placement.aggregate([
        { $match: {
            $or: [
                { 'name': { '$regex': req.query.s, '$options': 'i' } },
                { 'address': { '$regex': req.query.s, '$options': 'i' } },
                { 'type': { '$regex': req.query.s, '$options': 'i' } }
            ]
        }}
    ])
    .then(items => {
        if (items.length > 0) { result = result.concat(items); } 
    })
    .catch(err => { res.status(400).json(err) });

    await Project.aggregate([
        { $match: {
            $or: [
                { 'name': { '$regex': req.query.s, '$options': 'i' } },
                { 'description': { '$regex': req.query.s, '$options': 'i' } }
            ]
        }}
    ])
    .then(items => {
        if (items.length > 0) { result = result.concat(items); } 
    })
    .catch(err => { res.status(400).json(err) });

    await Resident.aggregate([
        { $match: {
            $or: [
                { 'name': { '$regex': req.query.s, '$options': 'i' } },
                { 'description': { '$regex': req.query.s, '$options': 'i' } }, 
            ]
        }}
    ])
    .then(items => {
        if (items.length > 0) { result = result.concat(items); } 
    })
    .catch(err => { res.status(400).json(err) });

    res.status(200).json(result);
})

router.get("*", (req, res) => {
    console.error("Error: 404 Not Found...");
    res.status(404).json({ msg: "Error: 404 Not Found..." });
});

module.exports = router;