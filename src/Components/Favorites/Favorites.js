import React, { useState } from "react";
import styles from "./Favorites.module.css";
import Auxiliary from "../../hoc/Auxiliary";
import { BrowserRouter as Router, Link } from "react-router-dom";

const genre = {
  PunkRock: [
    {
      band: "Green Day",
      song: "Good Radiance (Time Of Your Life)"
    },
    {
      band: "Blink 182",
      song: "I Miss You"
    },
    {
      band: "BrainCoats",
      song: "L-X"
    }
  ],
  Rap: [
    { band: "TMG", song: "Walkman" },
    { band: "Noel Miller", song: "LoopHole" },
    { band: "Eminem", song: "Space Bound" }
  ],
  Alternative: [
    { band: "SoundGarden", song: "BlackHoleSun" },
    { band: "Slipknot", song: "Duality" },
    { band: "AudioSlave", song: "Like A Stone" }
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
            </div>
          );
        })}
      </div>
    </Auxiliary>
  );
};

export default Favorite;
