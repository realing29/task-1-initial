import { getRandomColor } from "./utils";

export default function initApp() {
  const body = document.body;

  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Изменить цвет страницы";

  body.append(button);

  button.addEventListener("click", (event) => {
    body.style.background = getRandomColor();
    button.style.background = getRandomColor();
  });
}
