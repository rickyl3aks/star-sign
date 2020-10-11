//Selector
const btn = document.querySelector(".btn");
const div = document.querySelector(".star-sign-result");
const para = document.querySelector(".description");
const header = document.querySelector(".star-sign");
const info = document.querySelector(".info");

async function zodiacSign() {
  const response = await fetch("star_sign.json");
  const starSign = await response.json();
  console.log(starSign);

  //Event listener
  btn.addEventListener("click", getMonth);
  info.addEventListener("click", infoStar);

  //Functions
  function getMonth(e) {
    e.preventDefault();

    //get month
    const dates = date.value;
    const monthDate = (dt) => {
      return dt.getMonth();
    };
    const dateMonth = monthDate(new Date(dates));

    //get day
    const day = (e) => {
      return e.getDate();
    };
    const dateDay = day(new Date(dates));

    //variable star sign
    const capricorn = header.classList.remove("capricorn");
    const aquarius = header.classList.remove("acquarius");
    const pisces = header.classList.remove("pisces");
    const aries = header.classList.remove("aries");
    const taurus = header.classList.remove("taurus");
    const gemini = header.classList.remove("gemini");
    const cancer = header.classList.remove("cancer");
    const leo = header.classList.remove("leo");
    const virgo = header.classList.remove("virgo");
    const libra = header.classList.remove("libra");
    const scorpio = header.classList.remove("scorpio");
    const sagittarius = header.classList.remove("sagittarius");

    //if statement
    if (
      (dateDay >= 22 && dateMonth === 11) ||
      (dateDay <= 19 && dateMonth === 0)
    ) {
      //generate star sign from date
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[9].name}`;
      header.classList.add("capricorn");
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 20 && dateMonth === 0) ||
      (dateDay <= 18 && dateMonth === 1)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[10].name}`;
      header.classList.add("aquarius");
      capricorn;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 19 && dateMonth === 1) ||
      (dateDay <= 20 && dateMonth === 2)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[11].name}`;
      header.classList.add("pisces");
      capricorn;
      aquarius;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 21 && dateMonth === 2) ||
      (dateDay <= 19 && dateMonth === 3)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[0].name}`;
      header.classList.add("aries");
      capricorn;
      aquarius;
      pisces;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 20 && dateMonth === 3) ||
      (dateDay <= 20 && dateMonth === 4)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[1].name}`;
      header.classList.add("taurus");
      capricorn;
      aquarius;
      pisces;
      aries;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 21 && dateMonth === 4) ||
      (dateDay <= 20 && dateMonth === 5)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[2].name}`;
      header.classList.add("gemini");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 21 && dateMonth === 5) ||
      (dateDay <= 22 && dateMonth === 6)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[3].name}`;
      header.classList.add("cancer");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      leo;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 23 && dateMonth === 6) ||
      (dateDay <= 22 && dateMonth === 7)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[4].name}`;
      header.classList.add("leo");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      virgo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 23 && dateMonth === 7) ||
      (dateDay <= 22 && dateMonth === 8)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[5].name}`;
      header.classList.add("virgo");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      libra;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 23 && dateMonth === 8) ||
      (dateDay <= 22 && dateMonth === 9)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[6].name}`;
      header.classList.add("libra");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      scorpio;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 23 && dateMonth === 9) ||
      (dateDay <= 21 && dateMonth === 10)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[7].name}`;
      header.classList.add("scorpio");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      sagittarius;
      button(header);
    } else if (
      (dateDay >= 22 && dateMonth === 10) ||
      (dateDay <= 21 && dateMonth === 11)
    ) {
      header.innerHTML = `${dateDay}/${dateMonth + 1} is ${starSign[8].name}`;
      header.classList.add("sagittarius");
      capricorn;
      aquarius;
      pisces;
      aries;
      taurus;
      gemini;
      cancer;
      leo;
      virgo;
      libra;
      scorpio;
      button(header);
    } else {
      console.log("nope");
      header.innerHTML = "Please insert your correct date of Birth";
    }
  }

  // BUTTON TO PRESS TO GET DESCRIPTION
  function button(header) {
    if (header.classList.contains("star-sign")) {
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
    } else if (header.classList.contains("aquarius")) {
      para.innerHTML = starSign[10].mental_traits[0];
    } else if (header.classList.contains("pisces")) {
      para.innerHTML = starSign[11].mental_traits[0];
    } else if (header.classList.contains("aries")) {
      para.innerHTML = starSign[0].mental_traits[0];
    } else if (header.classList.contains("taurus")) {
      para.innerHTML = starSign[1].mental_traits[0];
    } else if (header.classList.contains("gemini")) {
      para.innerHTML = starSign[2].mental_traits[0];
    } else if (header.classList.contains("cancer")) {
      para.innerHTML = starSign[3].mental_traits[0];
    } else if (header.classList.contains("leo")) {
      para.innerHTML = starSign[4].mental_traits[0];
    } else if (header.classList.contains("virgo")) {
      para.innerHTML = starSign[5].mental_traits[0];
    } else if (header.classList.contains("libra")) {
      para.innerHTML = starSign[6].mental_traits[0];
    } else if (header.classList.contains("scorpio")) {
      para.innerHTML = starSign[7].mental_traits[0];
    } else if (header.classList.contains("sagittarius")) {
      para.innerHTML = starSign[8].mental_traits[0];
    }
  }
}

zodiacSign();
