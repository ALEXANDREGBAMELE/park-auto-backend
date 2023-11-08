'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Level.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    spaceFree: DataTypes.INTEGER,
    spaceOccupacy: DataTypes.INTEGER,
    parkingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};