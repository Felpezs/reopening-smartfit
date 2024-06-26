import legendItems from "@/data/legendItems";
import LegendItems from "./LegendItems";

const LegendContainer = () => {
  return (
    <div className="bg-light-grey bg-opacity-10 flex justify-around p-4 flex-wrap gap-5">
      {legendItems.map((legendItem) => (
        <div key={legendItem.title}>
          <h2 className="text-black font-black text-center mb-2">
            {legendItem.title}
          </h2>
          <LegendItems legends={legendItem.legends} />
        </div>
      ))}
    </div>
  );
};

export default LegendContainer;
