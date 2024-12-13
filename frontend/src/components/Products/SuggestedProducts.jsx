import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { areNamesSimilar } from "./similar";

const SuggestedProducts = ({ data }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filtering the product data
    const d =
      productData &&
      productData.filter(
        (i) =>
          (i.category === data.category ||
            areNamesSimilar(i.name, data.name)) &&
          i.id !== data.id, // Ensure the current item is not included
      );

    setProducts(d);
  }, [data]);

  return (
    <>
      {products.length > 0 && (
        <div>
          <div className={`${styles.section} py-4`}>
            <div className={`${styles.heading}`}>
              <h1 className="font-HubenRegular uppercase">You might like</h1>
            </div>
            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[30px] mb-12">
              {products.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestedProducts;
