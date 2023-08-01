const selects = document.querySelector("#select");
const popUp = document.getElementById("pop-up");
const got = document.querySelector(".got");
let pop = false;

selects.addEventListener("click", (e) => {
  if (pop == false) {
    popUp.style.display = "block";
    pop = true;
  }
});

got.addEventListener("click", (e) => {
  popUp.style.display = "none";
  pop = false;
});
