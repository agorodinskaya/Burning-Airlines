Rails.application.routes.draw do
  root to: "pages#home"
  get "/airplanes" => "airplanes#index"

  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"

  resources :users

  resources :flights
  resources :airplanes
  resources :reservations


end
