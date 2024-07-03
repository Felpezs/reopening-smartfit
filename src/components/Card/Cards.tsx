import mapLegends from "@/utils/mapLegends";
import Card from "./Card";
import { useLocationsContext } from "@/context/LocationsContext";

const Cards = () => {
  const { locationsResponse } = useLocationsContext();

  return (
    <div className="flex flex-wrap justify-center gap-5" role="list">
      {locationsResponse &&
        locationsResponse.locations.map((location) => {
          if (location.opened) {
            return (
              <Card
                key={location.title}
                isOpen={location.opened}
                address={location.content}
                name={location.title}
                legends={mapLegends(location)}
                schedules={location.schedules}
              />
            );
          }
          return (
            <Card
              key={location.title}
              isOpen={location.opened}
              address={location.content}
              name={location.title}
            />
          );
        })}
    </div>
  );
};

export default Cards;
