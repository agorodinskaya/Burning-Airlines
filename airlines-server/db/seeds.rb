
User.destroy_all
u1 = User.create email: 'Bob@ga.com', username: 'Bob', password: 'chicken', password_confirmation: 'chicken', user_type: :client
u2 = User.create email: 'Alison@ga.com', username: 'Alison', password: 'chicken', password_confirmation: 'chicken', user_type: :admin

puts "Created #{ User.all.length} users."

# The "puts created some_number_of_model" line needs
# to be made after the associations have been made

Airplane.destroy_all

air1 = Airplane.create airplane_id: "747-NE", airline_company: 'Virgin Airlines', row: 50, column: 8
air2 = Airplane.create airplane_id: "777-VU", airline_company: 'Virgin Airlines', row: 55, column: 8
air3 = Airplane.create airplane_id: "747-NQ", airline_company: 'Qantas', row: 50, column: 8
air4 = Airplane.create airplane_id: "777-VZ", airline_company: 'Qantas', row: 55, column: 8

puts "Created #{ Airplane.all.length } airplanes."

# Will make flight seed file once reservation_id is available.