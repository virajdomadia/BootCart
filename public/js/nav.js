const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `<div class="nav">
      <img src="./img/logo.png" alt="" />
      <div class="nav-items">
        <div class="search">
          <input
            type="text"
            class="search-box"
            placeholder="search brand, product"
          />
          <button class="search-btn">search</button>
        </div>
        <a>
          <img src="./img/user.png" id="user-img" alt="" />
          <div class="login-logout-popup hide">
            <p class="account-info">log in as, name</p>
            <button class="btn" id="user-btn">Log Out</button>
          </div>
        </a>
        <a href="#"><img src="./img/cart.png" alt="" /></a>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item"><a href="#" class="link">JORDANS</a></li>
      <li class="link-item"><a href="#" class="link">YEEZYS</a></li>
      <li class="link-item"><a href="#" class="link">DUNKS</a></li>
      <li class="link-item"><a href="#" class="link">AIR FORCE</a></li>
      <li class="link-item"><a href="#" class="link">NEW BALANCE</a></li>
    </ul>`;
};

createNav();

//nav popup
const userImageButton = document.querySelector("#user-img");
const userPop = document.querySelector(".login-logout-popup");
const popupText = document.querySelector(".account-info");
const actionBtn = document.querySelector("#user-btn");

userImageButton.addEventListener("click", () => {
  userPop.classList.toggle("hide");
});

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    popupText.innerHTML = `log in as, ${user.name}`;
    actionBtn.innerHTML = "Log Out";
    actionBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    popupText.innerHTML = "Log In to place order";
    actionBtn.innerHTML = "Login";
    actionBtn.addEventListener("click", () => {
      location.href = "/login";
    });
  }
};
