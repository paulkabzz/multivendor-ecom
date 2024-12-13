import React from "react";
import styles from "../../../../src/styles/styles";
import { brandingData, categoriesData } from "../../../static/data"; // Importing branding and categories data
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation

/**
 * Component for displaying branding information and categories.
 *
 * @returns {JSX.Element} - The rendered Categories component.
 */
const Categories = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  /**
   * Function to handle category selection.
   * Navigates to the products page filtered by the selected category.
   *
   * @param {Object} category - The selected category object.
   */
  const handleSubmit = (category) => {
    navigate(`/products?category=${category.title}`); // Navigate to products page with selected category
    window.location.reload(); // Reload the page to apply the filter
  };

  return (
    <React.Fragment>
      {/* Branding Section */}
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {/* Mapping through branding data to render branding information */}
          {brandingData &&
            brandingData.map((data, index) => (
              <div className="flex items-start" key={index}>
                <img
                  src={require(`../../../Assets/images/icons/${data.icon}`)}
                  className="w-[40px]"
                  alt={data.title}
                />

                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {data.title}
                  </h3>
                  <p className="text-xs md:text-sm">{data.Description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Categories Section */}
        <div
          className={`mx-auto w-[90%] bg-white p-6 rounded-lg mb-12`}
          id="categories"
        >
          {/* Grid layout for categories */}
          <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
            {/* Mapping through categories data to render category cards */}
            {categoriesData &&
              categoriesData.map((category, index) => (
                <div
                  className="w-full h-[100px]  flex items-center justify-around cursor-pointer overflow-hidden shadow-md hover:bg-[#eff1f3] "
                  key={index}
                  onClick={() => handleSubmit(category)}
                >
                  {/* Category Title */}
                  <h5 className={`text-[14px] leading-[1.3]`}>
                    {category.title}
                  </h5>
                  {/* Category Image */}
                  <img
                    src={require(
                      `../../../Assets/categories/${category.image_Url}`,
                    )}
                    className="w-[50px] "
                    alt={category.title}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
