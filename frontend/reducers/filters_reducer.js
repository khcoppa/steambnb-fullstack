import merge from 'lodash/merge';
import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {}
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, state, { [action.filter]: action.value });
    default:
      return state;
  }
};

export default FiltersReducer;
