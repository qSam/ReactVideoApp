import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD3o7QSIZ4qAYJ_LCDnlu8ymyEE0QQLHh8';

// Create a new class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch(
      {
        key: API_KEY,
        term: 'drake nice for what'
      },
      data => {
        this.setState({
          videos: data
        });
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Render the component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
