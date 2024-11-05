import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden tw-bg-[#717a7a]">
        <div className="container tw-py-10">
          <div className="row tw-items-center">
            <div className="col-md-12 md:tw-text-start  tw-text-center">
              <img width={120} src={require("../../assets/images/logo.png")} className="tw-mx-auto" />
              <ul className=" tw-pt-6 tw-p-0 tw-flex  tw-justify-center tw-gap-5 tw-items-center">
                <li>
                  <Link to={'https://x.com/YouSamaritan_ph'}>
                    <img src={require("../../assets/images/pajamas_twitter.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={'http://www.youtube.com/@YouSamaritanOfficial'}>
                    <img src={require("../../assets/images/mingcute_youtube-fill.png")} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://t.me/+c28JVp_JCsxlODNl'} >
                  <FaTelegram size={30} color="#F9A11E" />
                  </Link>
                </li>


              </ul>
              <p className=" sm:tw-text-xl tw-text-sm tw-text-white tw-pt-6 tw-text-center">
              TikDogs Address : <span style={{ color:"#6DA6FF" }}>0x2FbdD419f6a00d0113BF0d8618BA22E425540d72</span>
              </p>

            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
