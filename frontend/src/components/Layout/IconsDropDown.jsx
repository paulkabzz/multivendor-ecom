import React from "react";

const IconsDropDown = ({ setOpen, iconData }) => {
  console.log(iconData);
  return (
    <>
      <div>
        {iconData &&
          iconData.map((icon, index) => (
            <>
              <img src={require(icon.value)} key={index} alt="" />
            </>
          ))}
      </div>
    </>
  );
};

export default IconsDropDown;
