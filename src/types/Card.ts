import { Schedule } from "./LocationsResponse";

type BaseCardProps = {
  name: string;
  address: string;
};

export type OpenCardProps = {
  isOpen: true;
  legends: string[];
  schedules: Schedule[];
} & BaseCardProps;

export type ClosedCardProps = {
  isOpen: false;
  legends?: undefined;
  schedules?: undefined;
} & BaseCardProps;
