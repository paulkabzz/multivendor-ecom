import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductCardDetailsCard from "../ProductCardDetails/ProductCardDetails";
// import {Cloudinary} from "@cloudinary/url-gen";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle clicking Next
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === data.image_Url[0].url.length - 1) {
        return 0; // If last image, go back to the first one
      } else {
        return prevIndex + 1;
      }
    });
  };

  // Function to handle clicking Previous
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.image_Url[0].url.length - 1; // If first image, go to the last one
      } else {
        return prevIndex - 1;
      }
    });
  };
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <React.Fragment>
      <div className={"_container"}>
        <div className={"_grid shadow-sm"}>
          <Link
            className={"img bg-gray-500 h-full flex"}
            to={`/products/${product_name}/${data.id}`}
          >
            <img
              src={`${require(`../../../static/images/${data.image_Url[0].url[currentImageIndex]}`)}`}
              className="product-image"
              alt={"perfume bottle"}
            />
          </Link>
          <div className={"card_content"}>
            <Link to={"/"}>
              <h6 className="text-[14px]">{data.shop.name}</h6>
            </Link>
            <Link to={`/products/${product_name}/${data.id}`}>
              <h2 className="mt-[15px] text-[20px]" title={data.name}>
                {data.name.length > 25
                  ? data.name.slice(0, 31) + "..."
                  : data.name}
              </h2>
            </Link>
            <div
              className={"mt-[8px] w-full h-[50px]flex dexc items-center"}
              onClick={() =>
                console.log(document.querySelector(".dexc").clientWidth)
              }
            >
              <p className="desc text-[14px]">
                {data.description.length > 80
                  ? data.description.slice(0, 80) + "..."
                  : data.description.length === 0
                    ? "&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;"
                    : data.description}
              </p>
            </div>

            <div className="flex mt-[10px]">
              <AiFillStar
                className="mr-2 cursor-pointer"
                color="#F6BA00"
                size={20}
              />
              <AiFillStar
                className="mr-2 cursor-pointer"
                color="#F6BA00"
                size={20}
              />
              <AiFillStar
                className="mr-2 cursor-pointer"
                color="#F6BA00"
                size={20}
              />
              <AiFillStar
                className="mr-2 cursor-pointer"
                color="#F6BA00"
                size={20}
              />
              <AiOutlineStar
                className="mr-2 cursor-pointer"
                color="#F6BA00"
                size={20}
              />
            </div>
            <span className="sold mt-[6px] text-[14px]">
              {data.total_sell} sold
            </span>

            <div className={"prices"}>
              {data.discount_price === 0 ? (
                <p className={"big_price"}>R{data.price}</p>
              ) : (
                <React.Fragment>
                  <p className={"big_price"}>R{data.discount_price}</p>{" "}
                  <p className={"small_price text-[#d55a44]"}>
                    <s>R{data.price}</s>
                  </p>
                </React.Fragment>
              )}
            </div>
            {/* Side options */}
            {/* <img
                src={require("../../../Assets/images/icons/cart-light.png")}
                alt={"shopping cart icon"}
                className={"icon w-[24px]"}
              /> */}
            <div className="flex gap-4 mt-[18px] ">
              <button
                onClick={handlePrev}
                className={`w-[25px] h-[25px] shadow-sm flex items-center justify-center rounded-full next-btn ${
                  data.image_Url[0].url.length === 1 || currentImageIndex === 0
                    ? "opacity-30"
                    : "opacity-100"
                }`}
                disabled={
                  data.image_Url[0].url.length === 1 || currentImageIndex === 0
                }
              >
                <img
                  src={`${require("../../../Assets/images/icons/arrow.png")}`}
                  className="rotate-180"
                  alt="previous"
                  width={16}
                  height={16}
                />
              </button>
              <img
                src={`${require("../../../Assets/images/icons/cart-dark.png")}`}
                className="cursor-pointer w-[24px]"
                title="Add item to cart"
                alt="add to cart button"
              />
              {click ? (
                <img
                  src={`${require("../../../Assets/images/icons/fav-filled.png")}`}
                  onClick={() => setClick(!click)}
                  title="Remove from wishlist"
                  alt="Remove from wishlist"
                  className="_img cursor-pointer w-[24px]"
                />
              ) : (
                <img
                  src={`${require("../../../Assets/images/icons/favourites-dark.png")}`}
                  onClick={() => setClick(!click)}
                  title="Add to wishlist"
                  alt="Add to wishlist button"
                  className="_img cursor-pointer w-[24px]"
                />
              )}
              {open ? (
                <img
                  src={`${require("../../../Assets/images/icons/close-dark.png")}`}
                  onClick={() => setOpen(!open)}
                  title="Close modal"
                  alt="Close product modal"
                  className="_img cursor-pointer w-[24px]"
                />
              ) : (
                <img
                  src={`${require("../../../Assets/images/icons/open-dark.png")}`}
                  onClick={() => setOpen(!open)}
                  title="Open modal"
                  alt="Open product modal"
                  className="_img cursor-pointer w-[24px]"
                />
              )}
              <button
                onClick={handleNext}
                className={`w-[25px] h-[25px] flex shadow-sm items-center justify-center rounded-full next-btn ${
                  data.image_Url[0].url.length === 1 ||
                  currentImageIndex === data.image_Url[0].url.length - 1
                    ? "opacity-30"
                    : "opacity-100"
                }`}
                disabled={
                  data.image_Url[0].url.length === 1 ||
                  currentImageIndex === data.image_Url[0].url.length - 1
                }
              >
                <img
                  src={`${require("../../../Assets/images/icons/arrow.png")}`}
                  alt="next"
                  width={16}
                  height={16}
                />
              </button>

              {open ? (
                <ProductCardDetailsCard setOpen={setOpen} data={data} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
