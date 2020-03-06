import React from 'react';
import Divider from '@material-ui/core/Divider';
import RecordItem from '../components/RecordItem';
import Typography from '@material-ui/core/Typography';

export default class RecordList extends React.Component {
  render() {
    if (this.props.records.length !== 0) {
      return (
        <div>
          <ul>
            {this.props.records.map((item, index) => (
              <div key={index}>
                <li key={index}>
                  <RecordItem
                    key={index}
                    title={item.title}
                    dateTime={item.dateTime}
                    duration={item.duration}
                    size={item.size}
                    url={item.url}
                    onChangeTitle={(title) =>
                      this.props.onChangeTitle(title, index)
                    }
                    durationDetermined={(duration) =>
                      this.props.duration(duration, index)
                    }
                    onDownloadButtonClicked={() =>
                      this.props.onDownloadButtonClicked(
                        this.props.records[index]
                      )
                    }
                    onDeleteButtonClicked={() =>
                      this.props.onDeleteButtonClicked(index)
                    }
                  />
                </li>
                <Divider />
              </div>
            ))}
          </ul>
          <div id='placeHolderItem' />
        </div>
      );
    } else {
      return (
        <div id='recordListInfoText'>
          <Typography variant='h4'>
            You don't have any recordings yet. Press and hold the audio button
            on the bottom to start.
          </Typography>
        </div>
      );
    }
  }
}
