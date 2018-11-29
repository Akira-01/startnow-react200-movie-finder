import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    history: store.movieSearchReducer.history,
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);