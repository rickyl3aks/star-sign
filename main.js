//Selector
const btn = document.querySelector(".btn");
const para = document.querySelector(".description");
const header = document.querySelector(".star-sign");
const info = document.querySelector(".info");

async function zodiacSign() {
  const response = await fetch("star_sign.json");
  const starSign = await response.json();

  //Event listener
  btn.addEventListener("click", getMonth);
  info.addEventListener("click", infoStar);

  //Functions
  function getMonth(e) {
    e.preventDefault();

    //get month
    const dates = date.value;
    const monthDate = (dt) => dt.getMonth();

    const dateMonth = monthDate(new Date(dates));

    //get day
    const day = (e) => e.getDate();

    const dateDay = day(new Date(dates));

    //if statement
    if (
      (dateDay >= 22 && dateMonth === 11) ||
      (dateDay <= 19 && dateMonth === 0)
    ) {
      //generate star sign from date
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[9].name}`;
      header.classList.add("capricorn");

      button();
    } else if (
      (dateDay >= 20 && dateMonth === 0) ||
      (dateDay <= 18 && dateMonth === 1)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[10].name}`;
      header.classList.add("aquarius");
      button();
    } else if (
      (dateDay >= 19 && dateMonth === 1) ||
      (dateDay <= 20 && dateMonth === 2)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[11].name}`;
      header.classList.add("pisces");
      button();
    } else if (
      (dateDay >= 21 && dateMonth === 2) ||
      (dateDay <= 19 && dateMonth === 3)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[0].name}`;
      header.classList.add("aries");
      button();
    } else if (
      (dateDay >= 20 && dateMonth === 3) ||
      (dateDay <= 20 && dateMonth === 4)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[1].name}`;
      header.classList.add("taurus");
      button();
    } else if (
      (dateDay >= 21 && dateMonth === 4) ||
      (dateDay <= 20 && dateMonth === 5)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[2].name}`;
      header.classList.add("gemini");
      button();
    } else if (
      (dateDay >= 21 && dateMonth === 5) ||
      (dateDay <= 22 && dateMonth === 6)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[3].name}`;
      header.classList.add("cancer");
      button();
    } else if (
      (dateDay >= 23 && dateMonth === 6) ||
      (dateDay <= 22 && dateMonth === 7)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[4].name}`;
      header.classList.add("leo");
      button();
    } else if (
      (dateDay >= 23 && dateMonth === 7) ||
      (dateDay <= 22 && dateMonth === 8)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[5].name}`;
      header.classList.add("virgo");
      button();
    } else if (
      (dateDay >= 23 && dateMonth === 8) ||
      (dateDay <= 22 && dateMonth === 9)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[6].name}`;
      header.classList.add("libra");
      button();
    } else if (
      (dateDay >= 23 && dateMonth === 9) ||
      (dateDay <= 21 && dateMonth === 10)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[7].name}`;
      console.log(starSign);
      header.classList.add("scorpio");
      button();
    } else if (
      (dateDay >= 22 && dateMonth === 10) ||
      (dateDay <= 21 && dateMonth === 11)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[8].name}`;
      header.classList.add("sagittarius");
      button();
    } else {
      console.log("nope");
      header.innerHTML = "Please insert your correct date of Birth";
    }
  }

  // BUTTON TO PRESS TO GET DESCRIPTION
  function button() {
    if (!header.classList.contains("")) {
      info.style.visibility = "visible";
      header.style.visibility = "visible";
    } else {
      info.style.visibility = "hidden";
      header.style.visibility = "hidden";
    }
  }

  function infoStar() {
    if (header.classList.contains("capricorn")) {
      //star sign description
      para.innerHTML = starSign[9].mental_traits[0];
      header.classList.remove("capricorn");
    } else if (header.classList.contains("aquarius")) {
      para.innerHTML = `${starSign[10].mental_traits[0]}. ${starSign[10].mental_traits[1]}. ${starSign[10].mental_traits[2]}`;
      header.classList.remove("aquarius");
    } else if (header.classList.contains("pisces")) {
      para.innerHTML = `${starSign[11].mental_traits[0]}. ${starSign[11].mental_traits[1]}. ${starSign[11].mental_traits[2]}`;
      header.classList.remove("pisces");
    } else if (header.classList.contains("aries")) {
      para.innerHTML = `${starSign[0].mental_traits[0]}. ${starSign[0].mental_traits[1]}. ${starSign[0].mental_traits[2]}`;
      header.classList.remove("aries");
    } else if (header.classList.contains("taurus")) {
      para.innerHTML = `${starSign[1].mental_traits[0]}. ${starSign[1].mental_traits[1]}. ${starSign[1].mental_traits[2]}`;
      header.classList.remove("taurus");
    } else if (header.classList.contains("gemini")) {
      para.innerHTML = `${starSign[2].mental_traits[0]}. ${starSign[2].mental_traits[1]}. ${starSign[2].mental_traits[2]}`;
      header.classList.remove("gemini");
    } else if (header.classList.contains("cancer")) {
      para.innerHTML = `${starSign[3].mental_traits[0]}. ${starSign[3].mental_traits[1]}. ${starSign[3].mental_traits[2]}`;
      header.classList.remove("cancer");
    } else if (header.classList.contains("leo")) {
      para.innerHTML = `${starSign[4].mental_traits[0]}. ${starSign[4].mental_traits[1]}. ${starSign[4].mental_traits[2]}`;
      header.classList.remove("leo");
    } else if (header.classList.contains("virgo")) {
      para.innerHTML = `${starSign[5].mental_traits[0]}. ${starSign[5].mental_traits[1]}. ${starSign[5].mental_traits[2]}`;
      header.classList.remove("virgo");
    } else if (header.classList.contains("libra")) {
      para.innerHTML = `${starSign[6].mental_traits[0]}. ${starSign[6].mental_traits[1]}. ${starSign[6].mental_traits[2]}`;
      header.classList.remove("libra");
    } else if (header.classList.contains("scorpio")) {
      para.innerHTML = `${starSign[7].mental_traits[0]}. ${starSign[7].mental_traits[1]}. ${starSign[7].mental_traits[2]}`;
      header.classList.remove("scorpio");
    } else if (header.classList.contains("sagittarius")) {
      para.innerHTML = `${starSign[8].mental_traits[0]}. ${starSign[8].mental_traits[1]}. ${starSign[8].mental_traits[2]}`;
      header.classList.remove("sagittarius");
    }
  }
}

zodiacSign();
