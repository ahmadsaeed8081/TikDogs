import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden tw-bg-black">
        <div className="container tw-py-10">
          <div className="row tw-items-center">
            <div className="col-md-12 md:tw-text-start  tw-text-center">
              <img width={220} src={require("../../assets/images/footer_logo.png")} className="tw-mx-auto" />
              <ul className=" tw-pt-6 tw-p-0 tw-flex  tw-justify-center tw-gap-5 tw-items-center">
                <li>
                  <Link to={'https://x.com/TIKDOGS_'} target="_blank" >
                    <img src={require("../../assets/images/x.png")} width={30} />
                  </Link>
                </li>
                <li>
                  <Link to={'https://www.reddit.com/user/TikDogs'} target="_blank" >
                    <img src={require("../../assets/images/reddit.png")} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://t.me/TheTikDogs'} target="_blank" >
                  <img src={require("../../assets/images/telegram.png")} width={30}/>
                  </Link>
                </li>
                <li>
                  <Link to={'https://www.linkedin.com/company/tikdogs'} target="_blank" >
                    <img src={require("../../assets/images/linkedin.png")} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://www.instagram.com/thetikdogs'} target="_blank"  >
                  <img src={require("../../assets/images/insta.png")} width={30}/>
                  </Link>
                </li>

              </ul>
              <p className=" sm:tw-text-xl tw-text-sm tw-text-white tw-pt-6 tw-text-center">
              TikDogs Address : <span style={{ color:"#6DA6FF" }}>0xfC978eaefAf2f61ACa3A5456B462ffBed990Fbb4</span>
              </p>

            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
