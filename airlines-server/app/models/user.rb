class User < ApplicationRecord
  has_secure_password
  enum user_type: [:admin, :client]
  has_many :reservations
  has_many :flights, through: :reservations
  validates :email, presence: true, uniqueness: true
end
