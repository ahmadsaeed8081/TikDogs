import React from 'react'
import Button from '../Button'
import { FaArrowRight } from 'react-icons/fa6'
import VideoSlider from "../videoSlider";

// import EBM_Avenue from '../EBM_avenue'
const About = () => {


  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/whitepaper.pdf");
    window.open(pdfUrl, "_blank");
  };


  return (
    <div  id='aboutSection'  className='  tw-relative tw-py-20  tw-w-full tw-h-auto'>
          
      <div className='container'>
        <div className='row  sm:tw-text-start  tw-text-center g-5 tw-items-center'>
            <div className='col-lg-7 col-md-12'>
              <span className=' tw-text-[#E5B766] tw-font-semibold tw-text-[18px] sm:tw-justify-start tw-justify-center tw-flex tw-items-center tw-gap-4'>  <p className='  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-1 tw-bg-[#456DA7]'></p> Everyone encounters difficulties</span>
            <h1 className=" tw-text-[#E5B766]  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            About us
          
            </h1>
            <p className=" tw-text-black  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 tw-text-xl">
            At TIKDOGS, we harness the power of AI and blockchain to revolutionize pet ownership. Our platform enables dogs to earn “TIKS” through engaging content, ensuring transparent rewards. By connecting owners and creating a vibrant community, we empower pets to contribute to their happiness in a fun, secure environment!

</p>
        
           
            {/* <div className=' tw-flex tw-flex-wrap    sm:tw-justify-start tw-justify-center tw-w-full sm:tw-gap-6 tw-gap-3 tw-items-center'>
                <div className=' tw-text-center '>
                    <h1 className=' tw-font-zen-dots   sm:tw-text-3xl tw-text-[18px] tw-text-[#E5B766]'>10M+</h1>
                    <p className=' sm:tw-text-[14px] tw-text-[9px] tw-text-[#E5B766] tw-font-medium'>People Reched</p>
                </div>
                <div className=' sm:tw-h-18 tw-h-12 tw-w-[2px] tw-bg-[#456DA7]'>

                </div>
                <div className='  tw-text-center'>
                    <h1 className=' sm:tw-text-3xl  tw-text-[18px] tw-font-zen-dots tw-text-[#E5B766]'>12M+</h1>
                    <p className=' sm:tw-text-[14px] tw-text-[9px] tw-text-[#E5B766] tw-font-medium'>Social Media Engaement</p>
                </div>
                <div className=' sm:tw-h-18 tw-h-12 tw-w-[2px] tw-bg-[#456DA7]'>

                </div>
                <div className='  tw-text-center'>
                    <h1 className=' sm:tw-text-3xl  tw-text-[18px] tw-font-zen-dots tw-text-[#E5B766]'>8M+</h1>
                    <p className=' sm:tw-text-[14px] tw-text-[9px] tw-text-[#E5B766] tw-font-medium'>Number of Media Mention</p>
                </div>
              
            </div> */}
            <Button
                   onClick={()=>openPdfInNewTab()}
                rIcons={<FaArrowRight color="#fff" />}
                label={"White Paper"}
                className={"  tw-mt-7"}
                
              />




            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='row'>
                <div className="col-md-12 tw-mx-auto">
                   <div className=' tw-relative '> 
                    {/* <img src={require('../../assets/images/about1.png')}   className=' tw-w-full' alt='' /> */}
                     <VideoSlider/>

                   
                   </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='row'>
                <div className="col-md-10 tw-mx-auto">
                  <img src={require('../../assets/images/vision1.png')} alt='' />
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
            
            <h1 className=" tw-text-[#E5B766]  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            Our Vision
          
            </h1>
            <p className=" tw-text-black  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 tw-text-xl">
            At TIKDOGS, we envision a trusted platform that prioritizes transparency and community engagement. We aim to empower pet owners and their furry friends through innovative technology, fostering a safe environment where dogs can showcase their talents, earn rewards, and enhance the joy of pet ownership for everyone!

</p>
        
           
            </div>




           

            <div className='col-lg-6 col-md-12'>
            
            <h1 className=" tw-text-[#E5B766]  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            Our Mission
          
            </h1>
            <p className=" tw-text-black  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 tw-text-xl">
            At TIKDOGS, our mission is to empower dog owners to achieve financial success while supporting charitable causes. By enabling pets to earn “TIKS” through their creativity—exchangeable for cash—we create opportunities for owners to grow wealth and thrive, ensuring a prosperous future for both pets and their dedicated humans.

 </p>
        
           
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='row'>
                <div className="col-md-10 tw-mx-auto">
                  <img src={require('../../assets/images/mission1.png')} alt='' />
                </div>
              </div>
            </div>
           



        </div>

         
      </div>
     
      {/* <EBM_Avenue/> */}
     
    </div>
  )
}

export default About