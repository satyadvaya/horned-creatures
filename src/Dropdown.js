import React, { Component } from 'react';

class Dropdown extends Component {
    // state = {  }
    render() {
        const { handleChange, options } = this.props;
        return (
            <select onChange={handleChange}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        );
    }
}
 
export default Dropdown;