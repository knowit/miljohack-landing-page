import * as React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import HeroSection from '../components/hero';
import Section from '../components/section';
import Quote from '../components/quote';
import Card from '../components/card';

const IndexPage: React.FC<PageProps<Queries.FrontpageQuery>> = ({ data }) => {
  const heroSections = data.frontpage?.sections?.filter((s) => s?.type === 'HERO') ?? [];
  const sections = data.frontpage?.sections?.filter((s) => s?.type === 'NORMAL') ?? [];

  if (heroSections.length != 1) {
    console.warn('Invalid Hero Props: ', heroSections);
  }

  return (
    <Layout>
      <div className="divide-y-8 divide-green">
        {heroSections
          .filter((heroProps) => !!heroProps)
          .map((heroProps) => heroProps && <HeroSection {...heroProps} />)}
        {sections
          .filter((sectionProps) => !!sectionProps)
          .map((sectionProps, i) => sectionProps && <Section alternate={Boolean(i % 2)} {...sectionProps} />)}
      </div>
      { data.frontpage?.quote && <Quote text={data.frontpage.quote} />}
      { data.frontpage?.cards?.map((cardProps) => cardProps && <Card {...cardProps} />) }
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Miljøhack 2023</title>;

export const query = graphql`
  query Frontpage {
    frontpage {
      sections {
        heading
        subheading
        body
        link {
          text
          path
        }
        type
      }

      cards {
        body
        link {
          text
          path
        }
      }

      quote
    }
  }
`;
