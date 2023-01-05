import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

const Infopage: React.FC<PageProps<Queries.InfopageQuery>> = ({ data }) => {
  return (
    <Layout>
      <>
        <h1 className="text-7xl text-green">{data.infopage!.heading}</h1>
        <hr className="my-8 h-2 bg-green" />
        <h1 className="text-5xl text-green">{data.infopage!.subheading}</h1>
        <div className="my-8 markdown" dangerouslySetInnerHTML={{ __html: data.infopage!.body! }} />
        {data.infopage!.sections &&
          data.infopage!.sections.map((section) => section && <Section type="NORMAL" {...section} />)}
      </>
    </Layout>
  );
};

export const query = graphql`
  query Infopage($id: String) {
    infopage(id: { eq: $id }) {
      heading
      subheading
      slug
      body

      link {
        text
        path
      }

      sections {
        heading
        subheading
        body
        link {
          text
          path
        }
      }
    }
  }
`;

export default Infopage;
