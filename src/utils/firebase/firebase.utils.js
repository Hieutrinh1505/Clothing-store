import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDfcWTgg4so6iTXcCoLEGQM8kvIaLAKnfc",
    authDomain: "clothing-store-db-afc3c.firebaseapp.com",
    projectId: "clothing-store-db-afc3c",
    storageBucket: "clothing-store-db-afc3c.appspot.com",
    messagingSenderId: "892102412997",
    appId: "1:892102412997:web:fb9935ab97cbe5b70a7eac"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    promp: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup =  () =>  signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = await doc(db,'users',userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()) {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error){
            console.log('error creating the user',error.message);
        }
    }
    

    
  } 