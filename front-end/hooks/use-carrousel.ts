import { useState } from "react";

export const useCarrousel = () => {
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

      return { slides, setSlides };
} 