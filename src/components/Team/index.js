import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div
      id="teamSection"
      className="  tw-bg-[#FE0030]"
    >
      <div className="container tw-py-16 tw-text-center">
       
        <h1 className="tw-text-white tw-pt-4 tw-font-semibold md:tw-text-[45px] tw-text-[35px]">
        OUR NFTS
        </h1>
        <div className="row  tw-pt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 ">
              <div className=" tw-text-center tw-rounded-lg">
                <div className="">
                  
                  <div className="row">
                  <div className=" col-md-9 tw-mx-auto">
                  <img
                      src={member.image}
                      className=" tw-mx-auto"
                      alt={member.name}
                    />
                  </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Ty JavellanA, CPA",
    role: "Finance & Investment",
    image: require("../../assets/images/about3.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Jose Cliff Romos",
    role: "Strategy & Innovation",
    image: require("../../assets/images/team1.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Dr. Jesus Acantilado",
    role: "Founder | Medical Director",
    image: require("../../assets/images/team2.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
];

export default Team;
