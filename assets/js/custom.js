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
// const Swal = require("sweetalert2");
const removeFaculties = document.querySelectorAll(".remove-faculty");
removeFaculties.forEach((remover) => {
  remover.addEventListener("click", function () {
    Swal.fire({
      title: "Silmək istədiyinizdən əminsiniz?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Bəli",
      denyButtonText: `Xeyr`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Silindi!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Dəyişiklər yadda saxlanılmadı.", "", "info");
      }
    });
  });
});
