import React, { Component } from 'react';
import ImageList from './ImageList.js';
import images from './data.js';
import './App.css';
import Dropdown from './Dropdown.js';

class App extends Component {
    state = {
      keyword: 'All',
      // horns: 'All',
    };

    options = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']

    handleKeyword = (event) => {
      this.setState({ keyword: event.target.value });
    };

    // handleHorns = (event) => {
    //   this.setState({ horns: event.target.value });
    // }

    render() {
      const filteredCreatures = images.filter(
        (item) => this.state.keyword === 'All' || item.keyword === this.state.keyword
      );

        return (
            <div className="App">
                <h1>Horned Creatures</h1>
                <Dropdown
                  options={this.options}
                  handleKeyword={this.handleKeyword}
                />
                {/* <select onChange={this.handleHorns}>
                    <option value="All">All Horns</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </select>                 */}
                <ImageList horned={filteredCreatures} />
            </div>
        );
    }
}

export default App;