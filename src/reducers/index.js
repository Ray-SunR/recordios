import { combineReducers } from 'redux';
import audio from './audio';
import app from './app';

export default combineReducers({
  audio,
  app,
});
