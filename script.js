// Data świąt
const xmas = new Date("December 24, 2022");

// Licznik czasu
function showCountdown() {
  // Pobiera obecną datę
  const currentDate = new Date();

  // Oblicza różnicę pomiędzy datami
  const diff = xmas - currentDate;

  // Dni, godziny, minuty, sekundy
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Wyświetla datę na stronie
  document.getElementById(
    "countdown"
  ).innerHTML = `Do świąt pozostało: <br> ${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`;
}

// Aktualizuje co sekundę
setInterval(showCountdown, 1000);

// Pliki Cookies

function cookies() {
  const cookies = document.querySelector("#cookies-parent");
  const acceptButton = document.querySelector("#accept");
  acceptButton.addEventListener("click", () => {
    cookies.style.display = "none";
  });
}

//Zmiana obrazu w tle
const changeBg = document.querySelector("#changeBg");
changeBg.addEventListener("click", () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  document.body.style.background =
    "url('img/bg" + randomNumber + ".jpg') no-repeat";
  document.body.style.backgroundSize = "cover";
});

// Tryb ciemny
let isOn = false;
const darkMode = document.getElementById("darkMode");
const texts = document.getElementsByClassName("text");

darkMode.addEventListener("click", () => {
  if (isOn == false) {
    darkMode.style.background = "black";
    darkMode.style.color = "white";
    changeBg.style.background = "black";
    changeBg.style.color = "white";
    document.querySelector("#countdown").style.color = "black";
    document.querySelector("#newsletter").style.color = "black";
    document.querySelector("#name").style.color = "black";
    document.querySelector("#surname").style.color = "black";
    document.querySelector("#email").style.color = "black";
    document.querySelector("#password").style.color = "black";
    document.querySelector("#goUp").style.color = "black";
    document.querySelector("#author").style.color = "black";
    document.getElementById("submit-btn").style.background = "black";
    document.getElementById("submit-btn").style.color = "white";
    isOn = true;
  } else {
    darkMode.style.background = "white";
    darkMode.style.color = "black";
    changeBg.style.background = "white";
    changeBg.style.color = "black";
    document.querySelector("#countdown").style.color = "white";
    document.querySelector("#newsletter").style.color = "white";
    document.querySelector("#name").style.color = "white";
    document.querySelector("#surname").style.color = "white";
    document.querySelector("#email").style.color = "white";
    document.querySelector("#password").style.color = "white";
    document.querySelector("#goUp").style.color = "white";
    document.querySelector("#author").style.color = "white";
    document.getElementById("submit-btn").style.background = "white";
    document.getElementById("submit-btn").style.color = "black";
    isOn = false;
  }
});

//Formularz
const submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", () => {
  if (
    nameInp.value == "" ||
    surnameInp.value == "" ||
    emailInp.value == "" ||
    passwordInp.value == ""
  ) {
    alert("Nie podałeś wartości w jedym z pól");
  } else {
    alert("Dziękujemy za rejestrację");
  }
});

// Prezenty

const presents = {
  1: "Komputer",
  2: "Myszkę",
  3: "Klawiaturę",
  4: "Słuchawki",
  5: "Bon o wartości 100 zł w dowolnym sklepie",
  6: "Nic",
  7: "Gruz",
  8: "Mikrofon",
  9: "Pendrive",
  10: "Gryba",
};
const parcels = document.getElementsByClassName("parcel");
for (let i = 0; i < parcels.length; i++) {
  parcels[i].addEventListener("click", () => {
    const size = Object.keys(presents).length;
    const randomNumber = Math.ceil(Math.random() * size);
    alert("Otrzymujesz " + presents[randomNumber]);
    return;
  });
}
