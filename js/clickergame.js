var imageDiv = document.getElementById("image");
var pointsDiv = document.getElementById("pointsInfo");

// model
var points = 0;
var pointsPerClick = 1;

// controller
function changeImage() {
  points += pointsPerClick;
  show();
}

function buyUpgrade() {
  if (points < 10) return;
  points -= 10;
  pointsPerClick++;
  show();
}

// view
function show() {
  imageDiv.innerHTML = points % 2 === 0 ? "😀" : "😃";
  pointsDiv.innerHTML = points;
}