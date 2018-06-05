Rails.application.routes.draw do

<<<<<<< HEAD
  resources :airplanes

  resources :flights
=======
  get "/airplanes" => "airplanes#index"

  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"

  resources :users

  resources :flights
  resources :airplanes
  resources :reservations
>>>>>>> 901bbb275907fae29b85cbfa086c0ab441a9e685

end
