export const createBooking = (booking) => {
  debugger
  return $.ajax({
    method: 'post',
    url: `api/bookings`,
    data: booking
  });
}
