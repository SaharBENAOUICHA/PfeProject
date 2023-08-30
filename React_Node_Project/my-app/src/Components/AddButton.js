import React from 'react';

class AddButton extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className="add-button" onClick={onClick}>
        +
      </button>
    );
  }
}

export default AddButton;