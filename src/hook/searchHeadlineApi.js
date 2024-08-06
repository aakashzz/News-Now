import axios from "axios";

export const searchHeadlineApi = async (searchInput) => {
   try {
      const searchHeadline = await axios(
        `https://newsapi.org/v2/top-headlines?q=${searchInput}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );

      return searchHeadline.data;
   } catch (error) {
      console.error(error);
   }
};
