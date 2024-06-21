// global variables
var score = 0;
var clientId;
var publicKey;

// generate client ID and public key
function generateClientId() {
  // instead of generating a random client ID, use the user's public key
  return publicKey;
}

// get public key from user
function getPublicKey() {
  // TO DO: implement public key retrieval from user
  // for now, just return a dummy public key
  return '0x1234567890abcdef';
}

// save score to local storage
function saveScore() {
  const scoreData = {
    clientId: clientId,
    score: score
  };
  localStorage.setItem(clientId, JSON.stringify(scoreData));
}

// add score and update display
function addScore() {
  score = score + 1;
  saveScore();
  update();
}

// update score display
function update() {
  document.querySelector("#countNum").value = score;
}

// get client ID and public key
clientId = generateClientId();
publicKey = getPublicKey();

// add event listener to banana button
document.querySelector("#banana-btn").addEventListener("click", function() {
  addScore();
  // Play a sound when clicked
  var audio = new Audio('click_sound.mp3'); // replace with your sound file
  audio.play();
  // Add firework effect
  const firework = document.createElement("div");
  firework.className = "firework";
  document.body.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 1000);
});

// add event listener to window for local storage
window.addEventListener('storage', function(event) {
  if (event.key === clientId) {
    const storedScore = JSON.parse(localStorage.getItem(clientId)).score;
    score = storedScore;
    update();
  }
});