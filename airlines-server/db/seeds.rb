
User.destroy_all
u1 = User.create email: 'Bob@ga.com', username: 'Bob', password: 'chicken', password_confirmation: 'chicken', user_type: :client
u2 = User.create email: 'Chuck@ga.com', username: 'Chuck', password: 'chicken', password_confirmation: 'chicken', user_type: :client
u3 = User.create email: 'Alison@ga.com', username: 'Alison', password: 'chicken', password_confirmation: 'chicken', user_type: :admin

puts "Created #{ User.all.length} users."

# The "puts created some_number_of_model" line needs
# to be made after the associations have been made

Airplane.destroy_all

air1 = Airplane.create airplane_name: "Boeing 737", airline_company: 'Virgin Airlines', row: 50, column: 8
air2 = Airplane.create airplane_name: "Airbus A320", airline_company: 'Virgin Airlines', row: 55, column: 8
air3 = Airplane.create airplane_name: "Boeing 737", airline_company: 'Qantas', row: 50, column: 8
air4 = Airplane.create airplane_name: "Airbus A320", airline_company: 'Qantas', row: 55, column: 8


puts "Created #{ Airplane.all.length } airplanes."

Flight.destroy_all
f1 = Flight.create flight_name: "VA-737", date: "2010-10-10 08:30:30", origin: "SYD", destination: "PER"
f2 = Flight.create flight_name: "VA-320", date: "2010-05-06 11:20:10", origin: "SYD", destination: "MEL"
f3 = Flight.create flight_name: "QA-737", date: "2010-10-12 02:00:25", origin: "MEL", destination: "AKL"
f4 = Flight.create flight_name: "QA-320", date: "2011-01-03 18:51:20", origin: "AKL", destination: "SYD"
f5 = Flight.create flight_name: "VA-737", date: "2010-12-12 08:30:30", origin: "SYD", destination: "PER"

air1.flights << f1 << f5
air2.flights << f2
air3.flights << f3
air4.flights << f4


puts "Created #{ Flight.all.length } flights."

Reservation.destroy_all
r1 = Reservation.create seat_row:12, seat_column: 4
r2 = Reservation.create seat_row:20, seat_column: 2
r3 = Reservation.create seat_row:30, seat_column: 5
r4 = Reservation.create seat_row:40, seat_column: 8

f1.reservations << r1
f2.reservations << r2
f3.reservations << r3
f5.reservations << r4

u1.reservations << r1
u2.reservations << r2
u1.reservations << r3
u2.reservations << r4


puts "Created #{ Reservation.all.length } reservations."
