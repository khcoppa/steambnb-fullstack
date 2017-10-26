# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Listing.delete_all

User.create!(
  username: 'guest',
  password: 'password'
)

Listing.create!(
  title: 'Listing 1',
  host_id: 1,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Highgrove_Sauna.jpg/200px-Highgrove_Sauna.jpg',
  price: 100,
  location: 'Los Angeles, California',
  guests: 1,
  bedrooms: 1,
  beds: 1,
  bath: 1
)
Listing.create!(
  title: 'Listing 2',
  host_id: 1,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Highgrove_Sauna.jpg/200px-Highgrove_Sauna.jpg',
  price: 200,
  location: 'New York, New York',
  guests: 2,
  bedrooms: 2,
  beds: 2,
  bath: 2
)

Listing.create!(
  title: 'Listing 3',
  host_id: 1,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Highgrove_Sauna.jpg/200px-Highgrove_Sauna.jpg',
  price: 300,
  location: 'Kansas City, Kansas',
  guests: 3,
  bedrooms: 3,
  beds: 3,
  bath: 3
)

Listing.create!(
  title: 'Listing 4',
  host_id: 1,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Highgrove_Sauna.jpg/200px-Highgrove_Sauna.jpg',
  price: 400,
  location: 'Toronto, Canada',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4
)
