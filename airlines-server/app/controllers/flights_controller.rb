class FlightsController < ApplicationController

  def new
    @flight = Flight.new
  end
  
  def react
      render json: Flight.all, include: [ :airplane, {:reservations => { :only => [:user_id, :seat_row, :seat_column] }} ]
  end

  def create
    new_flight = Flight.create( flight_params )

    redirect_to flights_path
  end

  def index
    @flights = Flight.all
  end
  
  def show
    @flight = Flight.find( params[:id] )
    passenger_list = []
    # active record methods to find users of reservations of this flight, push to array
  end

  def edit
    @flight = Flight.find( params[:id] )    
  end

  def update
    @flight = Flight.find( params[:id] )
    @flight.update( flight_params )
    redirect_to flights_path
  end

  def destroy
    @flight = Flight.find( params[:id] )
    @flight.destroy
    redirect_to flights_path
  end

  private
  def flight_params
    params.require(:flight).permit(:flight_name, :date, :origin, :destination, :airplane_id)
  end

end
