import iconHour from "@/assets/images/icon-hour.png";
import RadioButton from "./RadioButton";

const Form = () => {
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
      </form>
    </div>
  );
};

export default Form;
