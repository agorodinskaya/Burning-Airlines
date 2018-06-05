class ChangeAirplaneIdInFlightsFromIntegerToString < ActiveRecord::Migration[5.2]
  def change
    rename_column("flights", "plane_id", "airplane_id")    
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
