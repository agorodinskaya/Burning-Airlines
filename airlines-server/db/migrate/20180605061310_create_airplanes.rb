class CreateAirplanes < ActiveRecord::Migration[5.2]
  def change
    create_table :airplanes do |t|
      t.string :plane_id
      t.string :airline_company
      t.integer :row
      t.integer :column

      t.timestamps
    end
  end
end
