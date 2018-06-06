class Reservation < ApplicationRecord
  belongs_to :flight
  belongs_to :user
  validates :seat_row, :seat_column, uniqueness: true
  # validates :title, :body, :presence => true
  # validates :title, :length => { :minimum => 2 }
  # validates :title, uniqueness: true
end
