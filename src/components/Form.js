import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import Button from './Button';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="formStyle">
        <Input
          nameLabel="Nome na Carta"
          value={ cardName }
          onChange={ onInputChange }
          name="cardName"
          type="text"
          nameTest="name-input"
        />
        <Input
          nameLabel="Descrição"
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
          type="textarea"
          nameTest="description-input"
        />
        <Input
          nameLabel="Ataque/Power"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="cardAttr1"
          type="number"
          nameTest="attr1-input"
        />
        <Input
          nameLabel="Velocidade"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="cardAttr2"
          type="number"
          nameTest="attr2-input"
        />
        <Input
          nameLabel="Resistencia"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="cardAttr3"
          type="number"
          nameTest="attr3-input"
        />
        <Input
          nameLabel="Link da Imagem"
          value={ cardImage }
          onChange={ onInputChange }
          name="cardImage"
          type="text"
          nameTest="image-input"
        />
        <InputSelect
          nameLabel="Raridade"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
          nameTest="rare-input"
        />
        {
          !hasTrunfo ? <InputCheckbox
            nameLabel="Carta Super Trunfo?"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            type="checkbox"
            nameTest="trunfo-input"
          /> : <p>Você já tem um Super Trunfo em seu baralho</p>
        }
        <Button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          nameTest="save-button"
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
