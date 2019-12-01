import { useStaticQuery, graphql } from "gatsby";
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            Title
            Description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
