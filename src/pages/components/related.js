import React from 'react';
import data from '../../api.json';
import './related.css';

function Related(props) {
  return (
    <div className="Related">
      <img src={data.logo} alt="" width={250} />
    </div>
  );
}

export default Related;
