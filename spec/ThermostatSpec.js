'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('allows temperature to be increased', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('allow temperature to be decreased', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat.minimum_temp).toEqual(10);
  });

  it('has a power saving mode', function() {
    expect(thermostat.toggle_power_saving).toBeDefined();
  });

  it('is set to power saving mode by default', function() {
    expect(thermostat.power_saving_mode).toEqual(true);
  });

  it('can toggle between power saving mode, to be on or off', function() {
    thermostat.toggle_power_saving()
    expect(thermostat.power_saving_mode).toEqual(false);
  });

  it("won't increment temperature if it's already at maximum temp", function() {
    for (var u = 0; u < 6; u++) { thermostat.up(); }
    expect(thermostat.temperature).toEqual(25);
  });

  it("knows when it's at maximum temperature", function() {
    for (var u = 0; u < 5; u++) { thermostat.up(); }
    expect(thermostat.isMaxTemp()).toEqual(true)
  });

  it('can be set back to 20 with a reset function', function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('can report on its energy usage', function() {
    expect(thermostat.energyReport()).toEqual('medium');
    for (var u = 0; u < 6; u++) { thermostat.up(); }
    expect(thermostat.energyReport()).toEqual('high');
    for (var d = 0; d < 9; d++) { thermostat.down(); }
    expect(thermostat.energyReport()).toEqual('low');
  });


});
