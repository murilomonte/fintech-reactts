import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id="inicio"
        label="Início"
        onChange={({ target }) => {
          setInicio(target.value);
        }}
      />
      {inicio}
      <DateInput
        id="final"
        label="Final"
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DateRange;
