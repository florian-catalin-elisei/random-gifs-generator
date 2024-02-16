import "./Gifs.css";

export const Gifs = ({ gifs }) => {
  return (
    <div className="Gifs">
      <h1>Trending GIFs</h1>

      <div className="Gifs-gifs">
        {gifs.map((gif, id) => (
          <img className="Gifs-images" src={gif} key={id} alt="trending gifs" />
        ))}
      </div>
    </div>
  );
};
