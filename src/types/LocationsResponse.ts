type Schedule = {
  weekdays: string;
  hour: string;
};

type Required = "required" | "recommended";

type Allow = "allowed" | "not_allowed" | "partial";

type Location = {
  id: number;
  title: string;
  content: string;
  mask: Required;
  towel: Required;
  fountain: Allow;
  lockerRoom: Allow;
  schedules: Schedule[];
};

export type LocationsResponse = {
  currentCountryId: number;
  locations: Location[];
  wpTotal: number;
  success: boolean;
};
