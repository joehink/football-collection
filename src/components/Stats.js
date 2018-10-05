import React, { Component } from "react";
import { BarChart, Bar, Tooltip, Cell } from "recharts";

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: Object.keys(props.positionPlayers[0].player.stats)[0]
        }
    }
    renderOptions(stats) {
        let options = [];

        for (let category in stats) {
            options = [...options, <option key={category} value={category}>{category}</option>]
        }
        return options;
    }
    createSelectBox(stats) {
        return (
            <div>
                <div className="statselectdiv">
                    <label style={{ display: "flex" }}>
                        <select onChange={e => this.setState({ category: e.target.value })}>
                            {this.renderOptions(stats)}
                        </select>
                    </label>
                </div>
            </div>
        )
    }
    render() {
        const { positionPlayers, card } = this.props;
        return (
            <div className="stats">
                <BarChart 
                    width={250}
                    height={325}
                    data={positionPlayers.sort((a, b) => b.player.stats[this.state.category] - a.player.stats[this.state.category])} 
                    onClick={this.props.onClick}
                >
                    <Tooltip 
                        formatter={(a, b, c) => a} 
                        labelFormatter={(i) => positionPlayers[i].player.fullName} 
                        cursor={{ fill: "transparent" }}
                        labelStyle={{ fill: "red" }}
                    />
                    <Bar 
                        name={this.state.category} 
                        type="monotone" 
                        dataKey={`player.stats.${this.state.category}`} 
                        barSize={30} 
                        fill="#DDD" 
                        animationBegin={500}
                    >
                        {positionPlayers.map((entry, index) => (
                            <Cell 
                                key={`${entry.info.year}${entry.info.number}`}
                                fill={`${entry.info.year}${entry.info.number}` === `${card.info.year}${card.info.number}` ? card.style.color : '#FFF'} 
                                stroke="#FFF"
                            />
                        ))}
                    </Bar>
                </BarChart>
                { this.createSelectBox(positionPlayers[0].player.stats) }
            </div>    
        );
    }
}

export default Stats;
