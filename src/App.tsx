import React, { useEffect } from "react";
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Discover from "./components/discover/Discover";
import Matches from "./components/matches/Matches";
import Settings from "./components/settings/Settings";
// import firebase from "./components/firebase/fbConfig";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Discover} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/matches" component={Matches} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
