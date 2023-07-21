import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import Login from "../Login/Login";
import UserList from "../UserList";
import OtherPortfolio from "../OtherPortfolios";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route path="/home">
              {user ? (
                <>
                  <Navbar />
                  <Home />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/portfolio/me">
              {user ? (
                <>
                  <Navbar />
                  <MyPortfolio />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/chats">
              {user ? (
                <>
                  <Navbar />
                  <Chats />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route path="/searchResult">
              {user ? (
                <>
                  <Navbar />
                  <UserList />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>

            <Route path="/portfolio/:userId">
              {user ? (
                <>
                  <Navbar />
                  <OtherPortfolio />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
