import iconHour from "@/assets/images/icon-hour.png";
import Button from "./Button";
import spinner from "@/assets/spinner.svg";
import { FormEvent, useEffect, useState } from "react";
import RadioButtons from "./RadioButtons";
import { useLocations } from "@/hooks/useLocations";
import { useLocationsContext } from "@/context/LocationsContext";
import { filterLocations } from "@/utils/filterLocations";

const Form = () => {
  const [timeInterval, setTimeInterval] = useState<string>("");
  const [showClosed, setShowClosed] = useState<boolean>(false);
  const { locationsResponse, setLocations } = useLocationsContext();

  const cleanInputs = () => {
    setShowClosed(false);
    setTimeInterval("");
  };

  const { data, isLoading, isError, error, isStale, refetch } = useLocations();

  if (isError) {
    console.error(error);
  }

  useEffect(() => {
    if (data) {
      const filteredData = {
        ...data,
        locations: filterLocations(data.locations, showClosed, timeInterval),
      };
      setLocations(filteredData);
    }
  }, [data, showClosed, timeInterval]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isStale && Boolean(timeInterval)) refetch();
  };

  return (
    <div className="border-light-grey border-opacity-25 rounded-md border-[3px] p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <img src={iconHour} alt="clock" width={35} />
        <h2 className="text-light-grey">Horário</h2>
      </div>
      <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="text-3xl font-thin border-b-[2px] border-light-grey border-opacity-25 p-2 mb-2">
          Qual período quer treinar?
        </h3>
        <RadioButtons
          timeInterval={timeInterval}
          setTimeInterval={setTimeInterval}
        />
        <div className="flex justify-center items-center my-10 flex-wrap gap-6">
          <div className="basis-full flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showClosed"
                className="mr-2"
                onChange={(e) => setShowClosed(e.currentTarget.checked)}
                checked={showClosed}
              />
              <label className="text-dark-grey text-lg" htmlFor="showClosed">
                Exibir unidades fechadas
              </label>
            </div>

            <span className="text-dark-grey text-lg">
              Resultados encontrados:{" "}
              <span className="font-bold">
                {" "}
                {locationsResponse && !isLoading
                  ? locationsResponse.locations.length
                  : 0}
              </span>
              {isLoading && (
                <>
                  <span className="text-light-grey">Carregando</span>
                  <img src={spinner} className="inline" />
                </>
              )}
            </span>
          </div>
          <Button variant="filled">Encontrar unidade</Button>
          <Button variant="outlined" onClick={cleanInputs}>
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
