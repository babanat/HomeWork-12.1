const buttonFirst = document.getElementById("button-first");
const buttonSecond = document.getElementById("button-second");
let link = "";

buttonFirst.addEventListener("click", function () {
  link = prompt("Enter link", "");
  if (link) {
    buttonSecond.disabled = false;
  } else {
    buttonSecond.disabled = true;
  }
});

buttonSecond.addEventListener("click", function () {
  if (link) {
    window.location.href = link;
  } else {
    alert("Please enter a link");
  }
});
