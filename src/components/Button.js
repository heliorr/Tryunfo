import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { nameTest, disabled, onClick } = this.props;
    return (
      <button
        disabled={ disabled }
        onClick={ onClick }
        type="submit"
        data-testid={ nameTest }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  nameTest: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
