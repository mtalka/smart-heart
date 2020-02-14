import React from "react";
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Discover from "./components/discover/Discover";
import Matches from "./components/matches/Matches";
import Settings from "./components/settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Discover} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/matches" component={Matches} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
