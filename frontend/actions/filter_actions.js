import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchListings(getState().ui.filters)(dispatch);
}
