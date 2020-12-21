import React, { useState } from "react";
import styles from "./Favorites.module.css";
import Auxiliary from "../../hoc/Auxiliary";
import { BrowserRouter as Router, Link } from "react-router-dom";

const genre = {
  PunkRock: [
    {
      band: "Green Day",
      song: "Good Radiance (Time Of Your Life)",
      play:
        "https://open.spotify.com/search/green%20day%20time%20of%20your%20life"
    },
    {
      band: "Blink 182",
      song: "I Miss You",
      play: "https://open.spotify.com/search/blink%20182%20i%20miss%20you"
    },
    {
      band: "BrainCoats",
      song: "L-X",
      play: "https://open.spotify.com/search/braincoats%20l-x"
    }
  ],
  Rap: [
    {
      band: "TMG",
      song: "Walkman",
      play: "https://www.youtube.com/watch?v=QqBzotBqV4g"
    },
    {
      band: "Noel Miller",
      song: "LoopHole",
      play: "https://www.youtube.com/watch?v=G7kep9440qo"
    },
    {
      band: "Eminem",
      song: "Space Bound",
      play: "https://open.spotify.com/search/eminem%20space%20bound"
    }
  ],
  Alternative: [
    {
      band: "SoundGarden",
      song: "BlackHoleSun",
      play: "https://open.spotify.com/search/black%20hole%20sun"
    },
    {
      band: "Slipknot",
      song: "Duality",
      play: "https://open.spotify.com/search/slipknot%20duality"
    },
    {
      band: "AudioSlave",
      song: "Like A Stone",
      play: "https://open.spotify.com/search/audioslave%20like%20a%20stone"
    }
  ]
};

const Favorite = () => {
  const [selectedGenre, setSelectedGenre] = useState("Alternative");

  const selectGenreHandler = (yourGenre) => {
    setSelectedGenre(yourGenre);
  };

  return (
    <Auxiliary>
      <div className={styles.Favorite}>
        {Object.keys(genre).map((yourGenre) => {
          return (
            <button onClick={() => selectGenreHandler(yourGenre)}>
              {yourGenre}
            </button>
          );
        })}
      </div>

      <div className={styles.displayFavorite}>
        {genre[selectedGenre].map((artist) => {
          return (
            <div className={styles.favoriteContainer}>
              <h2> {artist.band} </h2>
              <p> {artist.song} </p>
              <p>
                {" "}
                <a href={artist.play}>Play</a>
              </p>
            </div>
          );
        })}
      </div>
    </Auxiliary>
  );
};

export default Favorite;
