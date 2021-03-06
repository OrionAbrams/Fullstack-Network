module.exports = function (sequelize, DataTypes) {
  var Lesson = sequelize.define("Lesson", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    frontEndName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Add a lesson name",
      validate: {
        len: [1]
      }
    },
    lessonUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    lessonInstruction: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    test: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    original: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Lesson.associate = function (models) {
    Lesson.belongsTo(models.Class, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Lesson;
};
