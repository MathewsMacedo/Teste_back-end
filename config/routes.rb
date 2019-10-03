Rails.application.routes.draw do
  resources :contatos
  get "contatos/show", to:"contatos#show"
  root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
