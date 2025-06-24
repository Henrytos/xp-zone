"use client";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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
    {
      label: "Horror",
      value: "horror",
      selected: false,
    },
  ]);

  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "The Last Of Us 2",
      description: "80 jogos disponíveis na sua cidade",
      imageUrl: "/images/background-carrousel.png",
      buttonText: "Ver mais",
      buttonColor: "secondary",
      buttonLink: "",
      selected: true,
    },
    {
      id: 2,
      title: "Ghost of Tsushima",
      description: "Explore a beautiful open world",
      imageUrl: "/images/background-carrousel.png",
      buttonText: "Ver mais",
      buttonColor: "secondary",
      buttonLink: "",
      selected: false,
    },
    {
      id: 3,
      title: "The Witcher 3",
      description: "An epic RPG adventure",
      imageUrl: "/images/background-carrousel.png",
      buttonText: "Ver mais",
      buttonColor: "secondary",
      buttonLink: "",
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

  const handleClickSlide = (index: number) => {
    setSlides((currentSlides) =>
      currentSlides.map((slide, i) => ({
        ...slide,
        selected: i === index,
      }))
    );
  };

  return (
    <>
      <main className="min-h-screen h-auto w-full bg-primary flex flex-col items-center">
        <section className="w-full bg-game-start min-h-screen ">
          <div className="z-50 absolute top-0 w-full ">
            <Header />
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
            <div className=" w-[80%] m-auto h-[480px] bg-radiant-linear p-0.5 rounded-lg relative">
              {slides
                .filter((slide) => slide.selected)
                .map((slide) => (
                  <div className="w-full h-full relative" key={slide.id}>
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-1/2 left-[120px] transform -translate-y-1/2 text-left text-white space-y-8">
                      <div className="space-y-6">
                        <span>
                          <Title color="gradient" font="orbitron">
                            Jogue hoje mesmo{" "}
                          </Title>
                          <Title>{slide.title}</Title>
                        </span>
                        <Text>{slide.description}</Text>

                        <Button.Root color="secondary">
                          {slide.buttonText}
                        </Button.Root>
                      </div>
                      <span className="w-60 h-1 flex gap-2 group">
                        {Array.from({
                          length: slides.length,
                        }).map((_, index) => {
                          const isActive =
                            index ===
                            slides.findIndex((slide) => slide.selected);
                          return (
                            <span
                              key={index}
                              className={`${
                                isActive
                                  ? `w-2/${slides.length + 1}`
                                  : `w-1/${slides.length + 1}`
                              } h-1 rounded bg-white cursor-pointer transition-all duration-200 ${
                                isActive && "group-hover:brightness-50"
                              } group-hover:w-2/4 ${
                                isActive ? "brightness-100" : "brightness-50"
                              } hover:brightness-100 hover:w-2/${
                                slides.length + 1
                              }
                              `}
                              onClick={() => {
                                handleClickSlide(index);
                              }}
                            ></span>
                          );
                        })}
                      </span>
                    </div>
                  </div>
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
