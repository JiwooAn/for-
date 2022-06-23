const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "posts",
    {
      postId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      writer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      receiver: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reply: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      attr1: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      attr2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      attr3: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "posts",
      // schema: "public",
      timestamps: false,
      paranoid: true,
    }
  );
};
