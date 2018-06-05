class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.integer :plane_id
      t.integer :reservation_id
      t.datetime :date
      t.text :origin
      t.text :destination

      t.timestamps
    end
  end
end
