import { getMe } from "./auth.js";
import { isLogin } from "./utils.js";
const showUserNameInNavebar = () => {
  const isUserLogin = isLogin();
  const navbarProfileBox = document.querySelector(".main-header__profile");
  console.log(navbarProfileBox);

  if (isUserLogin) {
    const userInfos = getMe().then((data) => {
      navbarProfileBox.setAttribute("href", "index.html");
      navbarProfileBox.innerHTML = ` <span class="main-header__profile-text"> ${data.name}</span>`;
    });
  } else {
    navbarProfileBox.setAttribute("href", "login.html");
    navbarProfileBox.innerHTML =
      ' <span class="main-header__profile-text"> ثبت نام / ورود </span>';
  }
};

export { showUserNameInNavebar };
