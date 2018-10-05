import React, { Component } from "react";

class Card extends Component {
    render() {
        const { card } = this.props;
        return (
            <div className="card" onClick={this.props.onClick}>
                <div className="card-inner">
                    <div 
                        style={{background: `url(${card.image.front}) no-repeat`, backgroundSize: "cover"}} 
                        alt={card.player.firstName} 
                        className="card-front" 
                    />
                    <div 
                        style={{background: `url(${card.image.back}) no-repeat`, backgroundSize: "cover"}} 
                        alt={card.player.lastName} 
                        className="card-back" 
                    />
                </div>
            </div>
        );
    }
}

export default Card;
