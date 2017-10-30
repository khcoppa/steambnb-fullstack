# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Listing.delete_all
Review.delete_all

User.create!(
  id: 1,
  username: 'guest',
  password: 'password'
)

Listing.create!(
  id: 1,
  title: 'Gøteborg Bathing Culture',
  host_id: 1,
  image_url: 'http://images.adsttc.com/media/images/5625/98eb/e58e/ce12/7a00/00ae/slideshow/Gb_sauna_inside_2.jpg?1445304536',
  price: 100,
  location: 'Los Angeles, California',
  guests: 1,
  bedrooms: 1,
  beds: 1,
  bath: 1
)
Listing.create!(
  title: 'Large Triple-Level Sauna House',
  host_id: 1,
  image_url: 'https://d31eqxppr3nlos.cloudfront.net/wp-content/uploads/2014/04/shutterstock_92887687.jpg',
  price: 200,
  location: 'New York, New York',
  guests: 2,
  bedrooms: 2,
  beds: 2,
  bath: 2
)

Listing.create!(
  title: 'Norwegian Viewpoint Snøhetta',
  host_id: 1,
  image_url: 'https://nordre-ekre.no/wp-content/uploads/2016/01/nordre-ekre-viewpointSN%C3%98HETTA%C2%A9diephotodesigner_2.jpg',
  price: 300,
  location: 'Kansas City, Kansas',
  guests: 3,
  bedrooms: 3,
  beds: 3,
  bath: 3
)

Listing.create!(
  title: 'Project Floating Sauna',
  host_id: 1,
  image_url: 'https://www.competitionline.com/upload/images/f/b/9/2/3/7/1/9/fb923719d041e3fb0949fd34832eb532_1.jpg',
  price: 400,
  location: 'Toronto, Canada',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4
)

Review.create!(
  body: 'Very nice',
  rating: 5,
  listing_id: 1,
  user_id: 1
)
