require "test_helper"

class InputsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @input = inputs(:one)
  end

  test "should get index" do
    get inputs_url, as: :json
    assert_response :success
  end

  test "should create input" do
    assert_difference('Input.count') do
      post inputs_url, params: { input: { age: @input.age, country: @input.country, name: @input.name } }, as: :json
    end

    assert_response 201
  end

  test "should show input" do
    get input_url(@input), as: :json
    assert_response :success
  end

  test "should update input" do
    patch input_url(@input), params: { input: { age: @input.age, country: @input.country, name: @input.name } }, as: :json
    assert_response 200
  end

  test "should destroy input" do
    assert_difference('Input.count', -1) do
      delete input_url(@input), as: :json
    end

    assert_response 204
  end
end
