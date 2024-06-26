import { Legend as LegendProps } from "@/types/Legend";
import Legend from "./Legend";

const LegendItems = ({ legends }: { legends: LegendProps[] }) => {
  return (
    <div className="flex gap-5">
      {legends.map((legend) => (
        <div key={legend.image}>
          <Legend image={legend.image} status={legend.status} />
        </div>
      ))}
    </div>
  );
};

export default LegendItems;
