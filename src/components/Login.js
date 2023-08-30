import { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { IsValidate } from "../utils/validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, PHOTO_URL} from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickBotton = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = IsValidate(email.current.value, password.current.value);

    setErrorMessage(message);
    if (message) return;


    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              PHOTO_URL,
          })
            .then(() => {
              const {uid,email,displayName,photoURL}= auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background-pic"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-4/12 p-12 absolute bg-black my-28 mx-auto right-0 left-0 bg-opacity-80 rounded-lg text-gray-300 "
        >
          <h1 className="font-bold text-3xl ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile Number"
            className="p-2 my-2 w-full bg-gray-700"
          />
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-700"
            />
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="p-4  my-4 w-full bg-red-600 rounded-lg"
            onClick={handleClickBotton}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between">
            <h1 className="text-xs">Remember me</h1>
            <Link to="/loginhelp" className="text-xs">
              Need help?
            </Link>
          </div>
          <p
            className="text-sm  mt-12 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New to NetFlix? Sign up Now"
              : "Already register? SignIn Now?.."}
          </p>
          <p className="text-xs mt-4">
            {" "}
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
