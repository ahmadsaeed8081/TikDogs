import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is YouSamaritan?",
      data:<div>
        <p>Do you know anyone who doesn’t have a problem? If your answer is none, then this platform is for everyone. It’s a revolutionary anti-depression platform – your anonymous lifeline! </p>
        <p>YouSamaritan is the first and only platform that enables users to transform passion into compassion. The platform leverages the advantages of blockchain technology, such as immutability, transparency, and security, to create a more efficient and secure way to advice and make confession. Watch this short video to learn exactly what YouSamaritan does </p>
        <p>Watch this short video to learn exactly what YouSamaritan does: <Link to={'https://youtu.be/5HrhxZ3EaXc'}>https://youtu.be/5HrhxZ3EaXc</Link>
        </p>
      </div>,
      isOpen: false,
    },
    {
      key: 2,
      title: "What makes YouSamaritan a brilliant project?",
      data:<div>
        <p> "YouSamaritan is primarily a donation platform. You may claim tax deductions when you make a donor purchase of Samaritan Token. If you decide to keep the profit, you instantly become an investor. It’s your choice!</p>
        <p>It’s a multi-purpose token. It has several use case. It’s a Utility Token. It’s a donation coin + DEX coin + ecommerce coin. We are tagged as the Shit Coin Killer. Watch this video to know what makes YouSamaritan a brilliant project:  </p>
        <p>Watch this video to know what makes YouSamaritan a brilliant project: <Link to={'https://youtu.be/_ndSsSeXU1Y'}> https://youtu.be/_ndSsSeXU1Y</Link></p>
      </div>,
      isOpen: false,
    },
    {
      key: 3,
      title: " How can I make a donor purchase of Samaritan tokens?",
      data:<div>
        <p>Samaritan tokens can be purchased during our token sale rounds or through supported cryptocurrency exchanges. Detailed instructions are available on our web page. </p>
      </div>,
      isOpen: false,
      // link:'Click here.'
    },
    {
      key: 4,
      title: "What are the benefits of owning Samaritan tokens early?",
      data: <div>
        <p>Early donor purchase benefit from lower token prices, as the price increases through nine scheduled rounds... Early adoption also provides more significant rewards and potential appreciation as the platform grows</p>
        <p>Watch this video to know the benefits of owning Samaritan Tokens early: <Link to={'https://youtu.be/_ndSsSeXU1Y'}> https://youtu.be/_ndSsSeXU1Y</Link></p>
      </div>,
      isOpen: false,
    },
    {
      key: 5,
      title: "How does YouSamaritan ensure the security of my donor purchase?",
      data: "YouSamaritan employs advanced blockchain technology, smart contracts, and industry-standard security protocols to safeguard your investments. Regular audits and security assessments are conducted to maintain the highest security standards",
      isOpen: false,
    },
    {
      key: 6,
      title: "What can I do with Samaritan tokens?",
      data:<div>  
        <p> You can claim tax deductions form the donor purchase of Samaritan Token. . If you decide to keep the profit, you instantly become an investor. Samaritan token is a multi-purpose token. It has several use case. It’s a Utility Token. It’s a donation coin + DEX coin + ecommerce coin.</p>
        <p> Watch this video to know what you can do with Samaritan Tokens: <Link to={'https://youtu.be/_ndSsSeXU1Y'}>https://youtu.be/_ndSsSeXU1Y</Link></p>
      </div>,
      isOpen: false,
    },

  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className=" tw-bg-[#E5B766]     tw-bg-no-repeat tw-w-full tw-bg-cover   tw-h-auto tw-py-20">
      <div className=" container">
        <div className="row tw-items-center">
          <div className="col-lg-6 col-md-12">
            <h2 className="tw-text-[#FE0030] "> FAQS</h2>
            <h1 className=" tw-font-medium tw-text-4xl sm:tw-text-start tw-text-center  tw-text-[#FE0030]">
              Frenquently Questions
            </h1>
            <div className="  tw-mt-12">
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={
                    <div>
                      {accordion.data}
                      <Link to={`${accordion.link}`}>{accordion.link}</Link>
                    </div>
                  }
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12  md:tw-pt-32 tw-pt-0 tw-relative">
            <div className="row">
              <div className="col-md-12  tw-mx-auto">
                <div className="row">
                  <div className="col-md-10 tw-mx-auto">
                    <img
                      src={require("../../assets/images/hero.png")}
                      className=" tw-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
