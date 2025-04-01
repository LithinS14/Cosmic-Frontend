import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import NewDrops from '../components/home/NewDrops';
import Accessories from '../components/home/Accessories';
import Perfumes from '../components/home/Perfumes';
import ExploreSection from '../components/home/ExploreSection';
import Community from '../components/home/Community';
import ExperienceCenter from '../components/home/ExperienceCenter';
import PhotoCollage from '../components/home/PhotoCollage';
import '../styles/pages/home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-page"
    >
      <Hero />
      <NewDrops />
      <Accessories />
      <Perfumes />
      <ExploreSection />
      <ExperienceCenter />
      <PhotoCollage />
      <Community />
    </motion.main>
  );
};

export default Home;