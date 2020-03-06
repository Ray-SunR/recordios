import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDeletionDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            {'Delete all your recordings?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Are you sure you want to delete all your recordings?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.props.deleteAll} color='primary' autoFocus>
              Delete all
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
