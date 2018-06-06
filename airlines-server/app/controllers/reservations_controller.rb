class ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
  end

  def create
    reservation = Reservation.create content: params['content']
    render json: {reservation: reservation, created: true,}, status: :ok
  end

  def react
  render json: Reservation.all
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
