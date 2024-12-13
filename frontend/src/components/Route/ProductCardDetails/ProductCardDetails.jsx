import React, { useState } from "react";
import styles from "../../../styles/styles";
// import { AiFillStar } from "react-icons/ai";

const ProductCardDetails = ({ setOpen, data }) => {
  const [currentImage, setCurrentImage] = useState(data.image_Url[0].url[0]);
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(1);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  setUserDetails({ name: "Paul" });

  const handleUserDetails = (key, val) =>
    setUserDetails({ ...userDetails, [key]: val });

  console.log(userDetails);

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  // const handleMessageSubmit = () => {
  //   console.log("Hello World!");
  // };

  const handleThumbnailClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="bg-[#fff]">
      {data && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-[40] flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[77vh] bg-white rounded-md shadow-sm relative p-4">
            <button
              className="close absolute right-3 top-3 z-30 cursor-pointer"
              onClick={() => setOpen(false)}
            ></button>
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <div className="max-w-[400px] w-full shadow-md h-[400px]">
                  <img
                    src={require(`../../../static/images/${currentImage}`)}
                    alt="Main product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mt-4 overflow-x-auto gap-3">
                  {data.image_Url[0].url.length > 1 &&
                    data.image_Url[0].url.map((imageUrl, index) => (
                      <div
                        key={index}
                        className="max-w-[90px]  shadow-md w-full h-[90px] cursor-pointer"
                      >
                        <img
                          src={require(`../../../static/images/${imageUrl}`)}
                          alt={`Thumbnail ${index}`}
                          onClick={() => handleThumbnailClick(imageUrl)}
                          className={`w-full h-full object-cover ${
                            currentImage === imageUrl
                              ? "border-[0.25px] border-[#2096f3]"
                              : ""
                          }`}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[20px] pr-[20px]">
                <h2>{data.name}</h2>
                <p className="desc mt-[16px] text-[14px]">{data.description}</p>
                <div className="flex mt-[10px] items-center">
                  {data.discount_price === 0 ? (
                    <p className="big_price">R{data.price * count}</p>
                  ) : (
                    <>
                      <p className="big_price !text-[20px]">
                        R{data.discount_price}
                      </p>
                      <p className="small_price text-[#d55a44]">
                        <s>R{data.price * count}</s>
                      </p>
                    </>
                  )}
                </div>
                <div className="flex items-center mt-5 justify-between pr-3">
                  <div>
                    <button
                      className="bg-[#2096f3] text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-[#2096f3] text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <img
                        src={`${require("../../../Assets/images/icons/fav-filled.png")}`}
                        onClick={() => setClick(!click)}
                        title="Remove from wishlist"
                        alt="Remove from wishlist"
                        className="_img cursor-pointer w-[30px]"
                      />
                    ) : (
                      <img
                        src={`${require("../../../Assets/images/icons/favourites-dark.png")}`}
                        onClick={() => setClick(!click)}
                        title="Add to wishlist"
                        alt="Add to wishlist button"
                        className="_img cursor-pointer w-[30px]"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 bg-[#2096f3] rounded h-11 flex items-center`}
                >
                  <button className="text-white flex items-center">
                    Add to cart
                    <img
                      src={`${require("../../../Assets/images/icons/cart-light.png")}`}
                      className="cursor-pointer w-[24px] ml-2"
                      title="Add item to cart"
                      alt="add to cart button"
                    />
                  </button>
                </div>
                {/* <div>
                  <div className="flex mt-4 justify-start items-center">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2 object-cover"
                    />
                    <div className="flex-col items-center justify-around">
                      <h6 className={styles.shop_name}>{data.shop.name}</h6>
                      <h5 className="pb-3 text-[15px] flex items-center">
                        ({data.shop.ratings})
                        <AiFillStar
                          className="mr-2 cursor-pointer"
                          color="#F6BA00"
                          size={20}
                        />
                      </h5>
                    </div>
                  </div>
                  <div
                    className={`${styles.button} bg-[#2096f3] mt-4 rounded-[4px] h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center justify-center">
                      Message
                      <img
                        src={require("../../../Assets/images/icons/message.png")}
                        width={25}
                        height={25}
                        className="ml-3"
                        alt="Send Message"
                      />
                    </span>
                  </div>
                  <h5 className="text-[16px] text-red-500 mt-5">
                    ({data.total_sell}) Items Sold
                  </h5>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardDetails;
