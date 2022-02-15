import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SpojiSeNaStanje = () => {
  const rijec = useSelector((state) => state.rijec);
  const dispatch = useDispatch();

  return (
    <div>
      {rijec}{" "}
      <button onClick={() => dispatch({ type: "ODUZMI_SLOVO" })}>
        Oduzmi slovo
      </button>
    </div>
  );
};

export default SpojiSeNaStanje;
