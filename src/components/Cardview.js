import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Cardview extends React.Component {
  render() {
    const { cards, remove, filterName, filterRare, filterTrunfo } = this.props;
    return (
      <>
        { cards.filter((value) => {
          let contName = false;
          let contRare = false;
          let contSelect = true;
          if (!filterTrunfo && filterRare === 'todas') {
            contRare = true;
            contSelect = false;
          }
          if (!filterTrunfo && (contSelect && value.rare === filterRare)) {
            contRare = true;
          }
          if (!filterTrunfo && (contRare && value.name.includes(filterName))) {
            contName = true;
          }
          if (filterTrunfo && value.trunfo) {
            return true;
          }
          return contName;
        }).map((value) => (
          <div key={ value.name }>
            <Card
              cardName={ value.name }
              cardImage={ value.image }
              cardDescription={ value.description }
              cardAttr1={ value.attr1 }
              cardAttr2={ value.attr2 }
              cardAttr3={ value.attr3 }
              cardRare={ value.rare }
              cardTrunfo={ value.trunfo }
            />
            <button
              className="buttonView"
              id={ value.name }
              type="submit"
              data-testid="delete-button"
              onClick={ remove }
            >
              Excluir
            </button>
          </div>
        )) }
      </>
    );
  }
}

Cardview.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  remove: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Cardview;
