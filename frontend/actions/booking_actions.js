import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const createBooking = booking => dispatch => (
  BookingAPIUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)))
);
