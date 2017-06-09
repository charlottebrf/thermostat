require 'sinatra'
require 'json'
# require_relative 'public/javascript/Thermostat.js'

class Thermostat < Sinatra::Base

  get '/' do
    File.read('views/thermostat.html')
  end

  run! if app_file == $0
end
