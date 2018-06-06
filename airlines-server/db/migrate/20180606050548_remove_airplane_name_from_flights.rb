class RemoveAirplaneNameFromFlights < ActiveRecord::Migration[5.2]
  def change
    remove_column :flights, :airplane_name, :string
  end
end
