# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171103132642) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "booker_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.integer "host_id", null: false
    t.string "image_url", null: false
    t.integer "price", null: false
    t.string "location", null: false
    t.integer "guests", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.integer "bath", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat", null: false
    t.float "lng", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", default: "", null: false
    t.integer "rating", null: false
    t.integer "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url", default: "https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
