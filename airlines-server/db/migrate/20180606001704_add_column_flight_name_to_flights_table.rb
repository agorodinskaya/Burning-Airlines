class AddColumnFlightNameToFlightsTable < ActiveRecord::Migration[5.2]
  def change
    add_column( "flights", "flight_name", "string" )
  end
end
