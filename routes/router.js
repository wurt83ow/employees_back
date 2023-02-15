const router = new require("express")();

const {
  getEmployees,
  postEmployee,
  deleteEmployee,
  updateEmployee,
  addTestsEntries,
} = require("../controllers/Controller");

router.get("/employees", getEmployees);
router.post("/createEmployee", postEmployee);
router.delete("/deleteEmployee", deleteEmployee);
router.put("/updateEmployee", updateEmployee);
router.get("/addTestsEntries", addTestsEntries);
module.exports = router;
