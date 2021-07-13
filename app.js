//DOM Elements

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
let naame = document.getElementById("name");
let foocus = document.getElementById("focus");

//fucntion to show time
function showTime() {
  let today = new Date();
  let hrs = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hrs >= 12 ? "PM" : "AM";

  hrs = hrs > 12 ? hrs - 12 : hrs;
  if (sec < 10) sec = `0${sec}`;
  if (min < 10) min = `0${min}`;
  if (hrs < 10) hrs = `0${hrs}`;

  let tm = `${hrs} : ${min} : ${sec} ${amPm}`;

  time.innerHTML = tm;

  setInterval(showTime, 1000);
}

//fucntion to set background and greeting
function setBG() {
  let today = new Date();
  let hrs = today.getHours();

  if (hrs < 12) {
    greeting.innerHTML = "Good Morning";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
  } else if (hrs < 18) {
    greeting.innerHTML = "Good Afternoon";
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
  } else {
    greeting.innerHTML = "Good Night";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.color = "white";
  }
}

//fucntion to get name
function getName() {
  if (localStorage.getItem("name") === null) {
    naame.textContent = `[Enter NAME]`;
  } else {
    naame.textContent = localStorage.getItem("name");
  }
}

//fucntion to get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    foocus.textContent = `[Enter FOCUS]`;
  } else {
    foocus.textContent = localStorage.getItem("focus");
  }
}

//set name
function setName(e) {
  if (e.type === "keydown") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      naame.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//set focus
function setFocus(e) {
  if (e.type === "keydown") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      foocus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//event listeners for name and focus
naame.addEventListener("keydown", setName);
naame.addEventListener("blur", setName);
foocus.addEventListener("keydown", setFocus);
foocus.addEventListener("blur", setFocus);

//function calls
showTime();
setBG();
getName();
getFocus();
