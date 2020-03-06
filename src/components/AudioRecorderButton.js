import React from 'react';
import MicRecorder from './MicRecorder';
import MicIcon from '@material-ui/icons/MicRounded';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const styles = (theme) => ({
  root: {
    color: 'white',
    backgroundColor: 'rgb(245, 0, 87)',
    width: '56px',
    height: '56px',
    padding: '0',
    minWidth: 0,
    borderRadius: '50%',
  },
});

class AudioRecorderButton extends React.Component {
  constructor(props) {
    super(props);
    window.URL = window.URL || window.webkitURL;
  }

  start = () => {
    Mp3Recorder.start()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        this.props.finishRecording(blob);
        // const zip = new JSZip();
        // zip.file('renchen.mp3', blob);
        // zip.generateAsync({ type: 'blob' }).then(function(content) {
        //   // see FileSaver.js
        //   saveAs(content, 'example.zip');
        // });
        // const file = new File(buffer, 'me-at-thevoice.mp3', {
        //   type: blob.type,
        //   lastModified: Date.now(),
        // });

        // const player = new Audio(URL.createObjectURL(file));
        // player.play();
      })
      .catch((e) => console.log(e));
  };

  onRecordMouseDown = () => {
    if (!this.props.recording) {
      this.start();
    }
    this.props.changeRecordState();
  };

  onRecordMouseUp = () => {
    this.stop();
    this.props.changeRecordState();
  };

  componentDidMount() {
    navigator.mediaDevices.getUserMedia(
      { audio: true },
      () => {
        console.log('Permission Granted');
      },
      () => {
        console.log('Permission Denied');
        this.props.recordingDenied();
      }
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton
          classes={{
            root: classes.root,
          }}
          onMouseDown={this.onRecordMouseDown}
          onMouseUp={this.onRecordMouseUp}
          aria-label='Record'
          size='medium'>
          <MicIcon />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(AudioRecorderButton);
