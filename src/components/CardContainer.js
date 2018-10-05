import React, { Component } from "react";
import Card from "./Card";
import Stats from "./Stats";

class CardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showStats: false
        }
    }
    renderStats() {
        const { card, positionPlayers } = this.props;

        if (this.state.showStats) {
            return <Stats onClick={() => this.setState({ showStats: !this.state.showStats })} card={card} positionPlayers={positionPlayers} />
        }
    }
    render() {
        const { card } = this.props;
        return (
            <div className="card-container">
               <Card card={card} onClick={() => this.setState({ showStats: !this.state.showStats })}/> 
               {this.renderStats()}
            </div>
        );
    }
}

export default CardContainer;
