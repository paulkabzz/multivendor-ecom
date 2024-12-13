import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data"; // Importing product data
import ProductCard from "../ProductCard/ProductCard"; // Importing ProductCard component
import styles from "../../../styles/styles"; // Importing styles

/**
 * Component for displaying best selling products.
 *
 * @returns {JSX.Element} - The rendered BestDeals component.
 */
const BestDeals = () => {
  const [data, setData] = useState([]); // State for product data

  useEffect(() => {
    // Sort product data based on total_sell and select the top 6
    const sortedData =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = sortedData.slice(0, 4);
    setData(firstFive); // Set the state with the sorted data
  }, []);

  return (
    <div>
      {/* Best Deals Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className="font-HubenRegular uppercase">Best Selling</h1>{" "}
          {/* Heading */}
        </div>
        {/* Grid layout for product cards */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-1 md:gap-[25px] lg:grid-cols-1 lg:gap-[25px] xl:grid-cols-2 xl:gap-[30px] mb-12 border-0">
          {/* Mapping through product data to render ProductCard components */}
          {data &&
            data.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
