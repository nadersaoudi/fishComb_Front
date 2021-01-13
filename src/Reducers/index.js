import { combineReducers } from 'redux';
import auth from './auth.red'
import Post from './Post'
import Friends from './friends'
import Profile from './Profile'
import events from './events'
export default combineReducers({

    auth,Post,Friends,Profile,events

});