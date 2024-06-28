import { Location } from "@/types/LocationsResponse";
import convertLegendToImage from "./convertLegend";

const mapLegends = (location: Location) => {
  const fountain = convertLegendToImage("fountain", location.fountain);
  const lockerRoom = convertLegendToImage("lockerRoom", location.locker_room);
  const mask = convertLegendToImage("mask", location.mask);
  const towel = convertLegendToImage("towel", location.towel);

  return [fountain, lockerRoom, mask, towel];
};

export default mapLegends;
