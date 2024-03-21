const createFooter = () => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `<div class="footer-content">
    <img src="./img/logo.png" class="logo" alt="" />
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">Jordans</a></li>
        <li><a href="#" class="footer-link">Yeezys</a></li>
        <li><a href="#" class="footer-link">Dunks</a></li>
        <li><a href="#" class="footer-link">Air Force</a></li>
        <li><a href="#" class="footer-link">New Balance</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">Jordans</a></li>
        <li><a href="#" class="footer-link">Yeezys</a></li>
        <li><a href="#" class="footer-link">Dunks</a></li>
        <li><a href="#" class="footer-link">Air Force</a></li>
        <li><a href="#" class="footer-link">New Balance</a></li>
      </ul>
    </div>
  </div>`;
};

createFooter();
