import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, nameTest, value, onChange, nameLabel } = this.props;
    return (
      <label htmlFor={ name }>
        { nameLabel }
        <input
          value={ value }
          onChange={ onChange }
          name={ name }
          type={ type }
          data-testid={ nameTest }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameTest: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  nameLabel: PropTypes.string.isRequired,
};

export default Input;
