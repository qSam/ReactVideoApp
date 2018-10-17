import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
const App = function() {
  return <div>Hi!</div>;
};

//Render the component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
