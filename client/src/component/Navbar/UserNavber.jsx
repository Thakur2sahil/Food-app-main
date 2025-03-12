import * as React from "react";
import img from "../../lib/images/ubereats.png";
import profile from "../../lib/images/Profile.png";
import * as ReactRouter from "react-router-dom";
import * as Icon from "react-icons/fa";
import { contextapi } from "../../lib/context/AuthContext";

export default function UserNavber() {
  const { data } = React.useContext(contextapi);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isLogged = localStorage.getItem("islogged");
  const navigate = ReactRouter.useNavigate();
  if (isLogged)
  {
    console.log(data);
  }



  return (
    <>
      {isLogged ? (
        <div className="max-w-full mx-auto flex items-center justify-between w-screen">
          <div className="w-full bg-black">
            <nav className="px-2 py-2 text-white flex items-center justify-between">
              {/* Logo and Hamburger Menu */}
              <div className="flex items-center">
                <img src={img} alt="Logo" className="bg-black w-20 h-20" />
                <button className="md:hidden ml-4" onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <Icon.FaTimes className="text-white" />
                  ) : (
                    <Icon.FaBars className="text-white" />
                  )}
                </button>
                {/* Desktop Menu */}
                <div className={`hidden md:flex ml-14 w-8/12`}>
                  <ul className="flex items-center justify-evenly space-x-6 text-white">
                    <li className="hover:underline cursor-pointer">
                      <ReactRouter.Link to={"/user/userhome"}>
                        Home
                      </ReactRouter.Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                      <ReactRouter.Link to={"/user/about"}>
                        About
                      </ReactRouter.Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                      <ReactRouter.Link to={"/user/contact"}>
                        Contact
                      </ReactRouter.Link>
                    </li>
                    <li>
                      <input
                        type="search"
                        className="outline-none text-black px-2 py-1 rounded"
                        placeholder="Search dishes..."
                      />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side: User Profile and Cart */}
              <div className="flex items-center space-x-4">
                <span className="hover:underline cursor-pointer">
                  <ReactRouter.Link to={"/user/userupdateprofile"}>
                    User Profile
                  </ReactRouter.Link>
                </span>

                {/* Profile Image */}
                {data.image ? (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${data.image}`}
                    alt={data.username}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                )}

                {/* Shopping Cart */}
                <ReactRouter.Link
                  to={`/user/cart/${data.id}`}
                  className="relative"
                >
                  <Icon.FaShoppingCart className="text-white text-2xl" />
                  {/* Uncomment if you have a cart count */}
                  {/* {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )} */}
                </ReactRouter.Link>

                {/* Logout Button */}
                <button
                  className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/navbar");
                  }}
                >
                  Logout
                </button>
              </div>
            </nav>

            {/* Mobile Menu (when hamburger is toggled) */}
            {isMenuOpen && (
              <div className="md:hidden bg-black">
                <ul className="flex flex-col items-center space-y-4 py-4">
                  <li className="hover:underline cursor-pointer">
                    <ReactRouter.Link to="/user/userhome">
                      Home
                    </ReactRouter.Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <ReactRouter.Link to="/user/about">About</ReactRouter.Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <ReactRouter.Link to="/user/contact">
                      Contact
                    </ReactRouter.Link>
                  </li>
                  <li>
                    <input
                      type="search"
                      className="outline-none text-black px-2 py-1 rounded"
                      placeholder="Search dishes..."
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-full mx-auto flex items-center justify-between w-screen">
          <div className="w-full bg-black">
            <nav className="px-2 py-2 text-white flex items-center justify-between">
              {/* Logo and Hamburger Menu */}
              <div className="flex items-center">
                <img src={img} alt="Logo" className="bg-black w-20 h-20" />
                <button className="md:hidden ml-4" onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <Icon.FaTimes className="text-white" />
                  ) : (
                    <Icon.FaBars className="text-white" />
                  )}
                </button>
                {/* Desktop Menu */}
                <div className={`hidden md:flex ml-14 w-8/12`}>
                  <ul className="flex items-center justify-evenly space-x-6 text-white">
                    <li className="hover:underline cursor-pointer">
                      <ReactRouter.Link to={"/user/userhome"}>
                        Home
                      </ReactRouter.Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                      <ReactRouter.Link to={"/user/about"}>
                        About
                      </ReactRouter.Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                      <ReactRouter.Link to={"/user/contact"}>
                        Contact
                      </ReactRouter.Link>
                    </li>
                    <li>
                      <input
                        type="search"
                        className="outline-none text-black px-2 py-1 rounded"
                        placeholder="Search dishes..."
                      />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side: User Profile and Cart */}
              <div className="flex items-center space-x-4">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <button
                  className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </nav>

            {/* Mobile Menu (when hamburger is toggled) */}
            {isMenuOpen && (
              <div className="md:hidden bg-black">
                <ul className="flex flex-col items-center space-y-4 py-4">
                  <li className="hover:underline cursor-pointer">
                    <ReactRouter.Link to="/user/userhome">
                      Home
                    </ReactRouter.Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <ReactRouter.Link to="/user/about">About</ReactRouter.Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <ReactRouter.Link to="/user/contact">
                      Contact
                    </ReactRouter.Link>
                  </li>
                  <li>
                    <input
                      type="search"
                      className="outline-none text-black px-2 py-1 rounded"
                      placeholder="Search dishes..."
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
