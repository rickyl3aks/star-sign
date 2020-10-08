//Selector
const date = document.querySelector("#date");
const btn = document.querySelector(".btn");
const div = document.querySelector(".star-sign-result");
const starSign = {
  Capricorn:
    "<b>Capricorns</b> are responsible and disciplined. They excel in management roles because of their ability to make plans and follow through with them. They’re not the type of person to dilly-dally when deciding where to eat. They have great self-control, which is good, but it can sometimes make them appear stand-offish. Capricorns enjoy music and value their family above all else.",
  Aquarius:
    "<b>Aquarius</b>-born people are deep thinkers and are always happy to help others. They enjoy meaningful conversations, as well as carrying out humanitarian work. They are often perceived as shy, but they're outgoing when they need to be. Aquarians thrive within a community setting and they care deeply for people, from all walks of life.",
  Pisces:
    "<b>Pisces</b> are kind and caring. They’ll do anything to make someone else’s life easier, demonstrating compassion and wisdom as they go. They enjoy musicals and romance, though they are prone to avoiding reality. While they’re overly-trusting and can be taken advantage of easily, Pisces are also very forgiving.",
  Aries:
    "<b>Aries</b> are passionate, confident, determined and enthusiastic about everything they do. They’re comfortable taking leadership roles and are happy to take risks in order to achieve their goals. However, Aries tend to get impatient easily, and they can be short-tempered (even aggressive) if things don’t go their way. They don’t like laziness in others and get irritated when they're delayed.",
  Taurus:
    "A <b>Taurus</b> is said to be reliable, practical and patient. They like to work with their hands and will spend as much time on any given task as is necessary. They make very trustworthy employees and reliable friends. However, Taureans tends to be stubborn; they stick to their own way of thinking and are reluctant to move away from that. They don’t like sudden changes or being put on the spot.",
  Gemini:
    "<b>Gemini</b>’s make very loyal friends. They’re happy to chat with almost anyone they meet and they're affectionate by nature. Geminis are curious and open-minded, making them particularly good writers and artists. However, they can be indecisive and inconsistent. Gemini’s like their lives to be varied; they dislike repetition and routine, preferring to adapt to different people and environments.",
  Cancer:
    "People born under the <b>Cancer</b> star sign are highly emotional; this can be both a positive and a negative thing. On the plus side, they are loyal and sympathetic. They’re caring and they empathise with people going through hard times. But, they can also be moody. Cancers lack patience and can occasionally be selfish. If stressed, they relax most when near (or in) water.",
  Leo:
    "<b>Leos</b> love the limelight. They’re born for stardom and made for the stage. Leos are creative and funny, and what’s more, they ooze passion. They love the theatre, having fun with friends and expensive things. Like everyone though, Leos have their downsides. As they love to be the centre of attention, a Leo can’t stand being ignored.",
  Virgo:
    "<b>Virgos</b> pay huge attention to detail; making them analytical, hardworking and well-organised. This can be their downfall, though. Virgos are often overly critical of themselves, putting themselves under huge pressure to achieve the best results possible. That being said, Virgos also have big hearts. They are loyal and empathetic, making them good nurses and caregivers (though careers in writing are common among this star sign too).",
  Libra:
    "Anyone born under the <b>Libra</b> star sign is said to be a people-person. They’re social, outgoing and hate to be alone. They value individuality and are proud to be themselves. Libras value intellect and like to be stimulated by thoughtful conversations. They’re fair-minded and gentle, and they will avoid conflict at all costs.",
  Scorpio:
    "<b>Scorpios</b> make good leaders. They care about facts and asserting the truth, all the while being resourceful and passionate. They’re trustworthy and will keep a secret when asked. However, this secretive nature can sometimes be seen as a bad thing. Scorpios are also prone to jealousy, which can be harmful to their relationships.",
  Sagittarius:
    "<b>Sagittarius</b> are open-minded and have a great sense of humour. They love to travel and are enthusiastic about exploring new places with new people. What's more, they’re doers; when they have an idea, they set about making it happen (although they do have a tendency to make promises they can't keep). People born under this sign hate clingy people. They prefer to be free and independent, rather than have others hold them back.",
};

const para = document.querySelector(".description");

const header = document.querySelector(".star-sign");
const info = document.querySelector(".info");

//Event listener
btn.addEventListener("click", getMonth);
info.addEventListener("click", infoStar);

//Functions
function getMonth(e) {
  e.preventDefault();

  //get month
  const dates = date.value;
  const monthDate = function (dt) {
    return dt.getMonth();
  };
  const dateMonth = monthDate(new Date(dates));

  //get day
  const day = function (e) {
    return e.getDate();
  };
  const dateDay = day(new Date(dates));

  //cariable star sign
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[0]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[1]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[2]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[3]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[4]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[5]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[6]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[7]
    }`;

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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[8]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[9]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[10]
    }`;
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
    header.innerHTML = `${dateDay}/${dateMonth + 1} is ${
      Object.keys(starSign)[11]
    }`;
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
    header.innerHTML = "Please insert your correct date of Birth";
  }
}

// BUTTON TO PRESS TO GET DESCRIPTION
function button(header) {
  if (header.classList.contains("star-sign")) {
    info.style.visibility = "visible";
  } else {
    info.style.visibility = "hidden";
  }
}

function infoStar() {
  if (header.classList.contains("capricorn")) {
    //star sign description
    para.innerHTML = starSign.Capricorn;
  } else if (header.classList.contains("aquarius")) {
    para.innerHTML = starSign.Aquarius;
  } else if (header.classList.contains("pisces")) {
    para.innerHTML = starSign.Pisces;
  } else if (header.classList.contains("aries")) {
    para.innerHTML = starSign.Aries;
  } else if (header.classList.contains("taurus")) {
    para.innerHTML = starSign.Taurus;
  } else if (header.classList.contains("gemini")) {
    para.innerHTML = starSign.Gemini;
  } else if (header.classList.contains("cancer")) {
    para.innerHTML = starSign.Cancer;
  } else if (header.classList.contains("leo")) {
    para.innerHTML = starSign.Leo;
  } else if (header.classList.contains("virgo")) {
    para.innerHTML = starSign.Virgo;
  } else if (header.classList.contains("libra")) {
    para.innerHTML = starSign.Libra;
  } else if (header.classList.contains("scorpio")) {
    para.innerHTML = starSign.Scorpio;
  } else if (header.classList.contains("sagittarius")) {
    para.innerHTML = starSign.Sagittarius;
  }
}
