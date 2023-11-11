'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  station.init({
    carId: DataTypes.INTEGER,
    spaceId: DataTypes.INTEGER,
    arrived: DataTypes.TIME,
    leave: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'station',
  });
  return station;
};