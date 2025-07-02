"use client";

import { useCarrousel } from "@/hooks/use-carrousel";
import Image from "next/image";
import { Title } from "./title";
import { Button } from "./button";
import { Text } from "./text";
import clsx from "clsx";

export function CarrouselGame() {
  const { setSlides, slides } = useCarrousel();

  const handleClickSlide = (index: number) => {
    setSlides((currentSlides) =>
      currentSlides.map((slide, i) => ({
        ...slide,
        selected: i === index,
      }))
    );
  };
  return (
    <div className=" w-[80%] m-auto h-[480px] bg-radiant-linear p-0.5 rounded-lg relative ">
      {slides
        .filter((slide) => slide.selected)
        .map((slide) => (
          <div
            className="w-full h-full relative transition-opacity duration-700 opacity-0 animate-fadeIn"
            key={slide.id}
          >
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

                <Button.Root color="secondary">{slide.buttonText}</Button.Root>
              </div>
              <span className="w-60 h-1 flex gap-2 group transition-all">
                {slides.map((slideItem, index) => {
                  const isActive =
                    index === slides.findIndex((s) => s.selected);

                  return (
                    <span
                      key={index}
                      onClick={() => handleClickSlide(index)}
                      className={clsx(
                        "h-1 rounded bg-white cursor-pointer transition-all duration-200",
                        {
                          "flex-[2] brightness-100 group-hover:brightness-50":
                            isActive,
                          "flex-1 brightness-50 hover:brightness-100 hover:flex-[2]":
                            !isActive,
                        }
                      )}
                    />
                  );
                })}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
