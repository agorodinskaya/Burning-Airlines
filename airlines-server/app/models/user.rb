class User < ApplicationRecord
  has_secure_password
  enum user_type: [:admin, :client]
  has_many :flights, through: :reservations
  # has_and_belongs_to_many :flights
end
