import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import  {auth} from '../../firebase/firebase.utils';
import './header.styles.scss'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//importing selector
import {createStructuredSelector} from 'reselect';
import {selectCurrentuser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';




// const mapStateToProps = (state)  => ({
//     currentUser : selectCurrentuser(state),
//     hidden: selectCartHidden(state)
// })


// if there are multiple selector( it automatic pass top level state)
    const mapStateToProps = createStructuredSelector({
        currentUser : selectCurrentuser,
        hidden : selectCartHidden
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
