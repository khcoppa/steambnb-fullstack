require 'test_helper'

class BookingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get bookings_create_url
    assert_response :success
  end

end
