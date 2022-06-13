import React from 'react';
import './app.css';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Cardview from './components/Cardview';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: 'normal',
    cardTrunfo: false,
    filterName: '',
    filterRare: 'todas',
    filterTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    hasTrunfo: false,
  };

  handleChangeButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const convcardAttr1 = parseInt(cardAttr1, 10);
    const convcardAttr2 = parseInt(cardAttr2, 10);
    const convcardAttr3 = parseInt(cardAttr3, 10);
    const max = 90;
    const maxConj = 210;
    if (!cardName) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (!cardDescription) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (!cardImage) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (convcardAttr1 < 0) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (convcardAttr1 > max) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (convcardAttr2 < 0) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (convcardAttr2 > max) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (convcardAttr3 < 0) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (convcardAttr3 > max) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if ((convcardAttr1 + convcardAttr2 + convcardAttr3) > maxConj) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    this.setState({ isSaveButtonDisabled: false });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, cards } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    const obj = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };
    this.setState({
      cards: [...cards, obj],
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.handleChangeButton);
  };

  removeCard = (event) => {
    event.preventDefault();
    const { cards } = this.state;
    const obj = cards.find((value) => value.name === event.target.id);
    this.setState({
      cards: cards.filter((value) => value.name !== event.target.id),
    });
    if (obj.trunfo) {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { cardName, cardImage, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      cards, filterName, filterRare, filterTrunfo } = this.state;
    return (
      <div>
        <Header />
        <section className="cardCreate">
          <Form
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section className="cardView">
          <form>
            <p>Opções de Filtros</p>
            <label htmlFor="filterName">
              Digite um nome
              <input
                name="filterName"
                type="text"
                data-testid="name-filter"
                value={ filterName }
                onChange={ this.handleChange }
                disabled={ filterTrunfo }
              />
            </label>
            <select
              name="filterRare"
              value={ filterRare }
              onChange={ this.handleChange }
              data-testid="rare-filter"
              disabled={ filterTrunfo }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                checked={ filterTrunfo }
                onChange={ this.handleChange }
                name="filterTrunfo"
                type="checkbox"
                data-testid="trunfo-filter"
              />
            </label>
          </form>
          <Cardview
            cards={ cards }
            remove={ this.removeCard }
            filterName={ filterName }
            filterRare={ filterRare }
            filterTrunfo={ filterTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
