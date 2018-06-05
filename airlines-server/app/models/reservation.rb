class Reservation < ApplicationRecord
  belongs_to :flight, optional: true
  belongs_to :user, optional: true
  # validates :title, :body, :presence => true
  # validates :title, :length => { :minimum => 2 }
  # validates :title, uniqueness: true
end
