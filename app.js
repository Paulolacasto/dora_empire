const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SNEAKERS",
    price: 13.3,
    colors: [
      {
        code: "black",
        img: "./img/timberland.png",
      },
      {
        code: "white",
        img: "./img/whitesneaker.png",
      },
      {
        code: "grey",
        img: "./img/blackandwhite.png",
      },
    ],
  },
  {
    id: 2,
    title: "SLIDES",
    price: 6.6,
    colors: [
      {
        code: "black",
        img: "./img/slide1.png",
      },
      {
        code: "white",
        img: "./img/whiteslide.png",
      },
      {
        code: "red",
        img: "./img/redslide.png",
        size: "50px",
      },
    ],
  },
  {
    id: 3,
    title: "TOPS/SHIRTS",
    price: 10,
    colors: [
      {
        code: "white",
        img: "./img/whitetop.png",
      },
      {
        code: "blue",
        img: "./img/bluetop.png",
      },
      {
        code: "yellow",
        img: "./img/yellowtop.png",
      },
    ],
  },
  {
    id: 4,
    title: "FEMALE CROPTOPS",
    price: 4.67,
    colors: [
      {
        code: "black",
        img: "./img/blackcroptop.png",
      },
      {
        code: "white",
        img: "./img/whitecroptop.png",
      },
      {
        code: "yellow",
        img: "./img/yellowcroptop.png",
      },
    ],
  },
  {
    id: 5,
    title: "JEAN/TROUSERS",
    price: 13.3,
    colors: [
      {
        code: "gray",
        img: "./img/greyjean.png",
      },
      {
        code: "black",
        img: "./img/blackjean.png",
      },
      {
        code: "blue",
        img: "./img/bluejean.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});




document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menuToggle');
  const menuItems = document.querySelector('.menuItems');

  menuToggle.addEventListener('click', function() {
      if (menuItems.style.display === 'none' || menuItems.style.display === '') {
          menuItems.style.display = 'flex';
      } else {
          menuItems.style.display = 'none';
      }
  });
});


const userCardTemplate = document.querySelector("[data-user-template]")
fetch("https://jsonplaceholder.org/users")
.then(res => res.json())
.then(data => {
  const card = userCardTemplate.textContent.clone
})