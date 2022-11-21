import { auth,
        signInWithGooglePopup,
        createUserDocumentFromAuth,
        signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

        import { useEffect } from "react";
        import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
    // useEffect(() => {
    //     const unsubsribe = async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     return () => unsubsribe();
    // }, []);
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
    )
};




export default SignIn