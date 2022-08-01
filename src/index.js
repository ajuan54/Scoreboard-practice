let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

// home
homeadd1.addEventListener("click", function () {
  homeScore = homeScore + 1;
  homeScoreEl.textContent = homeScore;
});

homeadd2.addEventListener("click", function () {
  homeScore = homeScore + 2;
  homeScoreEl.textContent = homeScore;
});

homeadd3.addEventListener("click", function () {
  homeScore = homeScore + 3;
  homeScoreEl.textContent = homeScore;
});

// guest
guestadd1.addEventListener("click", function () {
  guestScore = guestScore + 1;
  guestScoreEl.textContent = guestScore;
});

guestadd2.addEventListener("click", function () {
  guestScore = guestScore + 2;
  guestScoreEl.textContent = guestScore;
});

guestadd3.addEventListener("click", function () {
  guestScore = guestScore + 3;
  guestScoreEl.textContent = guestScore;
});
