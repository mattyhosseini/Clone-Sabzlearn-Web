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

const renderTopbarMenus = async () => {
  const topBarList = document.querySelector(".top-bar__menu");
  const res = await fetch(`http://localhost:4000/v1/menus/topbar`);
  const topbarMenus = await res.json();

  console.log(topbarMenus);
  topBarList.innerHTML = "";

  const shuffledArray = topbarMenus.sort((a, b) => 0.5 - Math.random());
  shuffledArray.splice(0, 6).map((menu) => {
    topBarList.innerHTML += `<li class="top-bar__item">
                  <a href="${menu.href}" class="top-bar__link">${menu.title}</a>
                </li>`;
  });
};
export { showUserNameInNavebar, renderTopbarMenus };
