'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parking.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    spaceAvailable: DataTypes.INTEGER,
    hourlyRate: DataTypes.FLOAT,
    closureHour: DataTypes.TIME,
    openingHour: DataTypes.TIME,
    status: DataTypes.BOOLEAN,
    gpsCoordinates: DataTypes.STRING,
    comments: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parking',
  });
  return Parking;
};