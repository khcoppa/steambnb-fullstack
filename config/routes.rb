Rails.application.routes.draw do
  namespace :api do
    get 'reviews/create'
  end

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:index, :show]
    resources :reviews, only: [:create]
    resources :bookings, only: [:create]
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
