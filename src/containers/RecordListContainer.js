import { connect } from 'react-redux';
import RecordList from '../components/RecordList';
import {
  changeTitle,
  audioDurationDetermined,
  downloadSingle,
  deleteSingle,
} from '../actions';
const mapStateToProps = (state) => ({
  records: state.audio.records,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTitle: (title, index) => dispatch(changeTitle(title, index)),
  duration: (duration, index) =>
    dispatch(audioDurationDetermined(duration, index)),
  onDownloadButtonClicked: (record) => dispatch(downloadSingle(record)),
  onDeleteButtonClicked: (index) => dispatch(deleteSingle(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordList);
