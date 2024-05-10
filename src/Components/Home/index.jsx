import React from 'react';
import { Header } from '../Layout/Header';
import { HeroSection } from './HeroSection';
import { LocationSection } from './LocationSection';
import { Footer } from '../Layout/Footer';

export const Home = () => {
  return (
    <>
      <div className="bg-grad">
        <Header />
        <HeroSection />
      </div>
      <LocationSection />
      <Footer />
    </>
  );
};
