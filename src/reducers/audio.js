import {
  CHANGE_RECORD_STATE,
  RECORDING_DENIED,
  FINISH_RECORDING,
  CHANGE_TITLE,
  DURATION_DETERMINED,
  DELETE_ALL,
  DOWNLOAD_SINGLE_RECORDING,
  DELETE_SINGLE_RECORDING,
} from '../actions/types';
import produce from 'immer';
import { saveAs } from 'file-saver';

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds) % 60;
  return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
    .filter((a) => a)
    .join(':');
};

const formatByteUnit = (bytes) => {
  const val = Number.parseFloat(bytes / 1024 / 1024).toFixed(2);
  if (val === '0.00') {
    return bytes + ' Bytes';
  } else {
    return val + ' MB';
  }
};

export const audioInitialState = {
  recording: false,
  records: [],
  permissionDenied: false,
  maxRecorded: 0,
};

export default (state = audioInitialState, action) => {
  switch (action.type) {
    case CHANGE_RECORD_STATE:
      return {
        ...state,
        recording: !state.recording,
      };
    case RECORDING_DENIED:
      return {
        ...state,
        permissionDenied: true,
      };
    case FINISH_RECORDING:
      const date = new Date();
      return {
        ...state,
        records: [
          ...state.records,
          {
            title: 'Untitled #' + (state.maxRecorded + 1),
            duration: '',
            size: formatByteUnit(action.payload.blob.size),
            dateTime: date.toDateString() + ', ' + date.toLocaleTimeString(),
            url: URL.createObjectURL(action.payload.blob),
            blob: action.payload.blob,
          },
        ],
        maxRecorded: state.maxRecorded + 1,
      };
    case CHANGE_TITLE:
      return produce(state, (draft) => {
        draft.records[action.payload.index].title = action.payload.title;
      });
    case DURATION_DETERMINED:
      return produce(state, (draft) => {
        draft.records[action.payload.index].duration = formatTime(
          action.payload.duration
        );
      });
    case DELETE_ALL:
      return produce(state, (draft) => {
        draft.records = [];
      });
    case DOWNLOAD_SINGLE_RECORDING:
      saveAs(action.payload.record.blob, action.payload.record.title + '.mp3');
      return state;
    case DELETE_SINGLE_RECORDING:
      return produce(state, (draft) => {
        draft.records.splice(action.payload.index, 1);
      });
    default:
      return state;
  }
};
