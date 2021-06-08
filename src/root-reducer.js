import { combineReducers } from 'redux';
import authReducer from 'src/modules/auth/reducer';
import checklistReducer from 'src/modules/checklist/reducer';

export default combineReducers({
  authReducer,
  checklistReducer,
});
