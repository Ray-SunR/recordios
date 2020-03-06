import React from 'react';
import AudioRecorderContainer from '../containers/AudioRecorderContainer';

export default () => {
  return (
    <div id='bottomBar'>
      <div id='recordButton'>
        <AudioRecorderContainer />
      </div>
    </div>
  );
};
