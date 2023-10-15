var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
 guess = prompt("Привет! Давай постреляем! (введи любую цифру в диапозоне 0-6):");
 if (guess < 0 || guess > 6) {
 alert("Ну я же просил от 0 диапозонедо 6!");
 } else {
 guesses = guesses + 1;
 if (guess == location1 || guess == location2 || guess == location3) {
 alert("Ты попал!");
 hits = hits + 1;
 if (hits == 3) {
 isSunk = true;
 alert("Ты победил!");
 }
 } else {
 alert("Мазила!");
 }
 }
}
var stats = "Ты выстрелил " + guesses + " раз чтобы попасть по кораблю, " +
 " уровень твоего прицела равен " + (3/guesses);
alert(status);