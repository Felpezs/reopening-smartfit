import { Location } from "@/types/LocationsResponse";

const convertToMinutes = (hour: string) => {
  const [hours, minutes] = hour.split("h");
  return Number(hours) * 60 + Number(minutes);
};

export const filterLocations = (
  locations: Location[],
  showClosed: boolean,
  timeInterval: string,
) => {
  return locations.filter((location: Location) => {

    if (showClosed) return true;
    if (!showClosed && !location.opened) return false;
    if (!location.hasOwnProperty("schedules")) return false;

    return location.schedules.some((schedule) => {
      if (schedule.hour == "Fechada") return false;

      const [locationStartHour, locationEndHour] = schedule.hour
        .replace(" ", "")
        .split("às")
        .map((value) => convertToMinutes(value));

      const [startHour, endHour] = timeInterval
        .replace(" ", "")
        .split("às")
        .map((value) => convertToMinutes(value));

      if (startHour >= locationStartHour && endHour <= locationEndHour)
        return true;
    });
  });
};
