import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import App from "./app"
import About from "./about"
import Game from "./game"

function Main () {
    return(
    <div>
        <BrowserRouter>
            <div className="navbar">
            <Link to = "/" className="header-style"><img src="dist/logo.png"/> </Link>
            <Link to = "/about" className="menu-style">About-Game</Link>
            <Link to = "/game" className="menu-style">Lets-play!</Link>
            </div>
            <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/game"><Game /></Route>
            <Route path="/"><App /></Route> 
            </Switch>
        </BrowserRouter>
    </div>
    )
};

ReactDom.render(<Main />,document.getElementById("app"))

