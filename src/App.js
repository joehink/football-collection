import React, { Component } from 'react';
import CardContainer from "./components/CardContainer";
import cardsJSON from "./cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cards: cardsJSON,
        sort: "alphaByLastName"
    };
  }
  sortCards() {
    const { cards, sort } = this.state;
    if (sort === "alphaByLastName") {
      return cards.sort((a, b) => {
        if(a.player.lastName < b.player.lastName) return -1;
        if(a.player.lastName > b.player.lastName) return 1;
        return 0;
      })
    } else if (sort === "alphaByFirstName") {
      return cards.sort((a, b) => {
        if(a.player.firstName < b.player.firstName) return -1;
        if(a.player.firstName > b.player.firstName) return 1;
        return 0;
      })
    } else if (sort === "cardYearOldest") {
      return cards.sort((a, b) => a.info.year - b.info.year)
    } else if (sort === "cardYearNewest") {
      return cards.sort((a, b) => b.info.year - a.info.year)
    } else if (sort === "playerAgeOldest") {
      return cards.sort((a, b) => b.player.age - a.player.age)
    } else if (sort === "playerAgeYoungest") {
      return cards.sort((a, b) => a.player.age - b.player.age)
    }
  }
  renderCards() {
    const sortedCards = this.sortCards();
    return sortedCards.map(card => {
      let positionPlayers = sortedCards.filter(postionCard => {
        return card.player.position === postionCard.player.position
      });
      return (
        <CardContainer 
          key={`${card.info.number}${card.info.year}`} 
          card={card} 
          positionPlayers={positionPlayers}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <header>
            <h1>
                Football<br /> 
                Collection
            </h1>
            <div className="selectdiv card-sort">
              <label>
                <select onChange={e => this.setState({ sort: e.target.value })}>
                  <option value="alphaByLastName">Alphabetically (Last Name)</option>
                  <option value="alphaByFirstName">Alphabetically (First Name)</option>
                  <option value="cardYearOldest">Card Year (Oldest - Newest)</option>
                  <option value="cardYearNewest">Card Year (Newest - Oldest)</option>
                  <option value="playerAgeOldest">Player Age (Oldest - Youngest)</option>
                  <option value="playerAgeYoungest">Player Age (Youngest - Oldest)</option>
                </select>
              </label>
            </div>
          </header>
          
          <div className="flex-grid">
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
