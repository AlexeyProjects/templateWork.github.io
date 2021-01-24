window.addEventListener('DOMContentLoaded', function() {
  class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector) {
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.descr = descr;
  this.price = price;
  this.parent = document.querySelector(parentSelector);
  this.transfer = 74;
  this.changeToRUS();
  }
  }
});



function render() {
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="menu__item">
  <img src=${this.src} alt=${this.alt}>
  <h3 class="menu__item-subtitle">${this.title}</h3>
  <div class="menu__item-descr">${this.descr}</div>
  <div class="menu__item-divider"></div>
  <div class="menu__item-price">
  <div class="menu__item-cost">Цена:</div>
  <div class="menu__item-total"><span>${this.price}</span> руб</div>
  </div>
  </div>
  `;
  this.parent.append(element);
  }

const div = new MenuCard();
div.render();

new MenuCard(
  "img/camry.png",
  "camry",
  'Toyota Camry',
  'Toyota Camry - эталон комфорта и безопасности.',
  25300,
  ".menu .container"
  ).render();

  new MenuCard(
  "img/lendcruser.png",
  "lendcruser",
  'Toyota Land Cruiser 200',
  'Легендарный внедорожник Toyota Land Cruiser 200.',
  80000,
  ".menu .container"
  ).render();

  new MenuCard(
  "img/rav4.png",
  "rav4",
  'Toyota Rav 4',
  'Тойота РАВ 4- это пятиместный компактный кроссовер.',
  22800,
  ".menu .container"
  ).render();