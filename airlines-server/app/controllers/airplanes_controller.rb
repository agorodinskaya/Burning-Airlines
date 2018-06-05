class AirplanesController < ApplicationController

  def index
    @airplanes = Airplane.all
  end
  
  def create
  end

  def show
  end

end