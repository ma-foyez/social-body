import React from 'react';
import './App.css';
import SocialContainer from './Components/SocialContainer/SocialContainer';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './Components/NotMatch/NotMatch';
import PostDetails from './Components/PostDetails/PostDetails';
import Registration from './Components/Registration/Registration';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/details/:postID">
            <PostDetails />
          </Route>
          <Route path="/home">
            <SocialContainer />
          </Route>
          <Route path="/home">
            <SocialContainer />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Registration />
          </Route>
          <Route exact path="/">
            <SocialContainer />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
