module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define("Class", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    posts: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allownull: true
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?w=300&ssl=1",
      validate: {
        isUrl: true
      }
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

  Class.associate = function(models) {
    Class.hasMany(models.User);
    Class.hasMany(models.Lesson);
  };

  return Class;
};
