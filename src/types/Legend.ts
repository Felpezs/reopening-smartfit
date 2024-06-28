export type Legend = {
  image: string;
  status:
    | "Obrigatório"
    | "Recomendado"
    | "Parcial"
    | "Proibido"
    | "Liberado"
    | "Fechado";
};

type Required = "required" | "recommended";

type Allow = "allowed" | "closed" | "not_allowed" | "partial";

export type LegendImages = {
  lockerRoom: { [K in Exclude<Allow, "not_allowed">]: string };
  towel: { [K in Required]: string };
  mask: { [K in Required]: string };
  fountain: { [K in Exclude<Allow, "closed" | "allowed">]: string };
};
