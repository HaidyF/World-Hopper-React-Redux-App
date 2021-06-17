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
      render json: @input.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inputs/1
  def update
    if @input.update(input_params)
      render json: @input
    else
      render json: @input.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inputs/1
  def destroy
    @input.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_input
      @input = Input.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def input_params
      params.require(:input).permit(:name, :age, :country)
    end
end
