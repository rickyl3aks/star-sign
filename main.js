import { URL } from "./config.js";

const container = document.getElementById("container");
let firstClick = false;
let p = document.createElement("p");
let btn = document.createElement("button");
let btnTwo = document.createElement("button");
let btnThree = document.createElement("button");
let btnFour = document.createElement("button");
let btnFive = document.createElement("button");
let btnSix = document.createElement("button");
let btnSeven = document.createElement("button");
let btnEight = document.createElement("button");
let btnNine = document.createElement("button");
let img = document.getElementById("img");

if ("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
    .then(registration => console.log("Service worker registered"))
    .catch(err => "SW registration failed")
  })
}

img.classList.add("img");

const zodiacSign = async () => {
  try {
    //fetch sign
    const response = await fetch(URL);
    const starSign = await response.json();
    getStarSign(starSign);
  } catch (e) {
    img.classList.remove("img");
    p.textContent =
      "Sorry, there was a problem communicating with the Zodiac Sign. Please try again later 💻";
    container.appendChild(p);
  }
};

zodiacSign();

const getStarSign = (starSign) => {
  //remove spinner once fetch is complete
  img.classList.remove("img");
  //loop on each star sign
  starSign.forEach((sign) => {
    let title = document.createElement("h1");
    let img_logo = document.createElement("img");
    img_logo.src = sign.img;
    img_logo.style.height = "50px";
    img_logo.style.display = "block";
    img_logo.style.marginLeft = "auto";
    img_logo.style.marginRight = "auto";
    img_logo.style.marginTop = "10px";
    img_logo.style.marginBottom = "10px";
    container.appendChild(img_logo);
    title.innerHTML = sign.name;
    container.appendChild(title);
    //add event listener
    title.addEventListener("click", () => {
      if (title.textContent === sign.name && !firstClick) {
        p.innerHTML = sign.mental_traits;
        //btn to choose for personality
        btn.innerHTML = "famous people";
        btnTwo.innerHTML = "Compatibility";
        btnThree.innerHTML = "Good traits";
        btnFour.innerHTML = "Bad traits";
        btnFive.innerHTML = "How to spot";
        btnSix.innerHTML = "Keyword";
        btnSeven.innerHTML = "Favourite";
        btnEight.innerHTML = "Secret Wish";
        btnNine.innerHTML = "Hates";
        container.insertBefore(p, title.nextSibling);
        container.insertBefore(btn, p.nextSibling);
        container.insertBefore(btnTwo, p.nextSibling);
        container.insertBefore(btnThree, p.nextSibling);
        container.insertBefore(btnFour, p.nextSibling);
        container.insertBefore(btnFive, p.nextSibling);
        container.insertBefore(btnSix, p.nextSibling);
        container.insertBefore(btnSeven, p.nextSibling);
        container.insertBefore(btnEight, p.nextSibling);
        container.insertBefore(btnNine, p.nextSibling);
        firstClick = true;
      } else {
        firstClick = false;
        //remove btn
        container.removeChild(p);
        container.removeChild(btn);
        container.removeChild(btnTwo);
        container.removeChild(btnThree);
        container.removeChild(btnFour);
        container.removeChild(btnFive);
        container.removeChild(btnSix);
        container.removeChild(btnSeven);
        container.removeChild(btnEight);
        container.removeChild(btnNine);
      }
      //add info alogn with the right btn clicked
      btn.addEventListener("click", () => {
        p.innerHTML = `🕶️ ${sign.famous_people}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnTwo.addEventListener("click", () => {
        p.innerHTML = `💓 ${sign.compatibility}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnThree.addEventListener("click", () => {
        p.innerHTML = `👼 ${sign.good_traits}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnFour.addEventListener("click", () => {
        p.innerHTML = `👿 ${sign.bad_traits}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnFive.addEventListener("click", () => {
        p.innerHTML = `👀 ${sign.how_to_spot}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnSix.addEventListener("click", () => {
        p.innerHTML = `🔓 ${sign.keywords}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnSeven.addEventListener("click", () => {
        p.innerHTML = `✌️ ${sign.favorites}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnEight.addEventListener("click", () => {
        p.innerHTML = `🧙 ${sign.secret_wish}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnNine.addEventListener("click", () => {
        p.innerHTML = `😒 ${sign.hates}`;
        container.insertBefore(p, title.nextSibling);
      });
    });
  });
};
