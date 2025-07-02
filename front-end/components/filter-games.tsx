"use client";
import { useFilterGenre } from "@/hooks/use-filter-genre";
import { Badge } from "./ui/badge";

export function FilterGames() {
  const { filterGenres, handleClickGenre } = useFilterGenre();

  return (
    <div className="flex gap-7 items-center mt-24 py-5 ml-[10%] ">
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
  );
}
