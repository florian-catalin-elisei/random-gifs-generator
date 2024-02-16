import axios from "axios";

const trendingGifsApi = "https://api.giphy.com/v1/gifs/trending";
const trendingGifsApiKey = process.env.REACT_APP_GIFS_API_KEY;

const instance = axios.create({
  baseURL: trendingGifsApi,
  params: { api_key: trendingGifsApiKey },
});

export const getTrendingGifs = async () => {
  try {
    const { data } = await instance.get();
    const urls = data.data.map((url) => url.images.downsized_medium.url);

    return urls;
  } catch (error) {
    throw new Error(`Failed to get trending GIFs: ${error.message}`);
  }
};
