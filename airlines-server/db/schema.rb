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

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2018_06_05_062256) do
=======
ActiveRecord::Schema.define(version: 2018_06_05_061310) do
>>>>>>> 017f99be41b3f5f037bb5c68804e9d52e4f2c8ae

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table "users", force: :cascade do |t|
    t.text "email"
    t.text "username"
    t.text "password_digest"
    t.integer "user_type"
=======
  create_table "airplanes", force: :cascade do |t|
    t.string "plane_id"
    t.string "airline_company"
    t.integer "row"
    t.integer "column"
>>>>>>> 017f99be41b3f5f037bb5c68804e9d52e4f2c8ae
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
