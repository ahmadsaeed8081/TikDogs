
import React from 'react'
import VideoSlider from "../videoSlider";

import VideoPlayer from '../videoPlayer';
const HowToBuy = () => {
return(

<section
className=" tw-bg-white tw-pt-14 md:tw-p-4  "
>
<div className="tw-w-4/4 md:tw-w-[90%] tw-m-auto tw-mt-20">
  <h1 className="tw-uppercase tw-text-center tw-text-black tw-text-4xl tw-font-zendots tw-text-z-10">
    How To Buy
  </h1>
  <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-items-center">
    <div className="tw-p-10 md:tw-p-4">
      <div className="tw-relative">
        <div class="tw-border-2 tw-absolute tw-border-[#FE0030] tw-border-dashed tw-h-full tw-left-5"></div>

        <div class="tw-z-20 tw-flex tw-items-center order-1 tw-bg-black tw-shadow-xl tw-w-10 tw-h-10 tw-rounded-full tw-my-auto tw-absolute tw-left-0">
          <h1 class="tw-mx-auto tw-font-semibold font-zendots tw-text-2xl tw-text-[#FE0030]">
            01
          </h1>
        </div>
        <div className="tw-pl-10">
          <p className="tw-font-zendots tw-font-semibold tw-text-2xl tw-mt-10 tw-text-[#FE0030] tw-ml-2">Connect Wallet</p>
          <p className="tw-text-lg tw-text-black tw-p-2">
            To purchase Tiks Token you need to connect your wallet,
            which involves approving the contract on your wallet
          </p>
        </div>

        <div className="tw-pt-5">
          <div class="tw-z-20 tw-flex tw-items-center order-1 bg-black shadow-xl tw-w-10 tw-h-10 tw-rounded-full tw-my-auto tw-absolute tw-left-0">
            <h1 class="mx-auto tw-font-semibold font-zendots tw-text-2xl tw-text-[#FE0030]">
              02
            </h1>
          </div>
          <div className="tw-pl-10">
            <p className="tw-font-semibold tw-font-zendots tw-mt-2 tw-ml-2 tw-text-2xl tw-text-[#FE0030]">
              SELECT PAYMENT TYPE
            </p>
            <p className="tw-text-lg tw-text-black tw-p-2">
              Select from our available MATIC & USDT
              for payment
            </p>
          </div>
        </div>

        <div className="tw-pt-5">
          <div class="tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-black tw-shadow-xl tw-w-10 tw-h-10 tw-rounded-full tw-my-auto tw-absolute tw-left-0">
            <h1 class="tw-mx-auto tw-font-semibold font-zendots tw-text-2xl tw-text-[#FE0030]">
              03
            </h1>
          </div>
          <div className="tw-pl-10">
            <p className="tw-font-zendots tw-mt-2 tw-ml-2 tw-text-[#FE0030] tw-text-2xl tw-font-semibold">Buy Tiks Token</p>
            <p className="tw-text-lg tw-text-black tw-p-2">
              Simply input your amount, select buy and approve the
              payment on your wallet
            </p>
          </div>
        </div>

        <div className="tw-pt-5">
          <div class="z-20 tw-flex tw-items-center order-1 tw-bg-black shadow-xl w-10 h-10 tw-rounded-full my-auto tw-absolute tw-bottom-0 tw-left-0">
            <h1 class="tw-mx-auto font-semibold font-zendots text-lg text-custom-green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </h1>
          </div>
          <div className="tw-pl-10">
            <a href="#home">
              <button className="tw-bg-[#FE0030] tw-text-black tw-mt-1 tw-ml-2 tw-px-10 tw-p-2 tw-rounded">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="tw-relative">

      <VideoPlayer src={"./video1.mp4"}/>

      <p className="tw-font-zendots tw-text-[#FE0030] tw-underline tw-my-2 tw-text-center">
        View Step by Step
      </p>
    </div>
  </div>
</div>
</section>
)
};
export default HowToBuy;
