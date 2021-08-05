import React, { Component } from 'react';
import ImageList from './ImageList.js';
import images from './data.js';
import './App.css';
import Dropdown from './Dropdown.js';

class App extends Component {
    state = {
      keyword: 'All',
      horns: 'All',
    };

    options = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];
    hornsOptions = ['All', '1', '2', '3', '100'];

    handleKeyword = (event) => {
      this.setState({ keyword: event.target.value });
    };

    handleHorns = (event) => {
      const numberifiedHorns = Number(event.target.value);
      this.setState({ horns: numberifiedHorns });
    };

    render() {
      const filteredCreatures = images.filter(
        (item) => this.state.keyword === 'All' || item.keyword === this.state.keyword
      );
      const furtherFilteredCreatures = filteredCreatures.filter(
        (item) => this.state.horns === 'All' || item.horns === this.state.horns
      );

        return (
            <div className="App">
                <h1>Horned Creatures</h1>
                <Dropdown
                  options={this.options}
                  handleChange={this.handleKeyword}
                />
                <Dropdown
                  options={this.hornsOptions}
                  handleChange={this.handleHorns}
                  />
                {/* <select onChange={this.handleHorns}>
                    <option value="All">All Horns</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </select>                 */}
                <ImageList horned={furtherFilteredCreatures} />
            </div>
        );
    }
}

export default App;