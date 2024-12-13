import React, { useState } from "react";
import styles from "../../styles/styles";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
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
                onClick={() => setOpenCart(false)}
              ></button>
            </div>
            {/* Cart Length */}
            <div className={`${styles.noramlFlex} p-4 flex items-center mt-4`}>
              <img
                src={`${require("../../Assets/images/icons/cart-dark.png")}`}
                width={25}
                height={25}
                alt="Cart"
              />
              <h5 className="pl-5 text-[20px] font-[500]">
                {cartData.length !== 1 ? `${cartData.length} Items` : "1 Item"}
              </h5>
            </div>
            {/* Single Cart Item... We'll map through the cart items to display n number of cart items dynamically. */}
            <br />
            <div className="w-full border-t">
              {cartData &&
                cartData.map((item, index) => (
                  <CartItem key={index} data={item} />
                ))}
            </div>
          </div>

          <div className="px-5 mb-3">
            {/* Checkout Button */}
            {cartData.length === 0 || !cartData ? (
              <Link to="/products" className="no-underline text-[#2096f3]">
                <button
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#2096f3] text-[#fff] rounded-[5px]`}
                >
                  <h1>Start Shopping</h1>
                </button>
              </Link>
            ) : (
              <Link to="/checkout" className="no-underline text-[#2096f3]">
                <button
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#2096f3] text-[#fff] rounded-[5px] ${cartData.length === 0 || !cartData ? "opacity-50" : null}`}
                  disabled={cartData.length === 0 || !cartData}
                >
                  <h1>
                    CHECKOUT (
                    {cartData.length === 1
                      ? "1 item"
                      : `${cartData.length} items`}
                    )
                  </h1>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <>
      <div className="border-b p-4 flex justify-center items-center">
        <div className="w-full items-center flex">
          <div>
            <div
              className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => setValue(value + 1)}
            >
              <HiPlus size={14} color="#fff" />
            </div>
            <span className="pl-[10px]">{value}</span>
            <div
              className={`bg-[#eaeaea] border border-[#eaeaeada] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => setValue(value === 1 ? 1 : value - 1)}
            >
              <HiMinus size={14} color="#777" />
            </div>
          </div>
          <div className="w-[80px] h-[80px] ml-[16px]">
            <img
              src={data.image}
              className="w-full h-full object-cover"
              alt={data.item}
            />
          </div>
          <div className="pl-[16px]">
            <h1>{data.name}</h1>
            <h4 className="font-[400] text-[12px] text-[#00000082]">
              R{data.price} × {value}
            </h4>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#2096f3]">
              R{totalPrice}
            </h4>
          </div>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </>
  );
};

export default Cart;
