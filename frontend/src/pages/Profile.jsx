import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Route/Footer/Footer";
import styles from "../styles/styles";
import ProfileSideBar from "../components/Profile/ProfileSideBar";
import ProfileContent from "../components/Profile/ProfileContent";

const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div>
        <Header />
        <div className={styles.section + " flex py-10"}>
          <div className="W-[80px] 800px:w-[355px] 800px:mt-0 ">
            <ProfileSideBar active={active} setActive={setActive} />
          </div>
          <ProfileContent active={active} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
