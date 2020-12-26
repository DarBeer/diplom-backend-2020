const router = require("express").Router();

// GET request
router.use("/", require("./get"));

// // POST request
// router.use("/", require("./post"));

// // PUT request
// router.use("/", require("./put"));

// // DELETE request
// router.use("/", require("./delete"));

module.exports = router;