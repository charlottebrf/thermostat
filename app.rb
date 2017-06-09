require 'sinatra'
require 'sinatra/cross_origin'
require 'json'

class Thermostat < Sinatra::Base

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    erb(:thermostat)
  end

  get '/temperature' do
    File.read('temperature.json')
  end

  post '/temperature' do
    params[:temperature]
    File.open("temperature.json", "w") do |f|
      f.write(params[:temperature])
    end
  end

  run! if app_file == $0
end
