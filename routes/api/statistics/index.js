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

// transactions
router.use("/transactions", require("./transactions"));

router.get("*", (req, res) => {
    console.error("Error: 404 Not Found...");
    res.status(404).json({ msg: "Error: 404 Not Found..." });
});

module.exports = router;