import React from 'react';
import PropTypes from 'prop-types';
import Video from '../Video/Video.jsx';

function VideoList(props) {
  const { list } = props;

  return list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(Video.propTypes)
  ).isRequired,
};

export default VideoList;
