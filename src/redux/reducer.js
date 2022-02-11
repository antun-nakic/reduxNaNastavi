import {
  DODAJ_SLOVO,
  ODUZMI_SLOVO,
  RESETIRAJ,
  OSVJEZI_FILMOVE,
} from "./actions";

const initialState = { rijec: "", filmovi: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DODAJ_SLOVO:
      return { ...state, rijec: state.rijec + action.payload };
    case ODUZMI_SLOVO:
      return { ...state, rijec: state.rijec.slice(0, -1) };
    case RESETIRAJ:
      return initialState;
    case OSVJEZI_FILMOVE:
      return { ...state, filmovi: action.payload };
    default:
      return state;
  }
}
