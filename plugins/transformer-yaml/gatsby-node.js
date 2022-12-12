// Mostly copied from official Gatsby-Transformer-yaml
// https://raw.githubusercontent.com/gatsbyjs/gatsby/master/packages/gatsby-transformer-yaml/src/gatsby-node.js

const jsYaml = require(`js-yaml`);
const _ = require(`lodash`);
const path = require(`path`);
const remark = require("remark");
const remarkHtml = require("remark-html");

exports.shouldOnCreateNode = ({ node }) => {
  return node.internal.mediaType === `text/yaml`;
};

exports.onCreateNode = async ({ node, actions, loadNodeContent, createNodeId, createContentDigest }, pluginOptions) => {
  const MardownType = new jsYaml.Type('!markdown', {
    kind: 'scalar',
    construct: (content) => {
      const processed = String(remark().use(remarkHtml).processSync(content));
      return processed;
    }
  });
  function getType({ node, object, isArray }) {
    if (pluginOptions && _.isFunction(pluginOptions.typeName)) {
      return pluginOptions.typeName({ node, object, isArray });
    } else if (pluginOptions && _.isString(pluginOptions.typeName)) {
      return pluginOptions.typeName;
    } else if (node.internal.type !== `File`) {
      return _.upperFirst(_.camelCase(`${node.internal.type} Yaml`));
    } else if (isArray) {
      return _.upperFirst(_.camelCase(`${node.name} Yaml`));
    } else {
      return _.upperFirst(_.camelCase(`${path.basename(node.dir)} Yaml`));
    }
  }

  async function transformObject(obj, id, type) {
    const yamlNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type
      }
    };
    if (obj.id) {
      yamlNode[`yamlId`] = obj.id;
    }
    console.log(yamlNode)
    createNode(yamlNode);
    createParentChildLink({ parent: node, child: yamlNode });
  }

  const { createNode, createParentChildLink } = actions;

  const content = await loadNodeContent(node);


  const schema = jsYaml.Schema.create(jsYaml.DEFAULT_SCHEMA, [MardownType]);
  const parsedContent = jsYaml.load(content, { schema });

  if (_.isArray(parsedContent)) {
    parsedContent.forEach((obj, i) => {
      transformObject(obj, createNodeId(`${node.id} [${i}] >>> YAML`), getType({ node, object: obj, isArray: true }));
    });
  } else if (_.isPlainObject(parsedContent)) {
    transformObject(
      parsedContent,
      createNodeId(`${node.id} >>> YAML`),
      getType({ node, object: parsedContent, isArray: false })
    );
  }
};
