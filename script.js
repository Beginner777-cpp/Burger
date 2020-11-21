const ProductsCopy = {
  plainBurger: {
    name: "plainHamburger",
    price: 10000,
    kcall: 1000,
    amount: 0,
    get Price() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },

  freshBurger: {
    name: "freshHamburger",
    price: 20500,
    kcall: 800,
    amount: 0,
    get Price() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },

  freshCombo: {
    name: "freshCombo",
    price: 31900,
    kcall: 1200,
    amount: 0,
    get Price() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },
};


const Products = {
  plainBurger: {
    name: "plainHamburger",
    price: 10000,
    kcall: 1000,
    amount: 0,
    get Price() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },

  freshBurger: {
    name: "freshHamburger",
    price: 20500,
    kcall: 800,
    amount: 0,
    get Price() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },

  freshCombo: {
    name: "freshCombo",
    price: 31900,
    kcall: 1200,
    amount: 0,
    get Price() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },
};

const extraProducts = {
  doubleMayonnaise: {
    name: "Mayonez",
    price: 1000,
    kcall: 500,
  },
  cheese: {
    name: "Cheese",
    price: 2000,
    kcall: 700,
  },
  lettuce: {
    name: "Lettuce",
    price: 1500,
    kcall: 600,
  },
};

var btnPlusOrMinus = document.querySelectorAll(".main__product-btn");
var productumber = document.querySelectorAll(".main__product-num");
var price = document.querySelectorAll(".main__product-price span");
var kcall = document.querySelectorAll(".main__product-kcall span");

for (let i = 0; i < btnPlusOrMinus.length; i++) {
  btnPlusOrMinus[i].addEventListener("click", function () {
    PlusOrMinus(this);
  });
}

function PlusOrMinus(element) {
  const parent = element.closest(".main__product"),
    parentID = parent.getAttribute("id"),
    num = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kcall = parent.querySelector(".main__product-kcall span"),
    sign = element.getAttribute("data-symbol");



  if (sign == "+" && Products[parentID].amount < 10) {
    Products[parentID].amount++;
  } else if (sign == "-" && Products[parentID].amount > 0) {
    Products[parentID].amount--;
  }
  num.innerHTML = Products[parentID].amount;
  price.innerHTML = Products[parentID].Price;
  kcall.innerHTML = Products[parentID].Kcall;
}
const checkExtraProduct = document.querySelectorAll(".main__product-checkbox");

for (let i = 0; i < checkExtraProduct.length; i++) {
  checkExtraProduct[i].addEventListener("click", function () {
    addExtraProduct(this);
  });
}

function addExtraProduct(element) {
  const parent = element.closest(".main__product"),
    parentID = parent.getAttribute("id"),
    elAttr = element.getAttribute("data-extra"),
    price = parent.querySelector(".main__product-price span"),
    kcall = parent.querySelector(".main__product-kcall span");

  Products[parentID][elAttr] = element.checked;
  if (Products[parentID][elAttr]) {
    if (Products[parentID].amount > 0) {
      Products[parentID].price += extraProducts[elAttr].price;
      Products[parentID].kcall += extraProducts[elAttr].kcall;

    }
  } else {
    Products[parentID].price -= extraProducts[elAttr].price;
    Products[parentID].kcall -= extraProducts[elAttr].kcall;
  }

  price.innerHTML = Products[parentID].Price;
  kcall.innerHTML = Products[parentID].Kcall;
}

var orderBtn = document.querySelector('.addCart');
var receipt__window = document.querySelector('.receipt__window-out');
var receipt = document.querySelector('.receipt');
var payment = document.querySelector('.receipt__window-btn');

var names = '';
var totalPrice = 0;
var totalKcal = 0;

orderBtn.addEventListener('click', function () {
  // this.preventDefault();
  for (keys in Products) {
    if (Products[keys].amount > 0) {
      names += '\n' + Products[keys].amount + ' ' + Products[keys].name + ' с ';
      for (i in extraProducts) {
          if (Products[keys][i] === true) {
            names += extraProducts[i].name + ' ';
          }
        }
      }
      names += '\n';
      totalPrice += Products[keys].Price;
      totalKcal += Products[keys].Kcall;
    }
  receipt__window.innerHTML += `Вы добавили \n ${names} \n за общую стоимость ${totalPrice} \n и общей калорийностью ${totalKcal}\n`;
  receipt.classList.toggle('active');

})
payment.addEventListener('click', function () {
  location.reload();
})


var info = document.querySelectorAll('.main__product-info');
var view = document.querySelector('.view');
var close = document.querySelector('.view__close');
var img = document.querySelector('.view>img');
var transition = document.querySelector('.receipt .receipt__window');

for (let i = 0; i < info.length; i++) {
  info[i].addEventListener('dblclick', function () {
    img.setAttribute('src', `images/product${i + 1}.jpg`);
    view.classList.toggle('active');
  })
}

close.addEventListener('click', function () {
  view.classList.remove('active');
})



var lvl = document.querySelector(".header__timer-extra");
var a = 1000;
var i = 0;

function timer() {
  lvl.innerHTML = ++i;

  if (i < 20) {
    a = 1000;
  } else if (i < 40) {
    a = 700;
  } else if (i < 60) {
    a = 500;
  } else if (i < 80) {
    a = 300;
  } else {
    a = 100;
  }
  if (i < 100) {
    setTimeout(() => {
      timer();
    }, a);
  }
}

timer();