Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index, :edit, :update, :show]

    post '/signup' => 'users#create'
    post '/settings' => 'users#update'
    
    post '/login' => 'sessions#login'
    get '/logout' => 'sessions#destroy'
    post '/find' => 'sessions#find'

  end
end
