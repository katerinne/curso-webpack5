import "./helloWorldButton.css";

const useHelloWorldButton = () => {
  const renderButton = () => {
    const button = document.createElement("button");
    button.innerHTML = "hello world";
    button.classList.add("hello-world-button");

    button.onclick = () => {
      toggleClassVisible("#display");
    };

    const body = document.querySelector("body");
    body.appendChild(button);
  };
  const toggleClassVisible = (query) => {
    const p = document.querySelector(`${query}`);
    if (isInvisible(p)) {
      p.classList.remove("invisible");
    } else {
      p.classList.add("invisible");
    }
  };
  const isInvisible = (element) =>
    element.className.split(" ").includes("invisible");

  return {
    renderButton,
  };
};

export default useHelloWorldButton;
