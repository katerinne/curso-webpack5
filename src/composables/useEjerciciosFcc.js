const useEjerciciosFcc = () => {
  let mensaje = "mensaje inicial";

  const setMensaje = (msj) => (mensaje = msj);
  const getMensaje = () => mensaje;

  return {
    setMensaje,
    getMensaje,
  };
};

export default useEjerciciosFcc;
