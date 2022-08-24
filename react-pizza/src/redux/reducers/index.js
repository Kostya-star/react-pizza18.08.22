import {combineReducers} from 'redux';
import filtersReducer from './filtersReducer';
import pizzasReducer from './pizzasReducer';


const rootReducer = combineReducers({
  filtersReducer: filtersReducer,
  pizzasReducer: pizzasReducer,
})

export default rootReducer;