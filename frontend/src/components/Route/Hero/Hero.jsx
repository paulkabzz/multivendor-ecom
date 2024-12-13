import React, { useState } from "react";
import styles from "../../../styles/styles";
import anime from "animejs";
import { Link } from "react-router-dom";

// Hero component for the landing page
const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] overflow-hidden w-full bg-no-repeat ${styles.noramlFlex}`}
    >
      {/* Inner hero section */}
      <div className="innner-hero w-full h-full absolute px-[0px]">
        <div className="left w-[100%] overflow-hidden flex justify-center items-center h-full ">
          {/* Dot grid background */}
          <DotGrid />
          {/* Hero text and button */}
          <div className="hero-text absolute z-[2000] flex flex-col pointer-events-none">
            <h1 className="text-black font-HubenRegular text-wrap font-bold text-[4vw] text-center top-[50%] leading-[70px] uppercase mb-[20px]">
              BUY AND SELL ON
              <br />
              <span className="text-[#2096f3]">SNM</span>!
            </h1>
            <p className="text-center font-SophiaPro text-[1.05vw] text-wrap">
              Explore a diverse array of categories encompassing clothing,
              footwear, technology, accessories, and beyond!
            </p>
            {/* Link to products page */}
            <Link to={"/products"} className="w-[150px] pointer-events-auto">
              <div
                className={`${styles.button} rounded-sm bg-black mt-5 flex items-center justify-center`}
              >
                <span className="text-[#fff] font-SophiaPro text-[18px] uppercase">
                  SHOP NOW
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Hero image */}
      <img
        id="hero-image"
        src={require("../../../Assets/images/ui/lebron-hero.png")}
        style={{ width: "15vw" }}
        className="pointer-events-none absolute left-[7%]"
        alt=""
      />
    </div>
  );
};

// Constants for dot grid size
const GRID_WIDTH = 70;
const GRID_HEIGHT = 45;

// Component for the dot grid background
const DotGrid = () => {
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation status

  const handleDotClick = (event) => {
    if (isAnimating) return; // Prevent further clicks if animation is running

    setIsAnimating(true); // Set animation status to true

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 250 },
      ],
      translateY: [
        { value: -30, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 250 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 250 },
      ],
      delay: anime.stagger(150, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: event.target.dataset.index,
      }),
      complete: () => setIsAnimating(false), // Reset animation status when complete
    });
  };

  // Generate dots for the grid
  const dots = [];
  let index = 0;
  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-[#ccc]"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-[#eee] to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>,
      );
      index++;
    }
  }

  // Render the dot grid
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default Hero;
