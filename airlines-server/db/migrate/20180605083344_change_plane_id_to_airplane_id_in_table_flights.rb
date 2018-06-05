class ChangePlaneIdToAirplaneIdInTableFlights < ActiveRecord::Migration[5.2]
  def change
    change_column("flights", "airplane_id", "string")
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
