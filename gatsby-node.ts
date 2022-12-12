import { CreateSchemaCustomizationArgs } from 'gatsby';

export const createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  // Explicitly define path such that a single null can exist
  const FrontpageCardsLinkType = `
    type FrontpageCardsLink implements Node {
      path: String
    }
  `;
  createTypes([FrontpageCardsLinkType]);
};
