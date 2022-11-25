import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import HeroSection from '../components/hero';
import Section from '../components/section';
import Quote from '../components/quote';
import Card from '../components/card'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="divide-y-8 divide-green">
        <HeroSection />
        <Section alternate />
        <Section />
        <Section alternate />
      </div>
      <Quote />
      <Card />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Miljøhack 2023</title>;
