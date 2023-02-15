const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const { INTEGER, STRING, BOOLEAN } = DataTypes;

const tableDescr = {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  lastname: { type: STRING, allowNull: false },
  salary: { type: INTEGER, allowNull: false },
  increase: { type: BOOLEAN, allowNull: false },
  promotion: { type: BOOLEAN, allowNull: false },
};

const Employee = sequelize.define("Employee", tableDescr);

module.exports = { Employee };
