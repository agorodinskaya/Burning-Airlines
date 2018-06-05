class FlightsController < ApplicationController

  def new
    @flight = Flight.new
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
    params.require(:flight).permit(:airplane_name, :airline_company, :row, :column)
  end

end
