import iconHour from "@/assets/images/icon-hour.png";
import RadioButton from "./RadioButton";
import Button from "./Button";
import { useQuery } from "react-query";
import { LocationsResponse } from "@/types/LocationsResponse";
import spinner from "@/assets/spinner.svg";

const Form = () => {
  const fetchLocations = async (): Promise<LocationsResponse> => {
    const endpoint = import.meta.env.VITE_LOCATIONS_ENDPOINT;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data.success) throw new Error("Error when loading locations");

    return {
      success: data.success,
      locations: data.locations,
      currentCountryId: data.current_country_id,
      wpTotal: data.wp_total,
    };
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });

  if (isError) {
    console.error(error);
  }

  return (
    <div className="border-light-grey border-opacity-25 rounded-md border-[3px] p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <img src={iconHour} alt="clock" width={35} />
        <h2 className="text-light-grey">Horário</h2>
      </div>
      <form className="flex flex-col gap-3">
        <h3 className="text-3xl font-thin border-b-[2px] border-light-grey border-opacity-25 p-2 mb-2">
          Qual período quer treinar?
        </h3>
        <RadioButton label="Manhã" valueKey="morning" name="schedule">
          <span>06:00 às 12:00</span>
        </RadioButton>
        <RadioButton label="Tarde" valueKey="afternoon" name="schedule">
          <span>12:01 às 18:00</span>
        </RadioButton>
        <RadioButton label="Noite" valueKey="night" name="schedule">
          <span>18:01 às 23:00</span>
        </RadioButton>
        <div className="flex justify-center items-center my-10 flex-wrap gap-6">
          <div className="basis-full flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="showClosed" className="mr-2" />
              <label className="text-dark-grey text-lg" htmlFor="showClosed">
                Exibir unidades fechadas
              </label>
            </div>

            <span className="text-dark-grey text-lg">
              Resultados encontrados:{" "}
              {data && (
                <span className="font-bold"> {data.locations.length}</span>
              )}
              {isLoading && (
                <>
                  <span className="text-light-grey">Carregando</span>
                  <img src={spinner} className="inline" />
                </>
              )}
            </span>
          </div>
          <Button variant="filled">Encontrar unidade</Button>
          <Button variant="outlined">Limpar</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
