import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    const style = cardTrunfo ? 'cardStyle trunfo' : 'cardStyle';
    return (
      <div className={ style }>
        <p className="text" data-testid="name-card">{ cardName }</p>
        <img
          className="imagem"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p className="text" data-testid="description-card">{ cardDescription }</p>
        <div className="infor">
          <p className="text">Ata.</p>
          <p className="text">Vel.</p>
          <p className="text">Res.</p>
        </div>
        <div className="ataque">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <p className="text" data-testid="rare-card">{ cardRare }</p>
        {
          cardTrunfo && <p className="text" data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>
    );
  }
}

Card.propTypes = {
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
};

export default Card;
