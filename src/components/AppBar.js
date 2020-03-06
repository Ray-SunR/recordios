import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreIcon from '@material-ui/icons/MoreVert';
import AlertDeletionDialogContainer from '../containers/AlertDeletionDialogContainer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#424242',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

class MyAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      download: false,
    };
  }

  setAnchorEl = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  close = () => {
    this.setState({
      anchorEl: null,
    });
  };

  aboutClicked = () => {
    this.setState((state) => {
      return { ...state, aboutOpen: !state.aboutOpen };
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.root}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {this.props.records.length !== 0
                ? this.props.records.length + ' recodings'
                : 'Recordios'}
            </Typography>
            {this.props.hasRecords && (
              <div>
                <Tooltip title='Download all as .zip'>
                  <IconButton
                    size='medium'
                    onClick={() => {
                      this.setState((state) => {
                        return {
                          ...state,
                          download: true,
                        };
                      });
                      this.props.onDownloadButtonClicked(this.props.records);
                    }}>
                    <GetAppIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Delete all'>
                  <IconButton
                    size='medium'
                    onClick={this.props.onDeleteButtonClicked}>
                    <DeleteForeverIcon />
                  </IconButton>
                </Tooltip>
              </div>
            )}
            <IconButton
              aria-label='display more actions'
              edge='end'
              onClick={this.setAnchorEl}>
              <MoreIcon />
            </IconButton>
            <Menu
              id='simple-menu'
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.close}>
              <MenuItem onClick={this.aboutClicked}>About</MenuItem>
            </Menu>
            <Dialog
              onClose={this.aboutClicked}
              aria-labelledby='customized-dialog-title'
              open={this.state.aboutOpen}>
              <DialogTitle
                id='customized-dialog-title'
                onClose={this.aboutClicked}>
                Recordios v1.0
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Recordios is made possible by @renchen. If you have any
                  suggestions or want to contribute, please PM me @renchen.
                </Typography>
              </DialogContent>
            </Dialog>
          </Toolbar>
        </AppBar>
        <AlertDeletionDialogContainer />
      </div>
    );
  }
}

export default withStyles(styles)(MyAppBar);
