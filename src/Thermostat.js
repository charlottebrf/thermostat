'use strict';

var Thermostat;

Thermostat = function() {
  this.temperature = 20;
  Object.freeze(this.minimum_temp = 10);
};
Thermostat.prototype.up = function(increment){
  this.temperature += increment;
};
Thermostat.prototype.down = function(decrement){
  this.temperature -= decrement;
};
