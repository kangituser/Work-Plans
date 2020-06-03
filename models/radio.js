const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/db");

class RARIO extends Model {}

RARIO.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  group_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  board_member: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  stage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  stage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  budget_nis: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  budget_excess_nis: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  satisfaction: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  insert_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  due_date_exceeded: {
    type: DataTypes.DATE,
    allowNull: true
  },
}, 
{
  sequelize,
  modelName: "shiloh_RADIO",
  timestamps: false,
  freezeTableName: true,
});

// RARIO.sync({ force: true })
RARIO.sync()

module.exports = RARIO;