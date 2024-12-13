import React from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { productData } from "../../../static/data";

const FeaturedProducts = () => {
  return (
    <React.Fragment>
      <div>
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1 className="font-HubenRegular uppercase">Featured Products</h1>
          </div>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-1 md:gap-[25px] lg:grid-cols-1 lg:gap-[25px] xl:grid-cols-2 xl:gap-[30px] mb-12 border-0">
            {productData &&
              productData.map((product, index) => (
                <ProductCard data={product} key={index} />
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProducts;
