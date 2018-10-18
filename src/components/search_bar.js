import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        Search: <input onChange={this.onInputChange} />
      </div>
    );
  }

  //Event handler for input change
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
