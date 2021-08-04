import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return (
            <li>
                <img src={this.props.image.url} alt={this.props.image.title} />
                <h2>{this.props.image.title}</h2>
            </li>
        );
    }
}
 
export default ImageItem;