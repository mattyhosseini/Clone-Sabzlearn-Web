import { register } from "./func/auth.js";
console.log('register')
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  register();
});
