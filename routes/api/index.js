const router = require("express").Router();

router.use("/emploees", require("./emploees"));
router.use("/placements", require("./placements"));
router.use("/residents", require("./residents"));
router.use("/projects", require("./projects"));
router.use("/transactions", require("./transactions"));

// Search module
router.use("/search", require("./search"));

// Statistic module
router.use("/statistics", require("./statistics"));

router.get("*", (req, res) => {
    console.error("Error: 404 Not Found...");
    res.status(404).json({ msg: "Error: 404 Not Found..." });
});

module.exports = router;