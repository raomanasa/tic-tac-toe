import React from "react"

class Game extends React.Component {
    constructor () {
        super()
        this.state = { 
            player_num: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick ()  {
        if(this.state.player_num === 1) {
            this.setState({player_num: 2})
        }
        else {
            this.setState({player_num: 1})
        }     
    }
    render(){
        return(
        <div >
            <h3> Now player {this.state.player_num}'s' Turn</h3>
            <button className="box" onClick={this.handleClick}></button>
            <button className="box" onClick={this.handleClick}></button>
            <button className="box" onClick={this.handleClick}></button>
            <br/>
            <button className="box" onClick={this.handleClick}></button>
            <button className="box" onClick={this.handleClick}></button>
            <button className="box" onClick={this.handleClick}></button>
            <br/>
            <button className="box" onClick={this.handleClick}></button>
            <button className="box" onClick={this.handleClick}></button>
            <button className="box" onClick={this.handleClick}></button>
        </div>
        )
    }
}
export default Game