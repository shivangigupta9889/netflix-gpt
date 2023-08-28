import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login =()=>{
    const [isSignIn,setIsSignIn]=useState(true)




    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn)
    }
    return(
        <div>
           <Header/>
           <div className="absolute">
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background-pic"/>
           </div>
           <div>
           <form className="w-4/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg text-gray-300 ">
            <h1 className="font-bold text-3xl ">{isSignIn?"Sign In":"Sign Up"}</h1>
            <input type="text" placeholder="Email or Mobile Number" className="p-2 my-2 w-full bg-gray-700"/>
            {!isSignIn &&(
            <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>)}
            <input type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700"/>
            <button className="p-4  my-4 w-full bg-red-600 rounded-lg">{isSignIn?"Sign In":"Sign Up"}</button>
            <div className="flex justify-between">
                <h1 className="text-xs">Remember me</h1>
                <Link to="/loginhelp" className="text-xs">Need help?</Link>
            </div>
            <p className="text-sm  mt-14 cursor-pointer" onClick={toggleSignInForm}>{isSignIn?"New to NetFlix? Sign up Now":"Already register? SignIn Now?.."}</p>
            <p className="text-xs mt-4"> This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
           </form>
           </div>
        </div>
        
    )
}
export default Login;