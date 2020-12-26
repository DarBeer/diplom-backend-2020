const router = require("express").Router();

const paginateValue = require("../../../keys/paginate");
const Emploee = require("../../../models/emploee");

/**
 * get pagination documents
 * example return doc: {
 *      docs: [...],
 *      "totalDocs": 2,
 *      "limit": 1,
 *      "page": 1,
 *      "totalPages": 2,
 *      "pagingCounter": 1,
 *      "hasPrevPage": false,
 *      "hasNextPage": true,
 *      "prevPage": null,
 *      "nextPage": 2
 * }
 */
router.get("/", (req, res) => {
    if (!req.query.page) { res.status(400).json({ msg: "Bad request"}) }

    var aggregateQuery = Emploee.aggregate();

    Emploee.aggregatePaginate(aggregateQuery, { page: Number(req.query.page), limit: paginateValue })
        .then(items => { res.status(200).json(items) })
        .catch(error => { res.status(400).json(error) });
});

// get all documents
router.get("/all", (req, res) => {
    Emploee.find()
        .then(items => { res.status(200).json(items) })
        .catch(err => { res.status(400).json({ msg: err }) });
});

// get document by ID
router.get("/:id", (req, res) => {
    Emploee.findById(req.params.id)
        .then(item => { res.status(200).json(item) })
        .catch(err => { res.status(400).json({ msg: err }) });
});

module.exports = router;