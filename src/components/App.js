import React from 'react';
import RecordListContainer from '../containers/RecordListContainer';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id='mainContent'>
        <RecordListContainer />
        <Backdrop className={classes.backdrop} open={this.props.zipping}>
          <CircularProgress color='inherit' />
        </Backdrop>
      </div>
    );
  }
}

export default withStyles(styles)(App);
