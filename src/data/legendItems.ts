import requiredMask from "@/assets/images/required-mask.png";
import recommendedMask from "@/assets/images/recommended-mask.png";
import recommendedTowel from "@/assets/images/recommended-towel.png";
import requiredTowel from "@/assets/images/required-towel.png";
import forbiddenFountain from "@/assets/images/forbidden-fountain.png";
import partialFountain from "@/assets/images/partial-fountain.png";
import partialLockerRoom from "@/assets/images/partial-lockerroom.png";
import forbiddenLockerRoom from "@/assets/images/forbidden-lockerroom.png";
import requiredLockerRoom from "@/assets/images/required-lockerroom.png";
import { Legend } from "@/types/Legend";

type LegendItems = {
  title: string;
  legends: Legend[];
};

const legendItems: LegendItems[] = [
  {
    title: "Máscara",
    legends: [
      {
        image: requiredMask,
        status: "Obrigatório",
      },
      {
        image: recommendedMask,
        status: "Recomendado",
      },
    ],
  },
  {
    title: "Toalha",
    legends: [
      {
        image: requiredTowel,
        status: "Obrigatório",
      },
      {
        image: recommendedTowel,
        status: "Recomendado",
      },
    ],
  },
  {
    title: "Bebedouro",
    legends: [
      {
        image: partialFountain,
        status: "Parcial",
      },
      {
        image: forbiddenFountain,
        status: "Proibido",
      },
    ],
  },
  {
    title: "Vestiários",
    legends: [
      {
        image: requiredLockerRoom,
        status: "Liberado",
      },
      {
        image: partialLockerRoom,
        status: "Parcial",
      },
      {
        image: forbiddenLockerRoom,
        status: "Fechado",
      },
    ],
  },
];

export default legendItems;
