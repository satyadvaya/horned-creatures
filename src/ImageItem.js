import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return (
            <p>
                {this.props.image.title}
            </p>
        );
    }
}
 
export default ImageItem;