import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign in-and-sign-up-page/sign in-and-sign-up-page.component';
import  {auth, createUserProfileDocument} from './firebase/firebase.utils';


// this section is not used. only to learn
// const TopicDetail = (props) =>(
//   <div>
//     <h1>{props.match.params.topicId} </h1>
//     <Link to={`${props.match.url}/13`} />
//     <button onClick={() => props.history.goBack()}>Hats</button>
//   </div>
// )

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {

   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
     
      //if user is not signing out or user not is null 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        })
       
      }
      this.setState({currentUser: userAuth});
    });

    
  }

  
componentWillUnmount()
{
   this.unsubscribeFromAuth();
}



  


  render() { 
    return ( 
      <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
     <Route exact path="/" component = {HomePage} />
     <Route  path="/shop" component = {ShopPage} />
     <Route  path="/signin" component = {SignInAndSignOutPage} />
    
     </Switch>
    </div>
     );
  }
}
 
export default App;


