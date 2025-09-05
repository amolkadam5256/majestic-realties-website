import React from 'react';
import HeroSection from '../components/HomeComp/HeroSection';
import Properties from '../components/HomeComp/Properties';
import SubCards from '../components/HomeComp/SubCards';
import Testimonials from '../components/HomeComp/Testimonials';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';

const Home = () => {
  return (
    <div className="w-full pt-16 ">
      <HeroSection />
      <Properties />
      <SubCards />
      <Testimonials/>
      <BottomSection />
      <CallToAction />

    </div>
  );
};

export default Home;
``
