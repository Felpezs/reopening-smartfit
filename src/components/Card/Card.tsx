import { ClosedCardProps, OpenCardProps } from "@/types/Card";
import createMarkup from "@/utils/createMarkup";
import parse from "html-react-parser";

const Card = ({
  isOpen,
  name,
  address,
  legends,
  schedules,
}: OpenCardProps | ClosedCardProps) => {
  return (
    <div className="rounded-md bg-light-grey bg-opacity-10 min-w-[250px] basis-[250px] shrink grow max-w-[400px] p-3 card_shadow capitalize min-h-[450px]">
      {isOpen ? (
        <p className="text-green font-black">Aberto</p>
      ) : (
        <p className="text-red font-black">Fechado</p>
      )}
      <h3 className="text-dark-grey font-bold text-2xl mt-2">{name}</h3>
      {parse(createMarkup(address))}
      {isOpen && (
        <>
          <hr className="border-light-grey border-opacity-40 mb-6" />
          <div className="flex justify-center mb-6">
            {legends.map((legend, index) => (
              <img
                key={legend + name + index}
                src={legend}
                className="w-16 h-16"
              />
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            {schedules.map((schedule, index) => (
              <div key={index} className="min-w-fit">
                <h4 className="font-extrabold text-dark-grey text-2xl">
                  {schedule.weekdays}
                </h4>
                <span className="text-dark-grey">{schedule.hour}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
