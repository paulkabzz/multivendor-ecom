import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";
import { toast } from "react-toastify";

const ProfileSideBar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const x = [
    {
      name: "Profile",
      icon: "user-icon-dark.png",
    },
    {
      name: "Orders",
      icon: "cart-dark.png",
    },
    {
      name: "Refunds",
      icon: "save-money.png",
    },
    {
      name: "Inbox",
      icon: "chat.png",
    },
    {
      name: "Track Order",
      icon: "track.png",
    },
    {
      name: "Payment Methods",
      icon: "payment.png",
    },
    // {
    //   name: "Settings",
    //   icon: "settings.png",
    // },
    {
      name: "Address",
      icon: "home-address.png",
    },
    {
      name: "Logout",
      icon: "logout-2.png",
    },
  ];

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  };
  return (
    <>
      <div className="800px:w-full bg-white shadow-sm rounded-[10px] pt-8 p-4 w-[50px] 800px:h-auto h-[70vh] flex items-center flex-col justify-center mt-[10vh] 800px:mt-0">
        {x.map((i, j) => (
          <div
            className="flex items-center cursor-pointer w-full mb-8 "
            key={j}
            onClick={() =>
              setActive(j + 1) || i.name === "Inbox"
                ? navigate("/inbox")
                : null || i.name === "Logout"
                  ? logoutHandler()
                  : null
            }
          >
            <img
              src={require("../../Assets/images/icons/" + i.icon)}
              className={
                active === j + 1
                  ? "border-b-2 border-red-500 pb-[3px] block"
                  : null
              }
              width={20}
              height={20}
              alt=""
            />
            <span
              className={`${
                active === j + 1 ? "text-red-500" : null
              } pl-3 text-[14px] 800px:block hidden`}
            >
              {i.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileSideBar;
