import axios from "axios";
import { useEffect } from "react";


let isFetching = false;

const FetchHashnodeBlogs = async () => {
    // if (isFetching) return;  // Prevents multiple calls
    // isFetching = true;


    const query = `
    query {
      publication(host: "blog.aashesh.cloud") {
        posts(first: 5) {
          edges {
            node {
              id
              title
              brief
              coverImage {
                url
              }
              slug
              publishedAt
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post('https://gql.hashnode.com/', { query });

   

    const posts = response.data.data.publication.posts.edges.map((edge) => edge.node);

    console.log(posts); // ✅ Moved before return
    return posts;
    
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
    return [];
  }
};


export default FetchHashnodeBlogs;

