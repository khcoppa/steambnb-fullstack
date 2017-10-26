class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.integer :host_id, null: false
      t.string :image_url, null: false
      t.integer :price, null: false
      t.string :location, null: false
      t.integer :guests, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.integer :bath, null: false

      t.timestamps
    end
  end
end
