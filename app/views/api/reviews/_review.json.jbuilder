json.extract! review, :id, :user_id, :rating, :body, :listing_id

json.user do
  json.partial! '/api/users/user', user: review.user
end
