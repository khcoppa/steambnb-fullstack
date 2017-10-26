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
