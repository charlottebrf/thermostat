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
    thermostat.up(1)
    expect(thermostat.temperature).toEqual(21);
  });
});
