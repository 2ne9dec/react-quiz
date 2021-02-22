import { combineReducers } from 'redux';
import authReducer from './auth';
import createReducer from './create';
import quizReducer from './quizReducer';

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer,
});
