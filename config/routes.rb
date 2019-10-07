Rails.application.routes.draw do
  resources :contatos
  resources :rastreios, only:[:index,:create]
  get "contatos/show", to:"contatos#show"
  get "sobre", to:"sobre#index"
  root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
