class RemoveReservationIdFromFlights < ActiveRecord::Migration[5.2]
  def change
    remove_column :flights, :reservation_id, :integer
  end
end
