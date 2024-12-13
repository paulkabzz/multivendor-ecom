import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown";

const EventsCard = ({ active }) => {
  return (
    <React.Fragment>
      <div
        className={` w-[full] block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex gap-5 py-6 px-6 mb-12`}
      >
        <div className="w-full lg:w-[40%] m-auto">
          <div className="max-w-[480px] h-[350px]">
            <img
              src="https://kissuomo.it/cdn/shop/files/12_3_8e8e9926-8bac-461c-8999-6e996d39972b.webp?crop=center&height=720&v=1710499469&width=1080"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <h2 className={`${styles.productTitle} uppercase`}>
            Iphone 14 promax 256 GB
          </h2>
          <p className="text-[14px] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic
            illum atque rerum, voluptatibus obcaecati molestiae ipsum nam
            officiis officia tempore dolorum ut nihil dicta qui ea ab.
            Architecto nam eum sint perferendis dolorem maxime hic. Inventore,
            suscipit! At veniam quos sequi quis ipsa debitis ut, expedita, ullam
            fugiat ab officiis facere cum, iste possimus a magnam. Perspiciatis
            saepe, placeat inventore repellat asperiores quaerat. Nemo, minus
            enim. Ad ipsam quo optio magni iste quae illum error repudiandae
            officia distinctio culpa reiciendis soluta facere, totam alias
            deleniti cupiditate, laudantium ratione? Molestias maxime veniam
            aperiam cumque sunt accusantium accusamus repellendus ex quos.
          </p>
          <div className="flex py-2 justify-between">
            <div className="flex">
              <h5 className="font-[500] text-[20px] text-[#d55b45] pr-3 line-through font-[Fraunces]">
                R20000
              </h5>
              <h5 className="font-bold text-[20px] text-[#333] font-[Fraunces]">
                R17000
              </h5>
            </div>
            <span className="pr-3 font-[400] text-[14px] text-[#44a55e] flex items-center justify-center">
              120 Sold
            </span>
          </div>
          <CountDown />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventsCard;
