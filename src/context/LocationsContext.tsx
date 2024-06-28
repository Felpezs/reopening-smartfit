import { LocationsResponse } from "@/types/LocationsResponse";
import { Dispatch, PropsWithChildren, useState } from "react";
import { createContext } from "./createContext";

type APIResponse = LocationsResponse | undefined;

type LocationsContextState = {
  locationsResponse: APIResponse;
  setLocations: Dispatch<APIResponse>;
};

const [useContext, ContextProvider] = createContext<LocationsContextState>();

export const LocationsProvider = ({ children }: PropsWithChildren) => {
  const [locationsResponse, setLocations] = useState<APIResponse>(undefined);

  return (
    <ContextProvider value={{ locationsResponse, setLocations }}>
      {children}
    </ContextProvider>
  );
};

export const useLocationsContext = useContext;
