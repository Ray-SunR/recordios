import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
const styles = {
  input: {
    color: '#0096ef',
    fontSize: '18px',
  },
};

class RecordItem extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.state = {
      show: true,
    };
  }

  componentWillUnmount() {
    this.setState({
      show: false,
    });
  }

  render() {
    const { classes } = this.props;
    const props = this.props;
    return (
      <Slide direction='right' in={this.state.show} unmountOnExit>
        <Paper elevation={4}>
          <div className='recordItem'>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div className='title'>
                  <TextField
                    InputProps={{
                      className: classes.input,
                    }}
                    onChange={(event) =>
                      props.onChangeTitle(event.target.value)
                    }
                    value={props.title}
                  />
                </div>
                <div className='dateTime'>{props.dateTime}</div>
              </Grid>

              <Grid item xs={6}>
                <div className='audioPlayerContainer'>
                  <audio
                    ref={this.audio}
                    src={props.url}
                    controls='controls'
                    onLoadedMetadata={() => {
                      props.durationDetermined(this.audio.current.duration);
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={1}>
                <div className='metadataContainer'>
                  <div className='duration'>{props.duration}</div>
                  <div className='size'>{props.size}</div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div id='downloadButtonContainer'>
                  <IconButton
                    size='medium'
                    classes={classes.root}
                    onClick={this.props.onDownloadButtonClicked}>
                    <CloudDownloadRoundedIcon />
                  </IconButton>
                  <IconButton
                    aria-label='delete'
                    classes={classes.root}
                    onClick={this.props.onDeleteButtonClicked}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Slide>
    );
  }
}

export default withStyles(styles)(RecordItem);
