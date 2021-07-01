import useEjerciciosFcc from "./composables/useEjerciciosFcc.js";
const main = () => {
  const { setMensaje, getMensaje } = useEjerciciosFcc();

  console.group("hola mundo");
  console.log("antes de asignar el valor: hola mundo ->", getMensaje());
  setMensaje("hola mundo");
  console.log("después de asignar el valor: hola mundo ->", getMensaje());
  console.groupEnd();
};

main();
