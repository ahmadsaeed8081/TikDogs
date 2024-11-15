import React from 'react';
import Hero from '../../components/hero';
import Brands from '../../components/Brands';
import Footer from '../../components/footer';
import Team from '../../components/Team';
import FAQ from '../../components/FAQ';
import Tokenomics from '../../components/tokenomics';
import RoadMap from '../../components/RoadMap';
import About from '../../components/About/About';
import HowToBuy from '../../components/HowToBuy';
const Home = (props) => {
  return (
    <div className=' tw-overflow-x-hidden'>
      <Hero previous_earning1={props.previous_earning1} previous_earning2={props.previous_earning2} previous_earning3={props.previous_earning3} previous_earning4={props.previous_earning4} previous_earning5={props.previous_earning5} l1_statement={props.l1_statement} l2_statement={props.l2_statement} l3_statement={props.l3_statement} l4_statement={props.l4_statement} l5_statement={props.l5_statement} minPurchase_matic={props.minPurchase_matic} min_purchase={props.min_purchase} refEarning={props.refEarning} refCount={props.refCount} isEmb={props.isEmb} isCso={props.isCso} Emb_Earning={props.Emb_Earning} Cso_Earning={props.Cso_Earning} launch={props.launch} totalInvestment={props.totalInvestment} total_raised={props.total_raised} USDCBalance={props.USDCBalance}  NextStagePrice={props.NextStagePrice} test={props.test} MATICBalance={props.MATICBalance} EBMBalance={props.EBMBalance} USDTBalance={props.USDTBalance} curr_time={props.curr_time} curr_stage={props.curr_stage} curr_StageTime={props.curr_StageTime}  curr_presale={props.curr_presale} perTokenIn_Matic={props.perTokenIn_Matic}  />
    <div className=' tw-overflow-x-hidden'>
    <Brands/>
    </div>
      
      <About/>
      <Tokenomics/>
      <RoadMap/>
      <Team/>
      <HowToBuy/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;