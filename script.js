var previousBox = null;
var previousColor = null;

function showBox(boxId) {
  let currentBox = document.getElementById(boxId);

  // Move the previous box at the top along with its solid color
  if (previousBox != null) {
    previousBox.style.top = "-420px";
    previousBox.style.backgroundColor = previousColor;
  }

  // Updating the previous box details
  previousBox = currentBox;
  previousColor = getComputedStyle(currentBox).backgroundColor;

  // Setting the bg color into white so that it will be only border and go down
  currentBox.style.backgroundColor = "#fff";
  currentBox.style.top = "180px";
}

// Event listeners for each day button

document.getElementById("MondayBtn").addEventListener("click", function () {
  showBox("mon");
});

document.getElementById("TuesdayBtn").addEventListener("click", function () {
  showBox("tue");
});

document.getElementById("WednesdayBtn").addEventListener("click", function () {
  showBox("wed");
});

document.getElementById("ThursdayBtn").addEventListener("click", function () {
  showBox("thur");
});

document.getElementById("FridayBtn").addEventListener("click", function () {
  showBox("fri");
});

document.getElementById("SaturdayBtn").addEventListener("click", function () {
  showBox("sat");
});

document.getElementById("SundayBtn").addEventListener("click", function () {
  showBox("sun");
});
