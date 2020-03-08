const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const dhr = document.querySelector("#d-hr");
const dmin = document.querySelector("#d-min");
const dsec = document.querySelector("#d-sec");
const meridiem = document.querySelector("#meridiem");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const date = document.querySelector("#date");
const button = document.querySelector("button");
const analog = document.querySelector(".analog-clock");
const digital = document.querySelector(".digital-clock");
const dmeridiem = document.querySelector("#d-meridiem");
const dday = document.querySelector("#d-day");
const deg = 6;
let clock = "analog";
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const days = [
  "Sunday",
  "Mondya",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

button.addEventListener("click", changeClock);

function changeClock() {
  let text = this.innerHTML.toLowerCase();
  if (text === "analog") {
    this.innerHTML = "Digital";
    analog.classList.remove("d-none");
    digital.classList.add("d-none");
  } else {
    this.innerHTML = "Analog";
    analog.classList.add("d-none");
    digital.classList.remove("d-none");
  }
}

setInterval(() => {
  let time = new Date();
  let yr = time.getFullYear();
  let mon = time.getMonth();
  let dt = time.getDate();
  let dd = time.getDay();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  if (hh >= 12) {
    dmeridiem.innerHTML = "PM";
    meridiem.innerHTML = "PM";
    if (hh !== 12) hh = hh - 12;
    dhr.innerHTML = hh < 10 ? `0${hh}` : hh;
  } else {
    meridiem.innerHTML = "AM";
    dmeridiem.innerHTML = "AM";
    dhr.innerHTML = hh < 10 ? `0${hh}` : hh;
  }

  year.innerHTML = yr;
  month.innerHTML = months[mon];
  date.innerHTML = dt < 10 ? `0${dt}` : dt;

  dmin.innerHTML = mm < 10 ? `0${mm}` : mm;
  dsec.innerHTML = ss < 10 ? `0${ss}` : ss;
  dday.innerHTML = `${days[dd]}, ${dt} ${months[mon]} - ${yr}`;

  hr.style.transform = `rotateZ(${hh * 30 + mm / 2}deg)`;
  min.style.transform = `rotateZ(${mm * deg}deg)`;
  sec.style.transform = `rotateZ(${ss * deg}deg)`;
});
