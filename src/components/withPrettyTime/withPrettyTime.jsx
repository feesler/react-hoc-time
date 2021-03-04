import React from 'react';
import { formatTimePretty } from '../../utils/DateTimeUtils.js';

function withPrettyTime(Component) {
  return function (props) {
    const { date, ...remain } = props;
    const dateFmt = formatTimePretty(date);

    return (
      <Component date={dateFmt} {...remain} />
    )
  }
}

export default withPrettyTime;
