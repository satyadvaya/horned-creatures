import React, { Component } from 'react';
import ImageList from './ImageList.js';
import images from './data.js';
import './App.css';

class App extends Component {
    state = {
      keyword: 'All',
    };

    handleKeyword = (event) => {
      this.setState({ keyword: event.target.value });
    };

    render() {
      const filteredCreatures = images.filter(
        (item) => this.state.keyword === 'All' || item.keyword === this.state.keyword
      );

        return (
            <div className="App">
                <h1>Horned Creatures</h1>
                <select onChange={this.handleKeyword}>
                    <option value="All">All Taxonomies</option>
                    <option value="narwhal">Narwhal</option>
                    <option value="rhino">Rhino</option>
                    <option value="unicorn">Unicorn</option>
                    <option value="unilego">Unilego</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="markhor">Markhor</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="chameleon">Chameleon</option>
                    <option value="lizard">Lizard</option>
                    <option value="dragon">Dragon</option>
                </select>
                <ImageList horned={filteredCreatures} />
            </div>
        );
    }
}

export default App;