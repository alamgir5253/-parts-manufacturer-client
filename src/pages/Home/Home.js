import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummary/BusinessSummery';
import NewArrivel from './NewArrivel/NewArrivel';
import SpecialSection from './SpecialSection/SpecialSection';

const Home = () => {
  return (
    <div>
     <Banner />
     <BusinessSummery />
     <SpecialSection />
     <NewArrivel />
    </div>
  );
};

export default Home;