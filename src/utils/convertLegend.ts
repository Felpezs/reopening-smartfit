import requiredMask from "@/assets/images/required-mask.png";
import recommendedMask from "@/assets/images/recommended-mask.png";
import recommendedTowel from "@/assets/images/recommended-towel.png";
import requiredTowel from "@/assets/images/required-towel.png";
import forbiddenFountain from "@/assets/images/forbidden-fountain.png";
import partialFountain from "@/assets/images/partial-fountain.png";
import partialLockerRoom from "@/assets/images/partial-lockerroom.png";
import forbiddenLockerRoom from "@/assets/images/forbidden-lockerroom.png";
import requiredLockerRoom from "@/assets/images/required-lockerroom.png";
import { LegendImages } from "@/types/Legend";

const legends: LegendImages = {
  lockerRoom: {
    allowed: requiredLockerRoom,
    closed: forbiddenLockerRoom,
    partial: partialLockerRoom,
  },
  towel: {
    required: requiredTowel,
    recommended: recommendedTowel,
  },
  mask: {
    required: requiredMask,
    recommended: recommendedMask,
  },
  fountain: {
    partial: partialFountain,
    not_allowed: forbiddenFountain,
  },
};

const convertLegendToImage = <
  K1 extends keyof LegendImages,
  K2 extends keyof (typeof legends)[K1],
>(
  legend: K1,
  type: K2,
) => {
  return legends[legend][type];
};

export default convertLegendToImage;
