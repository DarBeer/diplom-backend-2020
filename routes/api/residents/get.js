const router = require("express").Router();

const Resident = require("../../../models/resident");
const paginateValue = require("../../../keys/paginate");

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

    var aggregateQuery = Resident.aggregate();

    Resident.aggregatePaginate(aggregateQuery, { page: Number(req.query.page), limit: paginateValue })
        .then(items => { res.status(200).json(items) })
        .catch(error => { res.status(400).json(error) });
});

// get all items
router.get("/all", (req, res) => {
    Resident.find()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

// get item by ID
router.get("/:id", (req, res) => {
    Resident.findById(req.params.id)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;