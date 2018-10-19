import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD3o7QSIZ4qAYJ_LCDnlu8ymyEE0QQLHh8';

YTSearch(
  {
    key: API_KEY,
    term: 'surfboards'
  },
  data => {
    this.setState({
      videos: data
    });
  }
);
// Create a new component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

//Render the component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
