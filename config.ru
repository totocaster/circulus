require 'toto'

# Rack config
use Rack::Static, :urls => ['/css', '/js', '/images', '/logos', '/favicon.ico'], :root => 'public'
use Rack::CommonLogger

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end


toto = Toto::Server.new do
  set :title, "New Toto Blog"
  set :author, "Toto Tvalavadze"
  set :url, "http://myblog.com"
  set :date, lambda {|now| now.strftime("%B #{now.day.ordinal} %Y") }
  
  set :error, lambda {|code| ERB.new( File.read("templates/pages/error.rhtml")).result }
  
  set :logo, "/logos/me_sq.jpg"
  
end

run toto


