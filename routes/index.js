const router = require("express").Router();

router.use("/", require("./api"));

router.get("*", (req, res) => {
    console.error("Error: 404 Not Found...");
    res.status(404).json({ msg: "Error: 404 Not Found..." });
});

module.exports = router;