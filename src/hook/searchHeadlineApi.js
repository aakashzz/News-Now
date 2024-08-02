import axios from "axios";
import configur from "@/services/configur/configur";
export const searchHeadlineApi = async (searchInput) => {
   try {
      const searchHeadline = await axios(
        `https://newsapi.org/v2/top-headlines?q=${searchInput}&apiKey=${configur.newsApiKey}`
      );

      return searchHeadline;
   } catch (error) {
      console.error(error);
   }
};
