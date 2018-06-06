Rails.application.routes.draw do
  root to: "pages#home"
  
  # get "/airplanes" => "airplanes#index"

  get "/react/search" => "flights#react"
  get "/react/reservation" => "reservations#react"
  
  
  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"

  resources :users
  get "/profile" => "users#profile"

  resources :flights
  resources :airplanes
  resources :reservations


end
