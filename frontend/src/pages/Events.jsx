import React from "react";
import Header from "../components/Layout/Header";
import EventsCard from "../components/Route/Events/EventsCard";
import Footer from "../components/Route/Footer/Footer";

const EventsPage = () => {
  return (
    <>
      <div>
        <Header activeHeading={4} />
        <br />
        <br />
        <EventsCard active={true} />
        <Footer />
      </div>
    </>
  );
};

export default EventsPage;
