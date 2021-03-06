import React from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom.button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }


    handleSubmit = async e => {
       
        e.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState ({
                email : '', 
                password: ''
            });
            
        }

        catch(error)
        {
            console.log(error);
        }
        
       

    }

    handleChange= event=> {
        const {name, value} = event.target;
         this.setState({
            [name] : value
        })
        

    }


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit} >
                     
                     
                     <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" />
                     
                     <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="password" />
                     {/* //children means text between the tag. */}

                     <div className="buttons">
                     <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton type="button" onClick = {signInWithGoogle} isGoogleSignIn>
                        
                         Sign in with Google
                         </CustomButton>
                     </div>
                    
                    {/* <input type="submit" value="Submit Form"/> */}
                </form>
            </div>
        )
    }

}

export default SignIn;