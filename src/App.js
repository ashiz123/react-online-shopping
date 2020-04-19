import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';



const TopicDetail = (props) =>(
  <div>
    <h1>{props.match.params.topicId} </h1>
    <Link to={`${props.match.url}/13`} />
    <button onClick={() => props.history.goBack()}>Hats</button>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
     <Route exact path="/" component = {HomePage} />
     <Route  path="/shop" component = {ShopPage} />
     <Route  path="/topics/:topicId" component = {TopicDetail} />
     <Route  path="/blog/topics/:topicId" component = {TopicDetail} />
     </Switch>
    </div>
  );
}

export default App;
