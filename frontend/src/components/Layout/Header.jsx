import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/ui/logo-blue.png";
import { productData, categoriesData } from "../../static/data";
import SearchIconDark from "../../Assets/images/icons/search-dark.png";
import SearchIconLight from "../../Assets/images/icons/search-light.png";
import UserIconDark from "../../Assets/images/icons/user-icon-dark.png";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist";
import { BiMenuAltLeft } from "react-icons/bi";

/**
 * Header component for the website.
 *
 * @param {number} activeHeading - Index of the active navigation item.
 * @returns {JSX.Element} - The rendered header component.
 */
const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = React.useState(""); // State for search term
  const [searchData, setSearchData] = React.useState(null); // State for search data
  const [showSearchBox, setShowSearchBox] = React.useState(false); // State for showing search box
  const [openCart, setOpenCart] = React.useState(false); // State for toggling the shopping cart
  const [openWishlist, setOpenWishlist] = React.useState(false); // State for toggling the wishlist
  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false); // State for toggling mobile nav
  /**
   * Handles changes in the search input.
   * Filters product data based on the entered search term.
   *
   * @param {Object} event - The input change event.
   */
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Fuzzy search using regular expressions and wildcards
    const regex = new RegExp(term.split("").join(".*"), "i");
    const filteredProducts = productData.filter((product) =>
      regex.test(product.name),
    );

    setSearchData(filteredProducts);
  };

  /**
   * Toggles the visibility of the search box.
   */
  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setDropDown(false);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  /*const iconData = [
    {
      value: "../../../Assets/images/icons/favourites-dark.png"
    },
    {
      value:  "../../../Assets/images/icons/cart-dark.png"
    },
    // {
    //   value:  <img
    //   src={`${backend_url}${user.avatar.url}`}
    //   style={{ width: "35px", height: "35px" }}
    //   alt="login"
    //   title={user.name}
    //   className="rounded-full shadow-lg"
    // />
    // }
  ]*/
  return (
    <>
      <header
        className={`w-full m-0 border-[0.5px] bg-[white] border-[#f8f8f6] sticky top-0 z-[10000]`}
      >
        <div className="hidden 800px:h-[70px] 800px:mt-0 800px:flex ml-10 items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" width={40} height={40} />
            </Link>
          </div>

          <div
            className={`middle-section w-11/12 mx-10 relative ${styles.noramlFlex} h-full justify-between`}
          >
            {/* Categories */}
            <div className="h-full flex">
              <div
                className="relative h-[90%] mt-[3.2px] bg-[#EEF1E6] px-3 w-[220px] shadow-sm hidden 1000px:flex justify-between items-center cursor-pointer rounded-md"
                onClick={() => setDropDown(!dropDown)}
              >
                <button
                  className={`h-[100%] text-center w-full flex justify-center items-center text-[14px] select-none`}
                >
                  Browse Categories
                </button>
                <img
                  src={require("../../Assets/images/icons/arrow-down.png")}
                  alt="arrow-down"
                  style={{ width: "15px", height: "15px" }}
                />
              </div>
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>

            {/* Nav items */}
            <div className={`${styles.noramlFlex}`}>
              <NavBar active={activeHeading} />
            </div>

            {/* Nav Icons */}
            <div>
              <div className={`${styles.noramlFlex} `}>
                {/* Favourites/ Wishlist */}
                <div
                  className="relative cursor-pointer mr-[20px]"
                  onClick={() => setOpenWishlist(!openWishlist)}
                >
                  <img
                    src={require("../../Assets/images/icons/favourites-dark.png")}
                    style={{ width: "30px", height: "30px" }}
                    alt="favourites"
                  />
                  <span className="absolute flex items-center justify-center right-0 top-0 rounded-full bg-[#2096f3] text-white w-4 h-4 top right p-0 m-0 text-[10px] leading-tight text-center">
                    0
                  </span>
                </div>
                {/* Cart */}
                <div
                  className="relative cursor-pointer mr-[20px]"
                  onClick={() => setOpenCart(!openCart)}
                >
                  <img
                    src={require("../../Assets/images/icons/cart-dark.png")}
                    style={{ width: "30px", height: "30px" }}
                    alt="cart"
                  />
                  <span className="absolute flex items-center justify-center right-0 top-0 rounded-full bg-[#2096f3] text-white w-4 h-4 top right p-0 m-0 text-[10px] leading-tight text-center">
                    0
                  </span>
                </div>
                {/* User */}
                <div className="relative cursor-pointer mr-[20px]">
                  {isAuthenticated ? (
                    <Link to={"/profile"}>
                      <img
                        src={`${backend_url}${user.avatar.url}`}
                        style={{ width: "35px", height: "35px" }}
                        alt="login"
                        title={user.name}
                        className="rounded-full shadow-lg"
                      />
                    </Link>
                  ) : (
                    <Link to={"/login"}>
                      <img
                        src={UserIconDark}
                        style={{ width: "30px", height: "30px" }}
                        alt="login"
                        title="Login to your account"
                      />
                    </Link>
                  )}
                </div>

                {/* Sell */}
                {/* <Link
                to={"/seller"}
                className="relative cursor-pointer mr-[20px] shadow-lg flex justify-center items-center gap-[14px] bg-black p-[10px] rounded-sm"
              >
                <p className="text-white">Sell</p>
                <img
                  src={require("../../Assets/images/icons/store-light.png")}
                  style={{ width: "30px", height: "30px" }}
                  alt="become a seller"
                />
              </Link> */}
                {/* Shopping Cart Slider */}
                {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

                {/* Wishlist Slider */}
                {openWishlist ? (
                  <Wishlist setOpenWishlist={setOpenWishlist} />
                ) : null}
              </div>
            </div>
          </div>

          {/* Search box */}
          <div className="w-[0vw] h-full relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              id="searchbox"
              onChange={handleSearchChange}
              className={`h-full px-2 absolute text-[14px] right-[-20px] text-center font-light transition-all  ${
                showSearchBox ? "w-[100vw]" : "w-0"
              }`}
            />
          </div>

          {/* Search results */}
          {searchData && searchTerm !== "" && showSearchBox ? (
            <div className="absolute min-h-[10vh] w-[100vw] left-[0px] top-[70px] bg-[#fff] shadow-sm-2 z-[9] p-4">
              {searchData.length > 0 ? (
                searchData.map((product, index) => (
                  <Link
                    to={`/products/${product.name.replace(/\s+/g, "-")}/${
                      product.id
                    }`}
                    key={index}
                  >
                    <div className="w-full flex items-start py-3 border-t-[.5px] border-[#eee]">
                      <img
                        src={require(
                          `../../static/images/${product.image_Url[0].url[0]}`,
                        )}
                        alt={product.name}
                        className="w-[40px] h-[40px] mr-[10px]"
                      />
                      <h1 className="text-[14px]">{product.name}</h1>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center text-[14px] text-[900]">
                  No Results Found
                </p>
              )}
            </div>
          ) : null}

          {/* Search button */}
          <button
            className={`w-[150px] relative bg-white m-0 p-0 h-full flex items-center justify-center ${
              showSearchBox ? null : "border-l-[0.5px]"
            }`}
            id="show-search-box"
            onClick={toggleSearchBox}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? SearchIconLight : SearchIconDark}
              alt="search"
              width={30}
              height={30}
            />
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="w-full h-[60px] fixed bg-[#fff] z-[50] top-0 left-0 shadow-sm 800px:hidden px-5">
        <div className="w-full flex items-center justify-between h-full">
          <div>
            <BiMenuAltLeft
              size={40}
              className=""
              onClick={() => setOpen(!open)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src={require("../../Assets/images/ui/logo-blue.png")}
                alt="Home"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="relative">
            <img
              src={require("../../Assets/images/icons/cart-dark.png")}
              width={30}
              height={30}
              alt=""
            />
            <span className="absolute flex items-center justify-center right-0 top-0 rounded-full bg-[#2096f3] text-white w-4 h-4 top right p-0 m-0 text-[10px] leading-tight text-center">
              0
            </span>
          </div>
        </div>
        {/* Side Bar */}
        {open && (
          <>
            <div
              className={"fixed w-full bg-[#0000005F] h-full z-20 top-0 left-0"}
            >
              <div className="fixed w-[60%] bg-white h-screen top-0 left-0">
                <div className="w-full justify-between flex pr-3">
                  <div>
                    <div className="relative mr-[15px]">
                      <img
                        src={require("../../Assets/images/icons/favourites-dark.png")}
                        className="mt-5 ml-3"
                        width={35}
                        height={35}
                        alt="Favourites"
                      />
                      <span className="absolute flex items-center justify-center right-0 top-0 rounded-full bg-[#2096f3] text-white w-4 h-4 top right p-0 m-0 text-[10px] leading-tight text-center">
                        0
                      </span>
                    </div>
                  </div>
                  <button
                    className="close mr-4 mt-5 right-0"
                    onClick={() => setOpen(false)}
                  ></button>
                </div>

                <div className="my-8 w-[92%] m-auto h-[40px]">
                  <input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    type="search"
                    placeholder="Search for products..."
                    className="w-full h-full border-[1px] border-[#ddd] px-3 text-[14px] focus:border-[#2096f3] rounded"
                  />
                  {searchData && searchTerm !== "" ? (
                    <>
                      <div className="absolute min-h-[10vh] h-full w-[full] left-[0px] top-[70px] overflow-y-scroll mt-16 bg-[#fff] shadow-sm-2 z-[9] p-4">
                        {searchData.length > 0 ? (
                          searchData.map((product, index) => (
                            <Link
                              to={`/products/${product.name.replace(
                                /\s+/g,
                                "-",
                              )}/${product.id}`}
                              key={index}
                            >
                              <div className="w-full flex items-start py-3 border-t-[.5px] border-[#eee]">
                                <img
                                  src={require(
                                    `../../static/images/${product.image_Url[0].url[0]}`,
                                  )}
                                  alt={product.name}
                                  className="w-[40px] h-[40px] mr-[10px]"
                                />
                                <h1 className="text-[14px]">{product.name}</h1>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <p className="text-center text-[14px] text-[900]">
                            No Results Found
                          </p>
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
                <NavBar active={activeHeading} />
                <div className="px-6 text-[14px] w-full absolute bottom-0 pb-10 text-center">
                  {isAuthenticated ? (
                    <>
                      <p className="">
                        Logged in as{" "}
                        <Link to={"/profile"} className="text-[#2096f3]">
                          {user.name}
                        </Link>
                      </p>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <button className="bg-[#000] p-3 text-[#fff] w-[150px] text-[14px] rounded">
                          Login
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

// I'm cooked - I can feel it.
// But focus - keep working o your goals and forget everything else.
// Remeber the reason you started?

export default Header;
