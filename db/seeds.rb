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
Booking.delete_all

User.create!(
  id: 1,
  username: 'Guest',
  password: 'password',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png'
)
User.create!(
  id: 2,
  username: 'Koopa',
  password: 'troopa',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png'
)
User.create!(
  id: 3,
  username: 'Nicole',
  password: 'password',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png'
)
User.create!(
  id: 4,
  username: 'Kevin',
  password: 'password',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png'
)
User.create!(
  id: 5,
  username: 'Eva',
  password: 'password',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png'
)
User.create!(
  id: 6,
  username: 'Diana',
  password: 'password'
)
User.create!(
  id: 7,
  username: 'Lauren',
  password: 'password',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png'
)

Listing.create!(
  id: 1,
  title: 'The Trailhead Spa',
  host_id: 1,
  image_url: 'https://media.cntraveler.com/photos/568d796e67dc82253d9f8c27/master/w_1440,c_limit/rca-spas-brush-creek-ranch-cr-courtesy.jpg',
  price: 100,
  location: 'Saratoga, Wyoming',
  guests: 1,
  bedrooms: 1,
  beds: 1,
  bath: 1,
  lat: 41.4550,
  lng: -106.8064
)
Listing.create!(
  id: 2,
  title: 'Sauna with a View',
  host_id: 1,
  image_url: 'https://www.bergkristall.de/media/49103/bergkristall-sep14-s9a3064-web-1481025.jpg',
  price: 200,
  location: 'New York City, New York',
  guests: 2,
  bedrooms: 2,
  beds: 2,
  bath: 2,
  lat: 40.7128,
  lng: -74.0060
)
Listing.create!(
  id: 3,
  title: 'The Lodge at Woodloch',
  host_id: 1,
  image_url: 'https://media.cntraveler.com/photos/56902a9c97fabb663f34aaa7/master/w_1440,c_limit/rca-spas-lodge-at-woodloch-cr-courtesy.jpg',
  price: 300,
  location: 'Hawley, Pennsylvania',
  guests: 3,
  bedrooms: 3,
  beds: 3,
  bath: 3,
  lat: 41.4759,
  lng: -75.1821
)
Listing.create!(
  id: 4,
  title: 'Spa Montage',
  host_id: 1,
  image_url: 'https://media.cntraveler.com/photos/568d918c67dc82253d9f8d6a/master/w_1440,c_limit/rca-spas-montage-beverly-hills-cr-courtesy.jpg',
  price: 400,
  location: 'Beverly Hills, California',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 34.0736,
  lng: -118.4004
)
Listing.create!(
  id: 5,
  title: 'Agora Sauna',
  host_id: 1,
  image_url: 'https://i1.wp.com/www.salted.no/wp-content/uploads/2014/09/IMG_8487-Marte_Antonsen.jpg',
  price: 400,
  location: 'Sandhornøya, Norway',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 67.073557,
  lng: 14.137287
)
Listing.create!(
  id: 6,
  title: 'Spa Finland',
  host_id: 1,
  image_url: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/03/sauna-hermanni_1_014.jpg',
  price: 400,
  location: 'Helsinki, Finland',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 60.168542,
  lng: 24.934801
)
Listing.create!(
  id: 7,
  title: 'Las Vegas Sauna',
  host_id: 1,
  image_url: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/03/sauna-hermanni_1_014.jpg',
  price: 400,
  location: 'Las Vegas, Nevada',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 36.1699,
  lng: -115.1398
)
Listing.create!(
  id: 8,
  title: 'Luxor Spa',
  host_id: 1,
  image_url: 'http://c767204.r4.cf2.rackcdn.com/b7e82d30-9b36-49fc-b068-9dc3b02635ff.jpg',
  price: 400,
  location: 'Las Vegas, Nevada',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 34.0737,
  lng: -118.4004
)
Listing.create!(
  id: 9,
  title: 'Spacious Sauna',
  host_id: 1,
  image_url: 'https://i.pinimg.com/originals/61/1a/f4/611af4b49c9d4fe2132c050ab82f00f3.jpg',
  price: 400,
  location: 'Closter, New Jersey',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 40.9732,
  lng: -73.9615
)
Listing.create!(
  id: 10,
  title: 'The Peninsula Spa',
  host_id: 1,
  image_url: 'https://media.cntraveler.com/photos/568e811a67dc82253d9f9351/master/w_1440,c_limit/rca-spas-peninsula-new-york-cr-courtesy.jpg',
  price: 400,
  location: 'San Francisco, California',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 37.7749,
  lng: -122.4194
)

