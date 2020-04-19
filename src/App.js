import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';


const HatsPage = () =>(
  <div>
    <h1>testing </h1>
  </div>
)

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
      <Switch>
     <Route exact path="/" component = {HomePage} />
     <Route  path="/hats" component = {HatsPage} />
     <Route  path="/topics/:topicId" component = {TopicDetail} />
     <Route  path="/blog/topics/:topicId" component = {TopicDetail} />
     </Switch>
    </div>
  );
}

export default App;
