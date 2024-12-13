import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

/**
 * Navigation bar component.
 *
 * @param {number} active - Index of the active navigation item.
 * @returns {JSX.Element} - The rendered navigation bar component.
 */
const NavBar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {
        // Map through navigation items and render each item as a link
        navItems &&
          navItems.map((navItem, index) => (
            <div className="flex text-[14px]" key={index}>
              {/* Link to the URL defined in the navigation item */}
              <Link
                to={navItem.url}
                // Apply active styles if the current index matches the active index
                className={`${
                  active === index + 1 ? "text-[#2096f3]" : ""
                } px-6 cursor-pointer mb-5 800px:mb-0 `}
              >
                {navItem.title}
              </Link>
            </div>
          ))
      }
    </div>
  );
};

export default NavBar;
