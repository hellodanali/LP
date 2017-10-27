import { combineReducers } from 'redux';
import common from './Common';
import client from '../config/apollo';

const apollo = client.reducer();

export default combineReducers({
  common,
  apollo
});
