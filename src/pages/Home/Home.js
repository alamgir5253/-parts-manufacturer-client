import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummary/BusinessSummery';
import NewArrivel from './NewArrivel/NewArrivel';
import Parts from './Parts/Parts';
import SpecialSection from './SpecialSection/SpecialSection';
import UserReview from './UserReview/UserReview';

const Home = () => {
  return (
    <div>
     <Banner />
     <BusinessSummery />
     <SpecialSection />
     <NewArrivel />
     <Parts />
     <UserReview />
    </div>
  );
};

export default Home;