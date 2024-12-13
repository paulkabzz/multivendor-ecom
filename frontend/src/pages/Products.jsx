import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Route/Footer/Footer";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    let _data;
    if (categoryData === null) {
      _data =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(_data);
    } else {
      _data =
        productData &&
        productData.filter((item) => item.category === categoryData);
      setData(_data);
    }
    window.scrollTo(0, 0);
  }, [categoryData]);
  return (
    <>
      <div>
        <Header activeHeading={3} />
        <br />
        <br />
        <div className={`${styles.section} h-full mb-0 pb-0`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[30px] mb-12">
            {data &&
              data.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
          </div>
          {data && data.length === 0 ? (
            <h1 className="text-center w-full pb-[120px] text-[50px] font-HubenRegular uppercase">
              No Items Found!
            </h1>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
