import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
     user: UserReducer,
     category: CategoryReducer,
});