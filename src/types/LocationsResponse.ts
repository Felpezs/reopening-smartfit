import { LegendImages } from "./Legend";

export type Schedule = {
  weekdays: string;
  hour: string;
};

export type Location = {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: keyof LegendImages["mask"];
  towel: keyof LegendImages["towel"];
  fountain: keyof LegendImages["fountain"];
  locker_room: keyof LegendImages["lockerRoom"];
  schedules: Schedule[];
};

export type LocationsResponse = {
  currentCountryId: number;
  locations: Location[];
  success: boolean;
};
