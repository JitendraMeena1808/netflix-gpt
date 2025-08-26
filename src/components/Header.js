import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";  // firebase.js se auth import
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";  // fallback icon

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        navigate("/"); // redirect to login
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  return (
    <div className="w-screen absolute top-0 left-0 flex justify-between items-center px-12 py-6 z-20">
      {/* Netflix Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
        className="w-32 cursor-pointer"
      />

      {/* Right side: User Icon + Logout */}
      {user &&(<div className="flex items-center gap-6">
        {/* User Photo / Default Icon */}
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="user"
            className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-gray-300 hover:border-red-500 transition"
          />
        ) : (
          <FaUserCircle className="text-4xl text-gray-300 cursor-pointer hover:text-red-500 transition" />
        )}

        {/* Logout Button */}
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition"
        >
          Logout
        </button>
      </div>)
      }
    </div>
  );
};

export default Header;

