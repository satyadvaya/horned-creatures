import React, { Component } from 'react';

class Dropdown extends Component {
    // state = {  }
    render() {
        const { handleKeyword, options } = this.props;
        return (
            <select onChange={handleKeyword}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        );
    }
}
 
export default Dropdown;