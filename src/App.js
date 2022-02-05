import React, {useContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import OpDeFiets from "./pages/opDeFiets/OpDeFiets";
import EenStad from "../src/pages/eenStad/EenStad";
import Aanmelden from "../src/pages/aanmelden/Aanmelden";
import Inloggen from "../src/pages/inloggen/Inloggen";
import Homepage from "../src/pages/homepage/Homepage";
import Contact from "../src/pages/contact/Contact";
import "./App.css";

function App() {
    const {authState: {isAuth}} = useContext(AuthContext);

    return (
        <>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Homepage/>
                    </Route>

                    <Route path="/opdefiets">
                        {isAuth ? <OpDeFiets/> : <Redirect to='/inloggen'/>}
                    </Route>

                    <Route path="/eenstad">
                        {isAuth ? <EenStad/> : <Redirect to='/inloggen'/>}
                    </Route>

                    <Route path="/contact">
                        <Contact/>
                    </Route>

                    <Route path="/inloggen">
                        <Inloggen/>
                    </Route>

                    <Route path="/aanmelden">
                        <Aanmelden/>
                    </Route>

                </Switch>
            </Router>
        </>
    );
}

export default App;
