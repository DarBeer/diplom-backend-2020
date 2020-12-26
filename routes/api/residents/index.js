const router = require("express").Router();

// GET request
router.use("/", require("./get"));

// POST request
router.use("/", require("./post"));

// PUT request
router.use("/", require("./put"));

// DELETE request
router.use("/", require("./delete"));

router.get("*", (req, res) => {
    console.error("Error: 404 Not Found...");
    res.status(404).json({ msg: "Error: 404 Not Found..." });
});

module.exports = router;