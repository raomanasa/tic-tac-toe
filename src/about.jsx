import React from "react"

class About extends React.Component {
    render(){
        return(
            <div>
                <h1>ABOUT GAME</h1>
                <div style={{fontSize : 25}}>
                <p>1. The game is played on a grid that's 3 squares by 3 squares.</p>
                <p>2. You are X, your friend  is O. Players take turns putting their marks in empty squares.</p>
                <p>3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</p>
                <p>4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
                </div>
            </div>
        )

    }
}
export default About