import { connect } from 'react-redux';
import AlertDeletionDialog from '../components/AlertDeletionDialog';
import { alertDeletion, deleteAll } from '../actions';

const mapStateToProps = (state) => ({
  open: state.app.alertDeletion,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(alertDeletion(false)),
  deleteAll: () => dispatch(deleteAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertDeletionDialog);
