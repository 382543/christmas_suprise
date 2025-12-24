let musicPlaying = false;
let currentIndex = -1;

/* ===== CHRISTMAS MESSAGES (30) ===== */
const messages = [
  { title: "Merry Christmas!", text: "May your heart be filled with love and joy this Christmas season." },
  { title: "Warm Wishes", text: "Sending you peace, love, and happiness this holiday season." },
  { title: "Season of Giving", text: "May the spirit of Christmas bring you warmth and kindness." },
  { title: "Joyful Moments", text: "Cherish every magical Christmas moment with your loved ones." },
  { title: "Christmas Blessings", text: "May your home be filled with the warmth of Christmas light." },
  { title: "Holiday Cheer", text: "Wishing you laughter, joy, and wonderful Christmas memories." },
  { title: "Winter Magic", text: "Let the snow and stars bring peace to your heart this Christmas." },
  { title: "Festive Spirit", text: "Celebrate this Christmas with love, laughter, and togetherness." },
  { title: "Christmas Star", text: "May the Christmas star guide you to happiness and success." },
  { title: "Peace & Hope", text: "Wishing you calm nights and joyful Christmas mornings." },
  { title: "Sweet Memories", text: "Make beautiful Christmas memories that last forever." },
  { title: "New Beginnings", text: "This Christmas brings new hope and wonderful possibilities." },
  { title: "Family Time", text: "Together with family is the best place to celebrate Christmas." },
  { title: "Kind Hearts", text: "May your Christmas be filled with acts of kindness and love." },
  { title: "Festive Lights", text: "Let your life glow with the brightness of Christmas lights." },
  { title: "Holiday Smiles", text: "Your smile is the best Christmas decoration of all." },
  { title: "Christmas Joy", text: "Let the joy of Christmas fill your heart and home." },
  { title: "Peaceful Nights", text: "May your Christmas nights be silent, calm, and bright." },
  { title: "Love Wrapped", text: "Every Christmas moment is a precious gift to treasure." },
  { title: "Grateful Heart", text: "Be thankful for the Christmas miracles, big and small." },
  { title: "Winter Calm", text: "Slow down and enjoy the beauty of this Christmas season." },
  { title: "Joyful Heart", text: "True Christmas happiness begins within your heart." },
  { title: "Seasonal Magic", text: "Believe in the magic and wonder of Christmas." },
  { title: "Golden Moments", text: "Treasure every golden second of this Christmas season." },
  { title: "Christmas Hope", text: "Hope and love shine brightest during Christmas time." },
  { title: "Warm Cocoa Days", text: "Find comfort in little Christmas joys and warm moments." },
  { title: "Silent Night", text: "Peace and serenity fill the air on this holy Christmas night." },
  { title: "Bright Future", text: "May this Christmas bring you hope for wonderful days ahead." },
  { title: "Festive Love", text: "Love is what makes Christmas truly special and magical." },
  { title: "Holiday Miracle", text: "Christmas miracles happen when you believe with all your heart." }
];

/* ===== RANDOM CARD BUTTON ===== */
function showRandomMessage() {
  currentIndex = Math.floor(Math.random() * messages.length);

  document.getElementById("cardNumber").innerText = currentIndex + 1;

  document.getElementById("msgTitle").innerText = messages[currentIndex].title;
  document.getElementById("msgText").innerText = messages[currentIndex].text;

  document.getElementById("messageBox").style.display = "block";

  document.querySelector(".gift-box").style.display = "none";
  document.querySelector(".gift-btn").style.display = "none";
}

/* ===== OPEN SURPRISE ===== */
function openGift() {
  const bell = document.getElementById("bellSound");
  bell.currentTime = 0;
  bell.play();

  showRandomMessage();

  if (!musicPlaying) {
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play();
    musicPlaying = true;
  }
}

/* ===== TOGGLE MUSIC ===== */
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");

  if (music.paused) {
    music.play();
    toggle.textContent = "Mute";
    musicPlaying = true;
  } else {
    music.pause();
    toggle.textContent = "Play";
    musicPlaying = false;
  }
}

/* ===== RANDOM MUSIC SELECTION ===== */
const musicFiles = [
  "carol-of-the-bells_59sec-263250.mp3",
  "christmas-carol-of-the-bells-music-269799.mp3",
  "jingle-bells-short-454803.mp3"
];

function playRandomMusic() {
  const music = document.getElementById("bgMusic");
  const randomIndex = Math.floor(Math.random() * musicFiles.length);
  music.src = musicFiles[randomIndex];
  music.volume = 0.5;
  music.play().then(() => {
    musicPlaying = true;
    console.log("Playing:", musicFiles[randomIndex]);
  }).catch(err => {
    console.log("Autoplay blocked, click anywhere to start music");
  });
}

/* ===== AUTO START MUSIC ON PAGE LOAD ===== */
window.addEventListener('load', () => {
  playRandomMusic();
});

/* ===== START MUSIC ON FIRST CLICK (FALLBACK) ===== */
document.addEventListener("click", () => {
  if (!musicPlaying) {
    playRandomMusic();
  }
}, { once: true });
// Randomize tree positions WITHOUT overlapping center card
document.querySelectorAll(".tree").forEach(tree => {
  let top, left;

  do {
    top = Math.random() * 90;   // 0–90%
    left = Math.random() * 95; // 0–95%
  } while (
    top > 25 && top < 75 &&    // block vertical center
    left > 30 && left < 70     // block horizontal center
  );

  tree.style.top = `${top}%`;
  tree.style.left = `${left}%`;
  tree.style.animationDelay = `${Math.random() * 4}s`;
});

