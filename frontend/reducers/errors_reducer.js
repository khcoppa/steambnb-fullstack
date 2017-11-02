import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import entities from './entities_errors_reducer';

export default combineReducers({
  session,
  entities
});
