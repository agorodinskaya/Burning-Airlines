Rails.application.routes.draw do
  get 'users/new'
  get 'users/create'
  get 'users/index'
  get 'users/show'
  get 'users/edit'
  get 'users/update'
  get 'users/destroy'
  get 'session/new'
  get 'session/create'
  get 'session/destroy'
  get "/airplanes" => "airplanes#index"
end
