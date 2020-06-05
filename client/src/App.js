import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

export default function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
} 