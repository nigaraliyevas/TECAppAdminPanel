const dateTime = document.querySelector(".date-time");

function writeLocalTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = `Bugün ${day}/${month}/${year}`;
  dateTime.textContent = fullDate;
}
writeLocalTime();
