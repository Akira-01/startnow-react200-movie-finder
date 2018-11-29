import { combineReducers } from 'redux';
import  movieDetailReducer from './containers/MovieDetailContainer/movieDetailReducer';
import  movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';



const rootReducer = combineReducers({

    movieSearchReducer: movieSearchReducer,
    movieDetailReducer: movieDetailReducer

});

export default rootReducer;