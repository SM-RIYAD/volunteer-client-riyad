
import "./Login.css"
import logo from '../../logos/Group 1329.png'
import { height } from '@mui/system';
import React, { Component, useContext ,useState}  from 'react';
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import  'firebase/auth';
import { getAuth, signInWithPopup,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,FacebookAuthProvider,GoogleAuthProvider} from "firebase/auth";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
const app = initializeApp(firebaseConfig);
const Login = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  let { from } = location.state || { from: { pathname: "/" } };
  
  const [loggedInUser,setLoggedInUser]= useContext(UserContext);
  const [user,setUser]=useState({

    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:'',
    success:false

  });
//   const provider = new GoogleAuthProvider();
//   const handleSignIn=()=>{
  
//     console.log('button clicked');
//     const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     const {displayName,email,photoURL}=result.user;
//     const signedInUser={

//       isSignedIn:true,
//       name:displayName,
//       email:email,
//       photo:photoURL
//     }
//     setUser(signedInUser);
//     setLoggedInUser(signedInUser);
//     navigate(from, { replace: true })
    
//    console.log(displayName);
//   })


//   }
const handleGoogleSignI = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;
      const idToken= credential.idToken;
      // console.log("credential: ",id_token);
      // The signed-in user info.
      const { displayName, email } = result.user;
      const signedinuser = { name: displayName, email };
      setLoggedInUser(signedinuser);
      // console.log(token);
      // storeAuthToken();
      // storeAuthToken(idToken);
      navigate(from, { replace: true })
      // history.replace(from);
      // console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};



  return (
    
  <div className="log-main"
 >
  

<div className="login">
      
       
      <div class="main-block">
     <div class="block-item ">
           
           <h3>Login With</h3>
           <button onClick={handleGoogleSignI} class="btn google" data-provider="google"><i class="fab fa-google"></i><span>Continue with Google</span></button>
         <p> <small> Don't have an account?  <a href="www.google.com"> Create an account </a></small> </p>
      
       
       
     </div>
    
   </div>
   </div>
     </div>
   
  );
};

export default Login;