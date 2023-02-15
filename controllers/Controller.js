const { Employee } = require("../models/models");

class Controllers {
  async getEmployees(req, res) {
    const employees = await Employee.findAll();
    return res.send(employees);
  }

  async postEmployee(req, res) {
    const newEmployee = await Employee.create({ ...req.body });

    return res.send(true);
  }

  async deleteEmployee(req, res) {
    if (req.body.id) {
      await Employee.destroy({
        where: {
          id: req.body.id,
        },
      });
    }
    res.sendStatus(200);
  }

  async updateEmployee(req, res) {
    if (req.body.id) {
      await Employee.update(
        { ...req.body },
        {
          where: {
            id: req.body.id,
          },
        }
      );
    }
    res.sendStatus(200);
  }

  addTestsEntries(req, res) {
    const new_employees = [
      {
        name: "John",
        lastname: "Smith",
        salary: 1500,
        increase: false,
        promotion: true,
      },
      {
        name: "Thomas",
        lastname: "Anderson",
        salary: 2700,
        increase: false,
        promotion: false,
      },
      {
        name: "Elliot",
        lastname: "Alderson",
        salary: 4500,
        increase: true,
        promotion: true,
      },
      {
        name: "Linus",
        lastname: "Torvalds",
        salary: 3900,
        increase: false,
        promotion: false,
      },
    ];
    Employee.bulkCreate(new_employees);
    return res.send(true);
  }
}

module.exports = new Controllers();
