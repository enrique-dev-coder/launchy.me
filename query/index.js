import { request, gql } from 'graphql-request';

const graphQLAPI = 'https://blog.launchy.me/graphql';

export const getCategoryData = async () => {
  const query = gql`
    query NewQuery {
      categories {
        edges {
          node {
            categoryId
            name
          }
        }
      }
    }
  `;
  const result = await request(graphQLAPI, query);
  return result.categories.edges;
};

export const getPostsData = async () => {
  const query = gql`
    query NewQuery {
      posts {
        edges {
          node {
            id
            author {
              node {
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  categoryId
                  name
                }
              }
            }
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            link
            title
          }
        }
      }
    }
  `;
  const result = await request(graphQLAPI, query);
  return result.posts.edges;
};
