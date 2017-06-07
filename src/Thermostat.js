'use strict';

var Thermostat;

Thermostat = function() {
  this.power_saving_mode = true;
  this.temperature = 20;
  Object.freeze(this.minimum_temp = 10);
  Object.freeze(this.maximum_temp_with_power_saving = 25);
  Object.freeze(this.maximum_temp_without_power_saving = 32);
};

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  this.temperature -= 1;
};

Thermostat.prototype.toggle_power_saving = function() {
  if(this.power_saving_mode) {
    this.power_saving_mode = false;
  } else {
    this.power_saving_mode = true;
  }
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.power_saving_mode === false) {
    return this.temperature === this.maximum_temp_without_power_saving;
  }
  return this.temperature === this.maximum_temp_with_power_saving;
};
