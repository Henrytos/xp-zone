import { useState } from "react";

export const useFilterGenre = () => {
    const [filterGenres, setFilterGenres] = useState([
        {
          label: "Action",
          value: "action",
          selected: true,
        },
        {
          label: "Adventure",
          value: "adventure",
          selected: false,
        },
        {
          label: "Puzzle",
          value: "puzzle",
          selected: false,
        },
        {
          label: "Strategy",
          value: "strategy",
          selected: false,
        },
        {
          label: "RPG",
          value: "rpg",
          selected: false,
        },
        {
          label: "Simulation",
          value: "simulation",
          selected: false,
        },
        {
          label: "Sports",
          value: "sports",
          selected: false,
        },
        {
          label: "Racing",
          value: "racing",
          selected: false,
        },
        {
          label: "Shooter",
          value: "shooter",
          selected: false,
        },
        {
          label: "Horror",
          value: "horror",
          selected: false,
        },
      ]);
    
      const handleClickGenre = (value: string) => {
        const genre = filterGenres.find((genre) => genre.value === value);
        const genreSelected = genre?.selected;
    
        if (genreSelected) return;
    
        setFilterGenres((currentGenres) =>
          currentGenres.map((genre) =>
            genre.value === value
              ? { ...genre, selected: !genre.selected }
              : { ...genre, selected: false }
          )
        );
      };

      return { filterGenres, setFilterGenres, handleClickGenre };
}