import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    history: store.searchReducer.history,
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);