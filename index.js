let homeScoreEl = document.getElementById("home-points")
let homeScore = 0

let awayScoreEl = document.getElementById("away-points")
let awayScore = 0
let words = document.querySelector("#points-words")

let player = {
  name: "Sterlz",
}

function reset() {
  homeScoreEl.textContent = 0
  awayScoreEl.textContent = 0
  homeScore = 0
  awayScore = 0
  words.textContent = "Lets play again!"
}

function addOneHome() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
  words.textContent = "Way to make your freethrows," + " " + player.name + "!"
}

function addTwoHome() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
  words.textContent = "Nice 2-pointer," + " " + player.name + "!"
}

function addThreeHome() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
  words.textContent = "Nice 3-pointer," + " " + player.name + "!"
}

function addOneAway() {
  awayScore += 1
  awayScoreEl.textContent = awayScore
  words.textContent = "Way to make your freethrows," + " " + player.name + "!"
}

function addTwoAway() {
  awayScore += 2
  awayScoreEl.textContent = awayScore
  words.textContent = "Nice 2-pointer," + " " + player.name + "!"
}

function addThreeAway() {
  awayScore += 3
  awayScoreEl.textContent = awayScore
  words.textContent = "Nice 3-pointer," + " " + player.name + "!"
}

function clearText() {
  words.textContent = ""
}
