function defaultTemperature(thermostat) {
  thermostat.reset();
  document.getElementById('temperature').innerHTML = thermostat.temperature;
};

function tempUp(thermostat) {
document.getElementById('temperature-up').onclick = function() {
  thermostat.up();
  document.getElementById('temperature').innerHTML = thermostat.temperature;
  };
};

function getStatus(thermostat) {
document.getElementById('status').onclick = function() {
  alert(JSON.stringify(thermostat));
  };
};

function tempDown(thermostat) {
  document.getElementById('temperature-down').onclick = function() {
    thermostat.down();
    document.getElementById('temperature').innerHTML = thermostat.temperature;
  };
};

function reset(thermostat) {
  document.getElementById('temperature-reset').onclick = function() {
    thermostat.reset();
    document.getElementById('temperature').innerHTML = thermostat.temperature;
  };
};

function PowerSavingModeOn(thermostat) {
  document.getElementById('powersaving-on').onclick = function() {
    thermostat.toggle_power_saving();
    thermostat.toggle_power_saving();
    document.getElementById('power-saving-status').innerHTML = 'on';
  };
};

function PowerSavingModeOff(thermostat) {
  document.getElementById('powersaving-off').onclick = function() {
    thermostat.toggle_power_saving();
    document.getElementById('power-saving-status').innerHTML = 'off';
  };
};

function displayPowerMode(thermostat) {
  document.getElementById('powersaving-off').text
};

function updateTemperature(thermostat) {
  document.getElementById('temperature').innerHTML = thermostat.temperature;
  document.getElementById('temperature').setAttribute("class", thermostat.energyReport());
};

$.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
  $('#city-temperature').text(data.main.temp);
});

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    $('#city-temperature').text(data.main.temp);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var thermostat = new Thermostat;
  tempUp(thermostat);
  tempDown(thermostat);
  getStatus(thermostat);
  defaultTemperature(thermostat);
  reset(thermostat);
  PowerSavingModeOn(thermostat);
  PowerSavingModeOff(thermostat);
  updateTemperature(thermostat);
});
