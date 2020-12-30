const router = require("express").Router();

const Emploee = require("../../../models/emploee");

//достать зп всех employee на проекте за каждый день, поделить на дней в месяце -> вывести массив  (если проект)

router.get("/:projectId", (req, res) => {
    Emploee.find({
        projects: req.query.projects._id
    })
        .then(empData => {
            empData.map(employee => {
                let daysInMonth = Date.now().getDate()
                return [{employeeEmail: employee.email, salaryInDay: employee.salary/daysInMonth}]
            })
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})


//достать зп за каждый день
router.get("/:employeeEmail", (req, res) => {
    Emploee.find({
        email: req.query.email
    })
        .then(employee => {
                let daysInMonth = Date.now().getDate()
                return [{employeeEmail: employee.email, salaryInDay: employee.salary/daysInMonth}]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;