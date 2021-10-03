import useEjerciciosFcc from "./composables/useEjerciciosFcc.js";
import useHelloWorldButton from "./composables/hello-world/useHelloWorldButton";
import useDisplay from "./composables/display/useDisplay.js";
const main = () => {
  const { setMensaje, getMensaje } = useEjerciciosFcc();
  const { renderButton } = useHelloWorldButton();
  const { renderParagraph } = useDisplay();

  console.group("hola Eloy");
  console.log("antes de asignar el valor: hola mundo ->", getMensaje());
  setMensaje("hola mundo");
  console.log("después de asignar el valor: hola mundo ->", getMensaje());
  console.groupEnd();
  renderButton();
  renderParagraph();
};

main();
