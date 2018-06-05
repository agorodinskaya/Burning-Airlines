class ChangeAirplaneIdToAirplaneNameInTableAirplanes < ActiveRecord::Migration[5.2]
  def change
    rename_column("flights", "airplane_id", "airplane_name")    
  end
end
