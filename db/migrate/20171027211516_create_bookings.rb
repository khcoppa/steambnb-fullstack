class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :booker_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end
    add_index(:booked, [:booker_id, :listing_id, :start_date, :end_date])
  end
end
