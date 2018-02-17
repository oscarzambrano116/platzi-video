import React from 'react';
import { formattedTime } from '../../utils/helper';
import './timer.css';

const Timer = (props) => (
  <div className="Timer">
    <p>
      <span>
        {`${formattedTime(props.currentTime)} / ${formattedTime(props.duration)}`}
      </span>
    </p>
  </div>
);

export default Timer;
