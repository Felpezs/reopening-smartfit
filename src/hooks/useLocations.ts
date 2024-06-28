import { LocationsResponse } from "@/types/LocationsResponse";
import { useQuery } from "react-query";

export const useLocations = () => {
  const fetchLocations = async (): Promise<LocationsResponse> => {
    const endpoint = import.meta.env.VITE_LOCATIONS_ENDPOINT;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data.success) throw new Error("Error when loading locations");

    return {
      success: data.success,
      locations: data.locations,
      currentCountryId: data.current_country_id,
    };
  };

  const queryProps = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    enabled: false,
    staleTime: 3 * 60 * 1000, //time in minutes
  });

  return queryProps;
};
