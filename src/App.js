import { useState, useEffect } from "react";
import { Gifs } from "./components/Gifs/Gifs";
import { getTrendingGifs } from "./api/getTrendingGifs";
import "./App.css";

export const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      const trendingGifs = await getTrendingGifs();
      setGifs(trendingGifs);
    };

    fetchTrendingGifs();
  }, []);

  return <Gifs gifs={gifs} />;
};
