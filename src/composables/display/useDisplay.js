import "./display.scss";

const useDisplay = () => {
  const renderParagraph = (text = "hello world") => {
    const p = document.createElement("p");
    p.innerHTML = text;
    p.id = "display";
    p.classList.add("display", "invisible");

    const body = document.querySelector("body");
    body.appendChild(p);
  };

  return {
    renderParagraph,
  };
};

export default useDisplay;
