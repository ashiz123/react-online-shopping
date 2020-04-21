import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import  {auth} from '../../firebase/firebase.utils';
import './header.styles.scss'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const mapStateToProps = ({user : {currentUser}, cart:{hidden}})  => ({
    currentUser : currentUser,
    hidden
})


const Header = ({currentUser, hidden}) =>
(
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className='logo'/>
        </Link>

        <div className="options">
        <Link to="/shop" className="option">
            SHOP
        </Link>
        <Link to="/contact" className="option">
            CONTACT
        </Link>
       
        
       {
           currentUser ? (
           <div className="option" onClick = {() => auth.signOut()}>SIGN OUT</div>
           ): (<Link className ="option" to="/signin">SIGN IN</Link>)
       }

        <CartIcon />
       </div>
       {hidden ? null:  <CartDropdown />}
    </div>
      
)

export default  connect(mapStateToProps)(Header);
