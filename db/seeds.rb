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
  image_url: 'https://d31eqxppr3nlos.cloudfront.net/wp-content/uploads/2014/04/shutterstock_154073177.jpg',
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
  image_url: 'https://a0.muscache.com/im/pictures/7255437/22cc8c2d_original.jpg?aki_policy=xx_large',
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
  image_url: 'https://i.pinimg.com/originals/5b/b6/9a/5bb69a6e211189c70c58686379cb63d6.jpg',
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
  image_url: 'https://i.pinimg.com/originals/17/a9/4b/17a94bcf29f8c465c29ddeeaec3403c8.jpg',
  price: 400,
  location: 'Toronto, Canada',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4
)
