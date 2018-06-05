class Airplane < ApplicationRecord
    has_many :flights
    # validates :title, :body, :presence => true
    # validates :title, :length => { :minimum => 2 }
    # validates :title, uniqueness: true
end

#optional: :true does not work??
