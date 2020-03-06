import { connect } from 'react-redux';
import AppBar from '../components/AppBar';
import { downloadAll, alertDeletion } from '../actions';

const mapStateToProps = (state) => ({
  hasRecords: state.audio.records.length !== 0,
  records: state.audio.records,
});

const mapDispatchToProps = (dispatch) => ({
  onDownloadButtonClicked: (records) => dispatch(downloadAll(records)),
  onDeleteButtonClicked: () => dispatch(alertDeletion(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
