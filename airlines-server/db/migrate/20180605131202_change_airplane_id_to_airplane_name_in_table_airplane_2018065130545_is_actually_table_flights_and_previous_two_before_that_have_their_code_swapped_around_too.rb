class ChangeAirplaneIdToAirplaneNameInTableAirplane2018065130545IsActuallyTableFlightsAndPreviousTwoBeforeThatHaveTheirCodeSwappedAroundToo < ActiveRecord::Migration[5.2]
  def change
    rename_column("airplanes", "airplane_id", "airplane_name")    
  end
end
