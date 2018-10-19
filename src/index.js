import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD3o7QSIZ4qAYJ_LCDnlu8ymyEE0QQLHh8';

// Create a new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Render the component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
