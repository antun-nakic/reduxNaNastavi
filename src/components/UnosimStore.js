import React from "react";
import { store } from "../index";

const UnosimStore = () => {
  return (
    <div>
      UnosimStore {store.getState().rijec}{" "}
      <button onClick={() => store.dispatch({ type: "ODUZMI_SLOVO" })}>
        Oduzmi slovo
      </button>
    </div>
  );
};

export default UnosimStore;
