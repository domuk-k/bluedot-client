import * as React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/oraganisms/Navigation';
import Hero from '../components/oraganisms/Hero';
import UserCarousel from '../components/modules/UserCarousel';
import PostsList from '../components/modules/PostsList';

const Home = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <UserCarousel />
      <PostsList />
    </Layout>
  );
};

export default Home;
