import {
  CHANGE_RECORD_STATE,
  RECORDING_DENIED,
  FINISH_RECORDING,
  CHANGE_TITLE,
  DURATION_DETERMINED,
  DOWNLOAD_ALL,
  DELETE_ALL,
  ALERT_DELETION,
  DELETE_SINGLE_RECORDING,
  DOWNLOAD_SINGLE_RECORDING,
} from './types';
import JSZip from 'jszip';

const zip = new JSZip();
export const changeRecordState = () => ({
  type: CHANGE_RECORD_STATE,
});

export const recordingDenied = () => ({
  type: RECORDING_DENIED,
});

export const finishRecording = (blob) => ({
  type: FINISH_RECORDING,
  payload: {
    blob,
  },
});

export const changeTitle = (title, index) => ({
  type: CHANGE_TITLE,
  payload: {
    title,
    index,
  },
});

export const audioDurationDetermined = (duration, index) => ({
  type: DURATION_DETERMINED,
  payload: {
    duration,
    index,
  },
});

export const downloadAll = (records) => {
  records.forEach((record) => zip.file(record.title + '.mp3', record.blob));
  return {
    type: DOWNLOAD_ALL,
    payload: zip.generateAsync({ type: 'blob' }),
  };
};

export const deleteAll = () => ({
  type: DELETE_ALL,
});

export const alertDeletion = (alertDeletion) => ({
  type: ALERT_DELETION,
  payload: {
    alertDeletion,
  },
});

export const downloadSingle = (record) => ({
  type: DOWNLOAD_SINGLE_RECORDING,
  payload: {
    record
  },
});

export const deleteSingle = (index) => ({
  type: DELETE_SINGLE_RECORDING,
  payload: {
    index,
  },
});
