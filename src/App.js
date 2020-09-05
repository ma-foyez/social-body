import React from 'react';
import logo from './logo.svg';
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
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <SocialContainer></SocialContainer>
          </Route>
          <Route path="/details/:postID">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/home">
            <SocialContainer></SocialContainer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
