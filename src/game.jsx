import React from "react"

class Game extends React.Component {
    constructor () {
        super()
        this.state = { 
            player_num: 1,
            player_select: [null,null,null,null,null,null,null,null,null]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (num)  {
        let arry = this.state.player_select;
        if (this.state.player_select[num]===null){
        
        if(this.state.player_num === 1) {
            arry[num] = "X"; 
            this.setState({player_num: 2,player_select: arry})
        }
        else {
            arry[num] = "O";
            this.setState({player_num: 1,player_select: arry})
    }   
        }
    }
    render(){
        return( 
        <div >
            <h3> Now player {this.state.player_num}'s' Turn</h3>
            <button className="box" onClick={() => this.handleClick(0)}>{this.state.player_select[0]}</button>
            <button className="box" onClick={() => this.handleClick(1)}>{this.state.player_select[1]}</button>
            <button className="box" onClick={() => this.handleClick(2)}>{this.state.player_select[2]}</button>
            <br/>
            <button className="box" onClick={() => this.handleClick(3)}>{this.state.player_select[3]}</button>
            <button className="box" onClick={() => this.handleClick(4)}>{this.state.player_select[4]}</button>
            <button className="box" onClick={() => this.handleClick(5)}>{this.state.player_select[5]}</button>
            <br/>
            <button className="box" onClick={() => this.handleClick(6)}>{this.state.player_select[6]}</button>
            <button className="box" onClick={() => this.handleClick(7)}>{this.state.player_select[7]}</button>
            <button className="box" onClick={() => this.handleClick(8)}>{this.state.player_select[8]}</button>
        </div>
        )
    }
}
export default Game