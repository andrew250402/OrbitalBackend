import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import PortfolioDetails from "../PorfolioDetails";
import Login from "../Login/Login";
import { useState } from "react";

function App() {
  const [loginForm, setLoginForm] = useState("login");

  return (
    <BrowserRouter>
      <Route>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/home">
                <Navbar />
                <Home />
              </Route>
              {/* Change this from 1 to the specfic id of the student based off their login details */}
              <Route path="portfolio/1">
                <Navbar />
                <PortfolioDetails />
              </Route>

              <Route>
                <Navbar path="/chats" />
                <Chats />
              </Route>

              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