Listing.create!(
  id: 11,
  title: 'Beautiful Spa in the City',
  host_id: 1,
  image_url: 'https://www.elmshotelandspa.com/files/1256/client_0000841523Hdr1.jpg',
  price: 100,
  location: 'Chicago, Illinois',
  guests: 1,
  bedrooms: 1,
  beds: 1,
  bath: 1,
  lat: 41.4550,
  lng: -106.8064
)
Listing.create!(
  id: 12,
  title: 'Outdoor Relaxation Spa',
  host_id: 1,
  image_url: 'https://a0.muscache.com/im/pictures/23991343/89872a3f_original.jpg?aki_policy=xx_large',
  price: 200,
  location: 'Atlantic City, New Jersey',
  guests: 2,
  bedrooms: 2,
  beds: 2,
  bath: 2,
  lat: 40.7128,
  lng: -74.0060
)
Listing.create!(
  id: 13,
  title: 'Bubbles',
  host_id: 1,
  image_url: 'https://ny.spacastleusa.com/wp-content/uploads/2015/09/DSC061841.jpg',
  price: 300,
  location: 'Austin, Texas',
  guests: 3,
  bedrooms: 3,
  beds: 3,
  bath: 3,
  lat: 41.4759,
  lng: -75.1821
)
Listing.create!(
  id: 14,
  title: 'Saints Spa',
  host_id: 1,
  image_url: 'https://08c05c250d7be93602d3-b33ef44eafa8af7dc753fc4ea00a959c.ssl.cf1.rackcdn.com/87/2/large.jpg',
  price: 400,
  location: 'New Orleans, Louisiana',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 34.0736,
  lng: -118.4004
)
Listing.create!(
  id: 15,
  title: 'Grand Hotel and Spa',
  host_id: 1,
  image_url: 'http://www.grandhoteloceancity.com/wp-content/uploads/2016/12/Grand_Hotel-Exterior_Night.jpg',
  price: 400,
  location: 'Orlando, Florida',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 67.073557,
  lng: 14.137287
)
Listing.create!(
  id: 16,
  title: 'Small Town Spa',
  host_id: 1,
  image_url: 'http://2f74d26a73ae1ad7d267-34522a54f6514f2b04f5f718c48c669b.r7.cf1.rackcdn.com/responsive/1900/2f74d26a73ae1ad7d267-34522a54f6514f2b04f5f718c48c669b.r7.cf1.rackcdn.com/responsive/16:9/2f74d26a73ae1ad7d267-34522a54f6514f2b04f5f718c48c669b.r7.cf1.rackcdn.com/restaurants-irs/235238/wes3818sp-205597-Heavenly-Spa-Hot-Tub.jpg',
  price: 400,
  location: 'Scottsdale, Arizona',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 60.168542,
  lng: 24.934801
)
Listing.create!(
  id: 17,
  title: 'Westgate Spa',
  host_id: 1,
  image_url: 'https://images.trvl-media.com/hotels/1000000/850000/849300/849229/849229_207_z.jpg',
  price: 400,
  location: 'Detroit, Michigan',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 36.1699,
  lng: -115.1398
)
Listing.create!(
  id: 18,
  title: 'Rooftop Spa',
  host_id: 1,
  image_url: 'https://5thingstodotoday.files.wordpress.com/2016/01/dusk-on-the-rooftop-pool.jpg',
  price: 400,
  location: 'Nashville, Tennessee',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 34.0737,
  lng: -118.4004
)
Listing.create!(
  id: 19,
  title: 'Winter Wonderland',
  host_id: 1,
  image_url: 'https://webmedia.westgateresorts.com/prometheus/getImage?id=34871',
  price: 400,
  location: 'Portland, Maine',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 40.9732,
  lng: -73.9615
)
Listing.create!(
  id: 20,
  title: 'Lights Spa',
  host_id: 1,
  image_url: 'https://www.travelforsenses.com/wp-content/uploads/2016/07/las-vegas-spa-hammam-1-850x500.jpg',
  price: 400,
  location: 'Raliegh, North Carolina',
  guests: 4,
  bedrooms: 4,
  beds: 4,
  bath: 4,
  lat: 37.7749,
  lng: -122.4194
)

