class InputsController < ApplicationController
  before_action :set_input, only: [:show, :update, :destroy]

  # GET /inputs
  def index
    @inputs = Input.all

    render json: @inputs
  end

  # GET /inputs/1
  def show
    render json: @input
  end

  # POST /inputs
  def create
    @input = Input.new(input_params)
    
    if @input.save
      @inputs = Input.all
      render json: @inputs
    else
      render json: {
        errors: @input.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  
    # Only allow a list of trusted parameters through.
    def input_params
      params.require(:input).permit(:name, :age, :country)
    end
end
