import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import App from "./app"
import About from "./about"

function Main () {
    return(
    <div>
        <BrowserRouter>
            <Link to = "/">Tic-Tac-toe</Link>
            <Link to = "/about">About Game</Link>
            <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/"><App /></Route> 
            </Switch>
        </BrowserRouter>
    </div>
    )
};

ReactDom.render(<Main />,document.getElementById("app"))

