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

function defaultTemperature(thermostat) {
  thermostat.reset();
  document.getElementById('temperature').innerHTML = thermostat.temperature;
};

function tempUp(thermostat) {
document.getElementById('temperature-up').onclick = function() {
  thermostat.up();
  updateTemperature(thermostat);
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
    updateTemperature(thermostat);
  };
};

function reset(thermostat) {
  document.getElementById('temperature-reset').onclick = function() {
    thermostat.reset();
    updateTemperature(thermostat);
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

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + city + token + units, function(data) {
    $('#city-temperature').text(data.main.temp);
  });
};

$.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#city-temperature').text(data.main.temp);
});

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $('#city').text(city);
  displayWeather(city);
});
