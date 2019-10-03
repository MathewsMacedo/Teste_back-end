class Contato < ApplicationRecord
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
   validates :nome, presence: true
end
