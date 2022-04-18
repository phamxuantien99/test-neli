const { DataTypes} = require("sequelize");

const createToDoModel = (sequelize) => {
  return sequelize.define(
    "ToDo",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isFinish: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "todos",
      timestamps: true,
    }
  );
};

module.exports = {
  createToDoModel,
};
