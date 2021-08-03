import React, { Component } from 'react';

import ImageItem from './ImageItem.js';

class ImageList extends Component {
    // state = {  }
    render() { 
        return (
            <>
                <h1>Image List</h1>
                {this.props.images.map((item) => (
                    <ImageItem key={item.id} image={item} />
                ))}
            </>
        );
    }
}
 
export default ImageList;