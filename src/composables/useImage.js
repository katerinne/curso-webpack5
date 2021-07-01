import mgs from "/assets/mgs.jpg";
const useImage = () => {
  const addImage = () => {
    const img = document.createElement("img");
    img.alt = "mgs";
    img.width = 300;
    img.src = mgs;
    const body = document.querySelector("body");
    body.appendChild(img);
  };

  return {
    addImage,
  };
};

export default useImage;
