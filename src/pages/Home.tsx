import * as React from 'react';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/core';
import Navigation from '../components/oraganisms/Navigation';
import MainContents from '../components/oraganisms/MainContents';
import Hero from '../components/oraganisms/Hero';
import CarouselContainer from '../components/modules/CarouselContainer';
import PostsList from '../components/modules/PostsList';

const Home = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <CarouselContainer />
      <PostsList />
    </Layout>
  );
};

export default Home;
