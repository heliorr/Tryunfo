import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { type, name, nameTest, checked, onChange, nameLabel } = this.props;
    return (
      <label htmlFor={ name }>
        { nameLabel }
        <input
          checked={ checked }
          onChange={ onChange }
          name={ name }
          type={ type }
          data-testid={ nameTest }
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameTest: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  nameLabel: PropTypes.string.isRequired,
};

export default InputCheckbox;
