import { CreateSchemaCustomizationArgs } from 'gatsby';

export const createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  // Define som common types
  const CommonTypes = `
    type Link {
      text: String!
      path: String
    }

    type Section {
      heading: String!
      subheading: String
      body: String!
      link: Link
      type: String!
    }
  `;

  const FrontpageType = `
    type Frontpage implements Node {
      sections: [Section]!
    }
  `;

  const FrontpageSectionsType = `
    type FrontpageSections {
      link: Link
    }
  `;

  const FrontpageCardsType = `
    type FrontpageCards {
      link: Link
    }
  `;

  const InfopageType = `
    type Infopage implements Node {
      heading: String!
      subheading: String!
      body: String!
      link: Link
      sections: [Section]
    }
  `;

  createTypes([CommonTypes, FrontpageType, FrontpageCardsType, InfopageType]);
};
