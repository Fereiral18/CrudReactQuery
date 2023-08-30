import { useState } from "react";

export const VariationColor = () => {
  const [colorBackground, setcolorBackground] = useState(true);
  console.log("Boton de colores:", colorBackground);

  colorBackground == true
    ? (document.body.style.background = "#FFFFFF")
    : (document.body.style.background = "#000000");

  return {
    colorBackground,
    setcolorBackground,
  };
};
