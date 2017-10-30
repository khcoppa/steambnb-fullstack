json.extract! listing, :id, :title, :image_url, :price, :location, :guests,
  :bedrooms, :beds, :bath

json.reviews do
  json.partial! '/api/reviews/review', collection: listing.reviews, as: :review
end
