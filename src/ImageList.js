import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    // state = {  }
    render() { 
        return (
            <ul>
                {this.props.horned.map((item) => (
                    <ImageItem key={item.id} image={item} />
                ))}
            </ul>
        );
    }
}
 
export default ImageList;