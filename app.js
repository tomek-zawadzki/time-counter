const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImage = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

const saveBtn = document.querySelector(".save");
const eventSpan = document.querySelector(".event");

let usersTime;

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
});
