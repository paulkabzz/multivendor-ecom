import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Route/Footer/Footer";

const BestSellingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const _data =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(_data);
  }, []);
  return (
    <>
      <div>
        <Header activeHeading={2} />
        <br />
        <br />
        <div className={`${styles.section} h-full mb-0 pb-0`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[30px] mb-12">
            {data &&
              data.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BestSellingPage;
