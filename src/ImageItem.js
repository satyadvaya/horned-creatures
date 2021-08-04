import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return (
            <p>
                {this.props.image.title}
                <img src={this.props.image.url} width="100" alt={this.props.image.title}
                />
            </p>
        );
    }
}
 
export default ImageItem;