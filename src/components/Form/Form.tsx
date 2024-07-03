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
    <div className="flex flex-col gap-4 rounded-md border-[3px] border-light-grey border-opacity-25 p-4">
      <div className="flex items-center gap-2">
        <img src={iconHour} alt="clock" width={35} />
        <h2 className="text-light-grey">Horário</h2>
      </div>
      <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mb-2 border-b-[2px] border-light-grey border-opacity-25 p-2 text-3xl font-thin">
          Qual período quer treinar?
        </h3>
        <RadioButtons
          timeInterval={timeInterval}
          setTimeInterval={setTimeInterval}
        />
        <div className="my-10 flex flex-wrap items-center justify-center gap-6">
          <div className="flex basis-full justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showClosed"
                className="mr-2"
                onChange={(e) => setShowClosed(e.currentTarget.checked)}
                checked={showClosed}
              />
              <label className="text-lg text-dark-grey" htmlFor="showClosed">
                Exibir unidades fechadas
              </label>
            </div>

            <span className="text-lg text-dark-grey">
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
