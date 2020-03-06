import { connect } from 'react-redux';
import App from '../components/App';
import { ZIPPING } from '../reducers/app';

const mapStateToProps = (state) => {
  return {
    blobs: state.audio.blobs,
    zipping: state.app.zip === ZIPPING
  };
};

export default connect(mapStateToProps)(App);
