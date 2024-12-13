import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset state when data changes
    setCount(1);
    setSelect(0);
    setClick(false);
  }, [data]);

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => setCount(count + 1);

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=506gdbwxvnsuperdopeadh2y");
  };

  console.log(data);

  return (
    <>
      <div>
        {data ? (
          <>
            <div
              className={`${styles.section} w-[90%] 800px:w-[80%] pt-[3rem]`}
            >
              <div className="w-full py-5">
                <div className="block w-full 800px:flex">
                  <div className="w-full 800px:w-[50%] border-r-[1px] border-[#ddd] mr-[2rem] pr-[2rem]">
                    <div className="max-w-[calc(400px+1rem)] w-full max-h-[calc(400px+1rem)] h-full shadow-lg">
                      <img
                        src={require(
                          `../../static/images/${data?.image_Url[0].url[select]}`,
                        )}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full flex mt-4">
                      <div
                        className={`h-[75px] w-[75px] ${
                          select === 0 ? "border" : ""
                        } mr-4`}
                      >
                        <img
                          src={require(
                            `../../static/images/${data?.image_Url[0].url[0]}`,
                          )}
                          alt=""
                          className="w-full h-full object-cover cursor-pointer shadow-md"
                          onClick={() => setSelect(0)}
                        />
                      </div>
                      {/* <div className={`h-[200px] w-[200px] ${select === 1 ? "border" : ""} mr-4`}>
                        <img 
                          src={require(`../../static/images/${data?.image_Url[0].url[1]}`)} 
                          alt="" 
                          className='w-full h-full object-cover cursor-pointer' 
                          onClick={() => setSelect(1)} 
                        />
                        
                      </div> */}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="w-full 800px:w-[50%] ">
                    <h2 className={`text-[30px] font-[600]`}>{data.name}</h2>
                    <p className="pt-[2rem] leading-2 text-[14px] text-[#222222]">
                      {data.description}
                    </p>
                    <div className="flex pt-[2rem] items-center">
                      {data.discount_price > 0 ? (
                        <>
                          <p className="big_price !text-[30px]">
                            R{data.discount_price}
                          </p>
                          <p className="small_price !text-[30px] text-[#d55b45]">
                            <s>{data.price ? "R" + data.price : null}</s>
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="big_price">
                            {data.price ? "R" + data.price : null}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center mt-5 justify-between pr-3">
                      <div>
                        <button
                          className="bg-[#2096f3] text-white font-bold rounded-l px-5 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                          onClick={decrementCount}
                        >
                          -
                        </button>
                        <span className="bg-gray-200 text-gray-800 font-medium px-5 py-[12.27px] text-[14px]">
                          {count}
                        </span>
                        <button
                          className="bg-[#2096f3] text-white font-bold rounded-r px-5 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                          onClick={incrementCount}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        {click ? (
                          <img
                            src={`${require("../../Assets/images/icons/fav-filled.png")}`}
                            onClick={() => setClick(!click)}
                            title="Remove from wishlist"
                            alt="Remove from wishlist"
                            className="_img cursor-pointer w-[30px]"
                          />
                        ) : (
                          <img
                            src={`${require("../../Assets/images/icons/favourites-dark.png")}`}
                            onClick={() => setClick(!click)}
                            title="Add to wishlist"
                            alt="Add to wishlist button"
                            className="_img cursor-pointer w-[30px]"
                          />
                        )}
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                      className={`${styles.button} bg-[#000] text-[#fff] shadow-sm rounded mt-8 h-11 flex items-center`}
                    >
                      <span>Add to cart</span>
                      <img
                        src={require("../../Assets/images/icons/cart-light.png")}
                        className="ml-3"
                        width={20}
                        alt=""
                      />
                    </button>
                    {/* Shop Avatar */}
                    <div className="flex items-center pt-8 mr-2">
                      <img
                        src={data.shop.shop_avatar.url}
                        alt={data.shop.name + "'s Avatar"}
                        className="w-[50px] h-[50px] rounded-full shadow-md"
                      />
                      <div className="pr-5">
                        <h6 className={`px-3 !text-[14px]`}>
                          {data.shop.name}
                        </h6>
                        <span className="px-3 flex items-center text-[14px] gap-2">
                          {data.shop.ratings}
                          <AiFillStar color="#F6BA00" />
                        </span>
                      </div>
                      <div>
                        <button
                          onClick={handleMessageSubmit}
                          title={"Message " + data.shop.name}
                          className={
                            styles.button +
                            " bg-[#2096f3] text-[#fff] rounded flex items-center gap-3 shadow-md"
                          }
                        >
                          <span>Message</span>
                          <img
                            src={require("../../Assets/images/icons/message.png")}
                            width={20}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProductDetailsInfo data={data} />
              <br />
              <br />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  const deets = [
    {
      title: "Product Details",
      content: "data.description",
    },
    {
      title: "Product Reviews",
      content: data.description,
    },
    {
      title: "Seller Information",
      content: data.description,
    },
  ];

  return (
    <>
      <div className="bg-[#ebebec] px-3 800px:px-10 py-2 rounded ">
        <div className="w-full flex justify-between border-b pt-10 pb-5">
          {deets.map((deet, index) => (
            <>
              <div className="relative">
                <h5
                  onClick={() => setActive(index + 1)}
                  className={
                    "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                  }
                >
                  {deet.title}
                </h5>
                {active === index + 1 ? (
                  <>
                    <div className={styles.active_indicator}></div>
                  </>
                ) : null}
              </div>
            </>
          ))}
        </div>

        <div>
          {active === 1 ? (
            <>
              <p className="py-2 text-[14px] leading-6 pb-5 whitespace-pre-line">
                {data.description}
              </p>
              <p className="py-2 text-[14px] leading-6 pb-5 whitespace-pre-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui
                soluta velit ea maxime mollitia reiciendis distinctio
                consectetur perferendis accusamus minima magni enim quae vitae
                accusantium explicabo quisquam, ad recusandae? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Inventore incidunt
                officiis reprehenderit error ipsa exercitationem molestias
                suscipit in aliquam, facere sunt maiores atque magnam distinctio
                magni nam unde vitae mollitia cum. Dolorem maiores, amet
                recusandae nam ipsa neque deserunt quidem ex ea ad deleniti fuga
                a quo ullam tempore voluptate!
              </p>
            </>
          ) : null}
        </div>

        <div>
          {active === 2 ? (
            <>
              <p className="py-2 text-[14px] leading-6 pb-5 whitespace-pre-line">
                No Reviews Yet
              </p>
            </>
          ) : null}
        </div>

        <div>
          {active === 3 && (
            <>
              <div className="w-full block 800px:flex p-5">
                <div className="w-full 800px:w-[50%]">
                  <div className="flex items-center">
                    <img
                      className="w-[50px] h-[50px] rounded-full "
                      src={data.shop.shop_avatar.url}
                      alt={data.shop.name}
                    />
                    <div className="pr-5">
                      <h6 className={`px-3 !text-[14px]`}>{data.shop.name}</h6>
                      <span className="px-3 flex items-center text-[14px] gap-2">
                        {data.shop.ratings}
                        <AiFillStar color="#F6BA00" />
                      </span>
                    </div>
                  </div>
                  <p className="pt-2 text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    soluta debitis animi possimus aut esse dicta accusamus
                    reprehenderit placeat repellendus odio quaerat quas veniam
                    nobis et cupiditate voluptatem inventore, odit pariatur
                    fugit ipsa at facilis earum. Perspiciatis nostrum
                    repudiandae nam iure illo qui, aliquam, dolorum neque
                    pariatur soluta, ex aliquid maxime? Fugit esse sed autem?
                    Omnis ad magni tempore placeat assumenda quam sunt
                    doloremque similique unde nesciunt! Ducimus ullam eligendi
                    laudantium accusamus hic tenetur, doloremque temporibus
                    eveniet obcaecati. Enim, alias!
                  </p>
                </div>

                <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
                  <div className="text-left">
                    <h5 className="font-[600] text-[14px]">
                      Date Joined:{" "}
                      <span className="font-[300]">20 May 2024</span>
                    </h5>
                    <h5 className="font-[600] text-[14px] pt-3">
                      Total Products Sold:{" "}
                      <span className="font-[300]">78</span>
                    </h5>
                    <h5 className="font-[600] text-[14px] pt-3">
                      Total Reviews: <span className="font-[300]">38</span>
                    </h5>
                    <Link to="/">
                      <button
                        className={
                          styles.button +
                          " mt-3 bg-[#000] text-white rounded !text-[14px]"
                        }
                      >
                        Visit Shop
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
