import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Route/Footer/Footer";
import styles from "../styles/styles";
import { questionsAndAnswers } from "../static/faq";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = () => {
  return (
    <>
      <div>
        <Header activeHeading={null} />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

const Faq = () => {
  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto space-y-4">
        <Accordion>
          {questionsAndAnswers.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={item.question}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
