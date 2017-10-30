export const createBooking = booking => (
  $.ajax({
    method: 'post',
    url: '/api/bookings',
    data: booking
  })
);
