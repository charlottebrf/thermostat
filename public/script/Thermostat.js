'use strict';

var Thermostat;

Thermostat = function() {
  Object.freeze(this.default_temp = 20);
  Object.freeze(this.minimum_temp = 10);
  Object.freeze(this.maximum_temp_with_power_saving = 25);
  Object.freeze(this.maximum_temp_without_power_saving = 32);
  this.power_saving_mode = true;
  this.temperature = this.default_temp;
};

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.temperature > this.minimum_temp) {
    this.temperature -= 1;
  } else {
    return;
  }
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

Thermostat.prototype.reset = function() {
  this.temperature = this.default_temp;
};

Thermostat.prototype.energyReport = function() {
  if (this.temperature < 25 && this.temperature >= 18) {
    return 'medium';
  } else if (this.temperature < 18) {
    return 'low';
  }
  return 'high';
};
