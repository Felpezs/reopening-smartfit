import { Legend as LegendProps } from "@/types/Legend";

const Legend = ({ image, status }: LegendProps) => {
  return (
    <>
      <img src={image} className="w-16  h-16  mx-auto mb-2" />
      <span className="text-black font-normal block text-center">{status}</span>
    </>
  );
};

export default Legend;