# -- 1
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 1,
  user_id: 4
)
Booking.create!(
  booker_id: 4,
  listing_id: 1,
  start_date: "2017-11-20",
  end_date: "2017-11-30"
)
Review.create!(
  body: 'The place was very nice. The drive up was beautiful. The place has so much charm.',
  rating: 4,
  listing_id: 1,
  user_id: 5
)
Booking.create!(
  booker_id: 5,
  listing_id: 1,
  start_date: "2017-12-01",
  end_date: "2017-12-03"
)
# -- 2
Review.create!(
  body: 'The place was nice. The drive up was not great. As you walk into the gate the smell was okay, and the place has some charm.',
  rating: 3,
  listing_id: 2,
  user_id: 3
)
Booking.create!(
  booker_id: 3,
  listing_id: 2,
  start_date: "2017-11-27",
  end_date: "2017-12-06"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 2,
  user_id: 2
)
Booking.create!(
  booker_id: 2,
  listing_id: 2,
  start_date: "2017-12-07",
  end_date: "2017-12-08"
)
# -- 3
Review.create!(
  body: 'The place was nice. The drive up was not great. As you walk into the gate the smell was okay, and the place has some charm.',
  rating: 3,
  listing_id: 3,
  user_id: 5
)
Booking.create!(
  booker_id: 5,
  listing_id: 3,
  start_date: "2017-11-22",
  end_date: "2017-11-26"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 3,
  user_id: 6
)
Booking.create!(
  booker_id: 6,
  listing_id: 3,
  start_date: "2017-11-18",
  end_date: "2017-11-21"
)
# -- 4
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 4,
  user_id: 5
)
Booking.create!(
  booker_id: 5,
  listing_id: 4,
  start_date: "2017-12-03",
  end_date: "2017-12-06"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 4,
  user_id: 7
)
Booking.create!(
  booker_id: 7,
  listing_id: 4,
  start_date: "2017-11-10",
  end_date: "2017-11-12"
)
# -- 5
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 5,
  user_id: 2
)
Booking.create!(
  booker_id: 2,
  listing_id: 5,
  start_date: "2017-12-03",
  end_date: "2017-12-04"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 5,
  user_id: 3
)
Booking.create!(
  booker_id: 3,
  listing_id: 5,
  start_date: "2017-12-05",
  end_date: "2017-12-06"
)
# -- 6
Review.create!(
  body: 'The place was very nice. The drive up was beautiful. The place has so much charm.',
  rating: 4,
  listing_id: 6,
  user_id: 1
)
Booking.create!(
  booker_id: 1,
  listing_id: 6,
  start_date: "2017-12-01",
  end_date: "2017-12-03"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 6,
  user_id: 6
)
Booking.create!(
  booker_id: 6,
  listing_id: 6,
  start_date: "2017-12-07",
  end_date: "2017-12-08"
)
# -- 7
Review.create!(
  body: 'The place was very nice. The drive up was beautiful. The place has so much charm.',
  rating: 4,
  listing_id: 7,
  user_id: 1
)
Booking.create!(
  booker_id: 1,
  listing_id: 7,
  start_date: "2017-12-03",
  end_date: "2017-12-06"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 7,
  user_id: 3
)
Booking.create!(
  booker_id: 3,
  listing_id: 7,
  start_date: "2017-12-01",
  end_date: "2017-12-02"
)
# -- 8
Review.create!(
  body: 'The place was very nice. The drive up was beautiful. The place has so much charm.',
  rating: 4,
  listing_id: 8,
  user_id: 1
)
Booking.create!(
  booker_id: 1,
  listing_id: 8,
  start_date: "2017-11-28",
  end_date: "2017-11-29"
)
Review.create!(
  body: 'The place was as amazing as it seemed. The drive up was beautiful. As you walk into the gate the smell was intoxicating, and the place has so much charm.',
  rating: 5,
  listing_id: 8,
  user_id: 2
)
Booking.create!(
  booker_id: 2,
  listing_id: 8,
  start_date: "2017-12-07",
  end_date: "2017-12-08"
)
