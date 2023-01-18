import { createClient } from "contentful";
const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

export const getAllEntries = async (contentType) => {
    try {
      const response = await client.getEntries({
        content_type: contentType,
      });
      let responseData = response.items;
      return responseData;
    } catch (error) {
      console.log(error);
    }
  };