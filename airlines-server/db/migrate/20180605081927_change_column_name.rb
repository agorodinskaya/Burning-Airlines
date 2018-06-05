class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column("airplanes", "plane_id", "airplane_id")
  end
end
