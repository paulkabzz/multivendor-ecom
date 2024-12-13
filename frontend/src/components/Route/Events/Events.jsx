import React from "react";
import styles from "../../../styles/styles";
import EventCard from "./EventsCard";
const Events = () => {
  return (
    <React.Fragment>
      <div>
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1 className="font-HubenRegular uppercase">Popular Events</h1>
          </div>
          <div className="w-full grid">
            <EventCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
