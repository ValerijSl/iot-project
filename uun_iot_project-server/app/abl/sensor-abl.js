"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/sensor-error.js");

const WARNINGS = {

};

class SensorAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("sensor");
  }

  async sensorCreate(awid, dtoIn) {
    
  }

  async sensorDelete(awid, dtoIn) {
    
  }

  async sensorUpdate(awid, dtoIn) {
    
  }

  async sensorList(awid, dtoIn) {
    
  }

}

module.exports = new SensorAbl();
