import React, { Component } from 'react';

import ImageList from './ImageList.js';

import images from './data.js';

class App extends Component {
    state = {  }
    render() { 
        return (
            <div className="App">
                <h1>Whatever</h1>
                <ImageList images={images}/>
            </div>
        );
    }
}
 
export default App;