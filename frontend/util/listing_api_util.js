export const fetchListings = data => (
  $.ajax({
    method: 'get',
    url: 'api/listings',
    data
  })
);

export const fetchListing = id => (
  $.ajax({
    method: 'get',
    url: `api/listings/${id}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'post',
    url: 'api/reviews',
    data: {review}
  })
);

export const createBooking = booking => (
  $.ajax({
    method: 'post',
    url: '/api/bookings',
    data: {booking}
  })
);
