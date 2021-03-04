import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../DateTime/DateTime.jsx';
import withPrettyTime from '../withPrettyTime/withPrettyTime.jsx';

const DateTimePretty = withPrettyTime(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Video;
