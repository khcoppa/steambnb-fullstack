class AddCoordinatesToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :lat, :integer
    add_column :listings, :lng, :integer
  end
end
