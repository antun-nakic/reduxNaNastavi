export const DODAJ_SLOVO = "DODAJ_SLOVO";
export const ODUZMI_SLOVO = "ODUZMI_SLOVO";
export const RESETIRAJ = "RESETIRAJ";
export const OSVJEZI_FILMOVE = "OSVJEZI_FILMOVE";

export const dodajSlovo = () => {
  let slucajniKarakter = (Math.random() + 1).toString(36).substring(7)[0];
  return { type: DODAJ_SLOVO, payload: slucajniKarakter };
};

export const oduzmiSlovo = () => {
  return { type: ODUZMI_SLOVO };
};

export const resetiraj = () => {
  return { type: RESETIRAJ };
};

export const osvjeziFilmove = (dohvaceniFilmovi) => {
  return { type: OSVJEZI_FILMOVE, payload: dohvaceniFilmovi };
};
