import { connect } from 'react-redux';
import {
  changeRecordState,
  recordingDenied,
  finishRecording,
} from '../actions';
import AudioRecorder from '../components/AudioRecorderButton';

const mapStateToProps = (state) => ({
  recording: state.audio.recording,
  disableButton: state.audio.recording || state.audio.permissionDenied,
});

const mapDispatchToProps = (dispatch) => ({
  changeRecordState: () => dispatch(changeRecordState()),
  recordingDenied: () => dispatch(recordingDenied()),
  finishRecording: (blob) => dispatch(finishRecording(blob)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecorder);
