import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

/**
 * Dropdown component for displaying categories.
 *
 * @param {Array} categoriesData - Array of category data objects.
 * @param {Function} setDropDown - Function to toggle dropdown visibility.
 * @returns {JSX.Element} - The rendered dropdown component.
 */
const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /**
   * Handles form submission on category selection.
   * Navigates to the products page filtered by the selected category.
   *
   * @param {Object} category - The selected category object.
   */
  const handleSubmit = (category) => {
    navigate(`/products?category=${category.title}`);
    setDropDown(false); // Close the dropdown
    window.location.reload(); // Reload the page to apply category filter
  };

  return (
    <div className="pb-4 w-[220px] bg-white absolute z-30 shadow-sm mt-[70px]">
      {/* Render categories */}
      {categoriesData &&
        categoriesData.map((category, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex} ${
              index === 0 ? null : "border-t-[0.5px]"
            } relative`}
            onMouseEnter={() => setHoveredIndex(index)} // Set hoveredIndex on mouse enter
            onMouseLeave={() => setHoveredIndex(null)} // Clear hoveredIndex on mouse leave
            onClick={() => handleSubmit(category)} // Handle category selection
            style={{ position: "relative" }}
          >
            {/* Category image */}
            <img
              src={require(`../../Assets/categories/${category.image_Url}`)}
              alt="category"
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
            />
            {/* Category title */}
            <h3 className="m-3 cursor-pointer text-[14px] select-none">
              {category.title}
            </h3>
            {/* Highlight bar */}
            <div
              className="absolute bottom-0 left-0 bg-[#2096f3]"
              style={{
                width: hoveredIndex === index ? "100px" : "0", // Expand highlight bar on hover
                height: "2px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default DropDown;
