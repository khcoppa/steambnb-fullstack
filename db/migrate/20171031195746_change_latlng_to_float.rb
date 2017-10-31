class ChangeLatlngToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :listings, :lat, :float, null: false
    change_column :listings, :lng, :float, null: false
  end
end
