import { getMe } from "./func/auth.js";

window.addEventListener("load", () => {
  getMe().then((data) => {
    console.log(data);
  });
});
