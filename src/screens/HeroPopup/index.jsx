import React from "react";
import { MdClose } from "react-icons/md";
import Modal from "../../components/myModal/Modal";
import { useSwitchChain, useAccount, useDisconnect } from "wagmi";
import moment from "moment";
import { Link } from "react-router-dom";
const HeroPopup = ({previous_earning, data, isModalOpen, setIsModalOpen, closeModal }) => {

  const { address, isConnecting ,isDisconnected} = useAccount()


  const count1 = (time) => {
    const now = new Date(time*1000);
  
    const t=moment(now).format('D MMM YYYY');
    return t;
    
  };


  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="tw-rounded-md md:tw-w-[60%] tw-w-[100%] tw-bg-[#fff]"
      >
        <div className="">
          <div className="tw-flex tw-justify-between tw-pt-5 tw-p-4 tw-items-center">
            <div></div>
           
         
          <h1 className="tw-capitalize tw-font-poppins tw-text-center tw-font-bold tw-text-xl">
            Earning Statement
          </h1>
          {/* <div  className=" tw-w-10 tw-flex tw-justify-center tw-items-center tw-h-10 tw-bg-[red] tw-rounded-full"> */}
          <MdClose
              onClick={() => setIsModalOpen(false)}
              size={25}
              className="tw-cursor-pointer tw-text-black"
            />
          {/* </div> */}
          </div>
          
          <div className="tw-bg-white tw-mb-4 tw-mt-4 ">
            <form>
            <div className=" tw-overflow-x-auto " >
          <table className="tw-min-w-full tw-mb-0">
          <thead className="tw-border-t tw-text-center tw-border-b tw-border-[red] tw-bg-primary">
            <tr className="tw-rounded-lg tw-whitespace-nowrap">
              <th
                scope="col"
                className="tw-text-md tw-text-[red] tw-font-bold tw-px-6 tw-py-4"
              >
                Sr no
              </th>
              <th
                scope="col"
                className="tw-text-md tw-text-[red] tw-font-bold tw-px-6 tw-py-4"
              >
                Buyer
              </th>
              <th
                scope="col"
                className="tw-text-md tw-text-[red] tw-font-bold tw-px-6 tw-py-4"
              >
                Amount
              </th>
              <th
                scope="col"
                className="tw-text-md tw-text-[red] tw-font-bold tw-px-6 tw-py-4"
              >
                Date
              </th>
              <th
                scope="col"
                className="tw-text-md tw-text-[red] tw-font-bold tw-px-6 tw-py-4"
              >
                My Reward
              </th>
            </tr>
          </thead>
          <tbody>
            <>
          {Number(previous_earning ? previous_earning:0)>0 ? (

          
            <tr className="bg-white border-t rounded-md">
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
              Previous Earning
              </span>
            </td>
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                ***
              </span>
            </td>
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                ***
              </span>
            </td>
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                ***
              </span>
            </td>
            <td   className="align-middle  cursor-pointer text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span  className="text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline tw-font-poppins bg-green-200 rounded-full">
         
              {Number(previous_earning ? previous_earning:0)/10**18}
              </span>
            </td>
          </tr>
):(null)}

          
          {data? data.map((item, index)=>(

            <tr className="bg-white border-t rounded-md">
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                {Number(index)+1}
              </span>
            </td>
            
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                          <Link to={"https://polygonscan.com/address/" + item[0]} target="_blank">

              {item[0].slice(0,4)+"..."+item[0].slice(39,42)}
                          </Link>

              </span>
            </td>



            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
              {Number(item[1])/10**18} DAI
              </span>
            </td>
            <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
              {count1(Number(item[3]))}
              </span>
            </td>
            <td   className="align-middle  cursor-pointer text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
              <span  className="text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline tw-font-poppins bg-green-200 rounded-full">
         
              {Number(item[2])/10**18} DAI
              </span>


            </td>
          </tr>


          )):null}
              
              


            </>
          </tbody>
        </table>
        </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HeroPopup;
