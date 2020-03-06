import { DOWNLOAD_ALL, ALERT_DELETION, DELETE_ALL } from '../actions/types';
import produce from 'immer';
import { saveAs } from 'file-saver';
const NONE = 'NONE';
export const ZIPPING = 'ZIPPING';

export const appInitialState = {
  alertDeletion: false,
  zip: NONE,
};

export default (state = appInitialState, action) => {
  switch (action.type) {
    case ALERT_DELETION:
      return produce(state, (draft) => {
        draft.alertDeletion = action.payload.alertDeletion;
      });
    case DELETE_ALL:
      return produce(state, (draft) => {
        draft.alertDeletion = false;
      });
    case DOWNLOAD_ALL + '_PENDING':
      return produce(state, (draft) => {
        draft.zip = ZIPPING;
      });
    case DOWNLOAD_ALL + '_FULFILLED':
      saveAs(action.payload, 'audios.zip');
      return produce(state, (draft) => {
        draft.zip = NONE;
      });
    default:
      return state;
  }
};
