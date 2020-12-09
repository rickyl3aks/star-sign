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
let btnTen = document.createElement("button");
let image = document.getElementById("img");

image.classList.add("img");

async function zodiacSign() {
  try {
    //fetch sign
    const response = await fetch(
      "https://zodiac-sign-api.herokuapp.com/zodiac_sign"
    );
    const starSign = await response.json();
    getStarSign(starSign);
  } catch (e) {
    image.classList.remove("img");
    p.textContent =
      "Sorry, there was a problem communicating with the Zodiac Sign. Please try again later 💻";
    container.appendChild(p);
  }
}

zodiacSign();

function getStarSign(starSign) {
  //remove spinner once fetch is complete
  img.classList.remove("img");

  //loop on each star sign
  starSign.map((sign) => {
    let title = document.createElement("h1");
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
        btnFive.innerHTML = "Motto";
        btnSix.innerHTML = "Keyword";
        btnSeven.innerHTML = "Favourite";
        btnEight.innerHTML = "Secret Wish";
        btnNine.innerHTML = "Hates";
        btnTen.innerHTML = "How to Spot";
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
        container.insertBefore(btnTen, p.nextSibling);
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
        container.removeChild(btnTen);
      }
      //add info alogn with the right btn clicked
      btn.addEventListener("click", () => {
        p.textContent = `🕶️ ${sign.famous_people}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnTwo.addEventListener("click", () => {
        p.textContent = `💓 ${sign.compatibility}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnThree.addEventListener("click", () => {
        p.textContent = `👼 ${sign.good_traits}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnFour.addEventListener("click", () => {
        p.textContent = `👿 ${sign.bad_traits}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnFive.addEventListener("click", () => {
        p.textContent = `🔖 ${sign.motto}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnSix.addEventListener("click", () => {
        p.textContent = `🔓 ${sign.keywords}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnSeven.addEventListener("click", () => {
        p.textContent = `✌️ ${sign.favorites}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnEight.addEventListener("click", () => {
        p.textContent = `🧙 ${sign.secret_wish}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnNine.addEventListener("click", () => {
        p.textContent = `😒 ${sign.hates}`;
        container.insertBefore(p, title.nextSibling);
      });
      btnTen.addEventListener("click", () => {
        p.textContent = `👀 ${sign.how_to_spot}`;
        container.insertBefore(p, title.nextSibling);
      });
    });
  });
}
