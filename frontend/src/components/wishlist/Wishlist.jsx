import React from "react";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Adidas Samba UK 6",
      price: 1400,
      image: require("../../static/images/samba.jpeg"),
      quantity: 1,
    },
    {
      name: "PS5",
      price: 8000,
      image: require("../../static/images/ps5.jpeg"),
      quantity: 1,
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#00000085]  h-screen z-10">
        <div className="fixed top-0 right-0 min-h-full w-[30%] bg-[#fff] flex flex-col shadow-sm justify-between">
          <div>
            <div className="flex w-ful justify-end pt-5 pr-5">
              <button
                className="close absolute right-3 top-3 z-30 cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              ></button>
            </div>
            {/* Cart Length */}
            <div className={`${styles.noramlFlex} p-4 flex items-center mt-4`}>
              <img
                src={`${require("../../Assets/images/icons/favourites-dark.png")}`}
                width={25}
                height={25}
                alt="Cart"
              />
              <h5 className="pl-5 text-[20px] font-[500]">
                {cartData.length !== 1 ? `${cartData.length} Items` : "1 Item"}
              </h5>
            </div>
            {/* Single Wishlist Item... We'll map through the cart items to display n number of cart items dynamically. */}
            <br />
            <div className="w-full border-t">
              {cartData &&
                cartData.map((item, index) => (
                  <WishlistItem key={index} data={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const WishlistItem = ({ data }) => {
  return (
    <>
      <div className="border-b p-4 flex justify-center items-center">
        <div className="w-full items-center flex">
          <RxCross1 className="cursor-pointer" />
          <div className="w-[80px] h-[80px] ml-[16px]">
            <img
              src={data.image}
              className="w-full h-full object-cover"
              alt={data.item}
            />
          </div>
          <div className="pl-[16px]">
            <h1>{data.name}</h1>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#2096f3]">
              R{data.price}
            </h4>
          </div>
        </div>
        <div>
          <img
            src={`${require("../../Assets/images/icons/cart-dark.png")}`}
            className="cursor-pointer"
            title="Add To Cart"
            width={25}
            height={25}
            alt="Add to Cart"
          />
        </div>
      </div>
    </>
  );
};

export default Wishlist;
