/* Задача 2 (if else if ...): 

Напишете скрипт, който пита посетителя от коя държава е. Посетителят въвежда
кода на държавата: BG, UK и в страницата се извежда поздрав на езика на държавата.
Предвидете и случай, в който нямате поздрав за съотв. код.
(Сравненията на текстове в JS са чувствителни към регистъра "bg" != "Bg")
*/

var visitorCountry = window.prompt(
  "Enter the code on the country you are coming from *(BG, UK, DE):"
);

var convertedCountry = visitorCountry.toUpperCase();

console.log(visitorCountry);
console.log(convertedCountry);

if (convertedCountry === "BG") {
  document.write("<h3>'Добре дошли в България'</h3>");
} else if (convertedCountry === "UK") {
  document.write("<h3>'Welcome to the UK'</h3>");
} else if (convertedCountry === "DE") {
  document.write("<h3>'Willkommen in Deutschland'</h3>");
} else if (convertedCountry === "" || convertedCountry === NaN) {
  alert("Country code field cannot contain empty value!");
  window.location.reload(
    "Enter the code on the country you are coming from *(BG, UK, DE):"
  );
} else {
  alert(
    "'" +
      convertedCountry +
      "' is not a valid Country Code , please instered existing one:"
  );
  window.location.reload();
}

/*By select "Cancel" button : 
    selectCountry.js:13 Uncaught TypeError: Cannot read property 'toUpperCase' of null
    at selectCountry.js:13  */

//Case 2:

// if (visitorCountry === "BG" || visitorCountry ==="Bg" || visitorCountry ==="bG" || visitorCountry ==="bg") {
//   document.write("<h3>'Добре дошли в България'</h3>");
// } else if (visitorCountry === "BG" || visitorCountry ==="uK" || visitorCountry ==="Uk" || visitorCountry ==="uk") {
//   document.write("<h3>'Welcome to the UK'</h3>");
// } else if (visitorCountry === "DE" || visitorCountry ==="De" || visitorCountry ==="dE" || visitorCountry ==="de") {
//   document.write("<h3>'Willkommen in Deutschland'</h3>");
// } else if (convertedCountry === "" || convertedCountry === NaN) {
//   alert("Country code cannot be empty");
//   window.location.reload(
//     "Enter the code on the country you are coming from *(BG, UK, DE):"
//   );
// } else {
//   alert(
//     "'" +
//       convertedCountry +
//       "' is not a valid Country Code , please instered another one:"
//   );
//   window.location.reload();
// }
