import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
// import userEvent from "@testing-library/user-event";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch= useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe();
  }, 
  []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-screen from-black flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user &&
      <div className="flex p-2 ">
      <img
        className="w-14 rounded-full h-14"
        alt="usericon"
        src={user?.photoURL}
      />
      <button onClick={handleSignOut} className="font-bold text-white">
        (Sign Out)
      </button>
    </div>
      }
    </div>
  );
};
export default Header;