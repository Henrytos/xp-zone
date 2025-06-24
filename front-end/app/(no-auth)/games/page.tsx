"use client";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function GamesPage() {
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

  return (
    <>
      <main className="min-h-screen h-auto w-full bg-primary flex flex-col items-center">
        <section className="w-full bg-game-start min-h-screen ">
          <div className="z-50 absolute top-0 w-full ">
            <Header />
            <div className="flex gap-7 items-center mt-24 py-5 ml-[10%]">
              {filterGenres.map((genre) => (
                <Badge
                  variant={genre.selected ? "active" : "default"}
                  onClick={() => {
                    handleClickGenre(genre.value);
                  }}
                  key={genre.value}
                >
                  {genre.label}
                </Badge>
              ))}
            </div>
          </div>
          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-right"></div>
          <div className="bg-shadow-left"></div>
          <div className="bg-shadow-top"></div>
        </section>
      </main>
    </>
  );
}
