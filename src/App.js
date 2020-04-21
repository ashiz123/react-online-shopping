import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign in-and-sign-up-page/sign in-and-sign-up-page.component';
import  {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/user.actions';

// this section is not used. only to learn
// const TopicDetail = (props) =>(
//   <div>
//     <h1>{props.match.params.topicId} </h1>
//     <Link to={`${props.match.url}/13`} />
//     <button onClick={() => props.history.goBack()}>Hats</button>
//   </div>
// )

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

//instead using state used {user} . use destructuring.
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount()
  {

    const {setCurrentUser}  = this.props;

   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
     
      //if user is not signing out or user not is null 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        })
       
      }
        setCurrentUser(userAuth);
    });

    
  }

  
componentWillUnmount()
{
   this.unsubscribeFromAuth();
}



  


  render() { 
    return ( 
      <div>
      <Header/>
      <Switch>
     <Route exact path="/" component = {HomePage} />
     <Route  path="/shop" component = {ShopPage} />
     {/* <Route  path="/signin" component = {SignInAndSignOutPage} /> */}
     <Route  path="/signin" render = {() => this.props.currentUser ? (<Redirect to = '/'/>) : (<SignInAndSignUpPage/>)}/>
    
     </Switch>
    </div>
     );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);


