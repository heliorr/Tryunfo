import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { name, nameTest, value, onChange, nameLabel } = this.props;
    return (
      <label htmlFor={ name }>
        { nameLabel }
        <select
          value={ value }
          name={ name }
          onChange={ onChange }
          data-testid={ nameTest }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  nameTest: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  nameLabel: PropTypes.string.isRequired,
};

export default InputSelect;
