class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :body, default: "", null: false
      t.integer :rating, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end
    add_index :reviews, :listing_id
  end
end
