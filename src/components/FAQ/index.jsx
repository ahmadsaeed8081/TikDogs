import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is TikDogs and the TIKS token all about?",
      data:<div>
        <p>
        TikDogs is a unique meme token project that combines community, rewards, and entertainment centered around dogs. The TIKS token is the cryptocurrency that powers TikDogs, a TikTok-inspired platform where users can share short videos exclusively featuring dogs. By holding TIKS, users gain access to the TikDogs app, where they earn rewards for every like and share their videos receive. TIKS also has an MLM (Multi-Level Marketing) system designed as a fundraising method to support the development of the TikDogs platform.
        </p>
      </div>,
      isOpen: false,
    },
    {
      key: 2,
      title: "How does the MLM system work on TikDogs?",
      data:<div>
        <p> TikDogs includes an MLM system that rewards users for referring others to buy TIKS and join the platform. This MLM system is powered by AI software, which helps active participants generate significant income. By staying active in the MLM program, users can increase their earnings to a level where some may not need to work traditional jobs anymore. To learn more about how the MLM system works, please refer to our PDF guide [link here].</p>
        
      </div>,
      isOpen: false,
    },
    {
      key: 3,
      title: "How does the TIKS token price increase?",
      data:<div>
        <p>The TIKS token has a price-increase mechanism powered by blockchain technology, designed to respond to demand through a smart contract algorithm. As more people buy TIKS, the algorithm automatically adjusts the token price upward, rewarding early adopters and supporting a stable value increase over time. This automated demand-based pricing system benefits holders as the platform grows in popularity. </p>
      </div>,
      isOpen: false,
      // link:'Click here.'
    },
    {
      key: 4,
      title: "What are the ways to generate wealth with TikDogs?",
      data: <div>
        <p>TikDogs offers several ways to generate wealth for participants:</p>
        <p>1.	Token Demand: The TIKS token price increases with demand, so as more people buy and hold TIKS, the token value rises.</p>
        <p>2.	MLM System: Our AI-powered MLM software enables active participants to earn substantial income by referring others. Staying engaged in this system can result in significant rewards, potentially allowing users to replace traditional work income.</p>
        <p>3.	TikDogs Platform: Dog owners and content creators earn TIKS tokens for every like, share, and engagement on their videos. The platform itself creates a new avenue for wealth generation for dog lovers.</p>

      
      </div>,
      isOpen: false,
    },
    {
      key: 5,
      title: "How does TikDogs plan to generate additional income through advertising?",
      data: "TikDogs has strong growth potential, not only from user activity but also from advertising revenue. With the global pet industry valued at over $200 billion, TikDogs is ideally positioned to attract major advertisers, such as pet supply brands and pet services, seeking to reach a dedicated audience of pet owners. As the platform grows, advertising revenue from pet suppliers and related industries will create additional income opportunities, further supporting the platform and potentially increasing TIKS token value.",
      isOpen: false,
    },
    {
      key: 6,
      title: "What is the potential audience size for TikDogs?",
      data:<div>  
        <p> The potential audience for TikDogs is enormous. In the United States alone, approximately 69 million households own a dog, translating to about 54% of all households. Globally, there are over 600 million pet dogs, with dog ownership varying by country. This large and engaged audience of dog owners represents a unique market for TikDogs, both for platform growth and for attracting advertising partners. If you have a specific region or country in mind, we can provide more tailored information!</p>
      </div>,
      isOpen: false,
    },

    {
      key: 7,
      title: "What is the TikDogs platform?",
      data:<div>  
        <p> TikDogs, found at TikDogs.com, is a short video-sharing platform available as an app for iOS and Android users. Inspired by TikTok, TikDogs is exclusively for dog content, allowing users to upload short videos of their dogs, gain followers, and interact with other dog lovers. Content creators earn TIKS tokens for every like, share, and engagement their posts receive, making it a rewarding platform for dog enthusiasts.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 8,
      title: "How do I get paid for likes and shares on TikDogs?",
      data:<div>  
        <p> When someone likes or shares your video on TikDogs, you earn TIKS tokens. The more popular your content is, the more you earn. This feature incentivizes quality content and active engagement among dog lovers.</p>
      </div>,
      isOpen: false,
    },
    
    {
      key: 9,
      title: "Can I redeem TIKS tokens for other currencies?",
      data:<div>  
        <p> Yes, TIKS tokens can be redeemed for USDT, allowing users to convert their rewards into a stable cryptocurrency. This makes it easy for users to cash out their earnings or reinvest them.</p>
      </div>,
      isOpen: false,
    },

    {
      key: 10,
      title: " How do I buy TIKS tokens?",
      data:<div>  
        <p> You can purchase TIKS on our website, TikDogs.com, or through popular decentralized exchanges. You’ll need a compatible wallet, such as MetaMask, to hold your TIKS tokens. Once you’ve purchased TIKS, you can start referring others, sharing content, and earning rewards on TikDogs.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 11,
      title: "Is there a goal for TIKS holders?",
      data:<div>  
        <p>Yes, once we reach 40,000 wallets, TIKS will be listed on Binance and other major centralized exchanges. This milestone is key for providing broader access to the token and supporting the future growth of TikDogs.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 12,
      title: "How does TikDogs give back to the community?",
      data:<div>  
        <p> TikDogs is committed to supporting dog welfare worldwide. A percentage of the platform’s revenue (to be established) will be donated to dog charities globally, helping provide resources, care, and support to dogs in need. By using TikDogs, users not only enjoy a fun and rewarding experience but also contribute to meaningful charitable efforts, making a positive impact in the lives of dogs everywhere.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 13,
      title: "Are there any risks involved with TIKS and TikDogs?",
      data:<div>  
        <p> As with any cryptocurrency or MLM system, there are inherent risks. Market prices can be volatile, and the demand-based price increase mechanism does not guarantee profit. Additionally, the MLM model requires active participation, and rewards are not guaranteed. We encourage all users to research and understand the risks before investing.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 14,
      title: "How do I start sharing content on TikDogs?",
      data:<div>  
        <p> Once you hold TIKS tokens, you’ll gain access to the TikDogs app on iOS or Android. Download the app, create a profile, upload short videos of your dog, and start engaging with the community. You’ll automatically earn rewards for every like, comment, or share your posts receive.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 15,
      title: "What are the benefits of holding TIKS long-term?",
      data:<div>  
        <p> Long-term holders benefit from TIKS’ demand-based price-increase mechanism and can maximize their earnings on TikDogs and through the MLM referral system. If you think of TIKS as an early opportunity similar to buying shares in Amazon or Apple, you can see the potential growth. Just as early investors in these companies saw exponential returns, early TIKS adopters stand to benefit as TikDogs gains popularity. Additionally, reaching the milestone of 40,000 wallets will open up access to TIKS on major exchanges, enhancing liquidity and growth potential.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 16,
      title: "Where can I get more information or support?",
      data:<div>  
        <p> Our community is active on social media channels, and our support team is available to assist with questions. Join our Discord, Telegram, or Twitter for updates and support from our team and community members.</p>
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
