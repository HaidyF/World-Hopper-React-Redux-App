class CountriesController < ApplicationController
  before_action :set_country, only: [:show, :update, :destroy]

  # GET /countries
  def index
    @countries = Country.all

    render json: @countries
  end

  # GET /countries/1
  def show
    render json: @country
  end

  
    # Only allow a list of trusted parameters through.
    def country_params
      params.require(:country).permit(:name, :flag, :capital, :region, :population, :timezones, :language)
    end
end
