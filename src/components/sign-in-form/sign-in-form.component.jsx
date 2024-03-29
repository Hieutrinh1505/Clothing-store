import { useState, useContext } from 'react';
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch(error.code){
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          <Button 
          type="button"
          onClick={signInWithGoogle} 
          buttonType={BUTTON_TYPES_CLASSES.google}
          >Google sign in
          </Button>
        </div>
       
      </form>
    </div>
  );
};

export default SignInForm;
