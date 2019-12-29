import React from "react"

class Game extends React.Component {
    constructor () {
        super()
        this.state = { 
            player_num: 1,
            count: 0,
            player_select: [null,null,null,null,null,null,null,null,null]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleReset (){
        this.setState({ 
            player_num: 1,
            count: 0,
            player_select: [null,null,null,null,null,null,null,null,null]
        })
    }

    handleClick (num)  {
        let arry = this.state.player_select;
        if (this.state.player_select[num]===null && (this.checkResult() === 0)){
            if(this.state.player_num === 1) {
                arry[num] = "X"; 
                this.setState(prevState => {return {count: prevState.count+1, player_num: 2,player_select: arry}})
            }
            else {
                arry[num] = "O";
                this.setState(prevState => {return {count: prevState.count+1,player_num: 1,player_select: arry}})
            }   
        }
    }
    checkResult () {
        const combination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]
        for(let i=0;i<combination.length;i++){
            const [a,b,c] = combination[i];
            if (this.state.player_select[a]===this.state.player_select[b] 
                && this.state.player_select[a]===this.state.player_select[c]
                )
            {
                if(this.state.player_select[a] === "X") {
                    return(1)
                }
                else if(this.state.player_select[b] === "O") {
                    return(2)
                }
            }
        }
        return(0)
    }
    render(){
        let finalResult;
        let winPlayer = this.checkResult();
        console.log(winPlayer)
        if(winPlayer !== 0) {
            finalResult = (winPlayer == 1) ? "Player 1 wins" : "Player 2 Wins";
        }
        else if(this.state.count == 9){
            finalResult = "GAME OVER"
        }
        else {
            finalResult = null;
        }
        return( 
         <div>
            {finalResult === null && <h3 > Now player {this.state.player_num}'s' Turn</h3>}
            <div className="row">
            <button className="box" onClick={() => this.handleClick(0)}>{this.state.player_select[0]}</button>
            <button className="box" onClick={() => this.handleClick(1)}>{this.state.player_select[1]}</button>
            <button className="box" onClick={() => this.handleClick(2)}>{this.state.player_select[2]}</button>
            </div>
            <div className="row">
            <button className="box" onClick={() => this.handleClick(3)}>{this.state.player_select[3]}</button>
            <button className="box" onClick={() => this.handleClick(4)}>{this.state.player_select[4]}</button>
            <button className="box" onClick={() => this.handleClick(5)}>{this.state.player_select[5]}</button>
            </div>
            <div className="row">
            <button className="box" onClick={() => this.handleClick(6)}>{this.state.player_select[6]}</button>
            <button className="box" onClick={() => this.handleClick(7)}>{this.state.player_select[7]}</button>
            <button className="box" onClick={() => this.handleClick(8)}>{this.state.player_select[8]}</button>
            </div>
            <h3>{finalResult}</h3>
            <div className="row">
            <button className="button" onClick={this.handleReset}>Play Again!</button>
            </div>
        </div>
        )
    }
}
export default Game