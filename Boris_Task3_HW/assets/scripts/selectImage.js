/* Задача 3:
    Напишете функция, която извежда в страницата картинка посочена като
      параметър на функцията и функцията има 2-ри параметър, с който се задават
      свойствата на картинката:<br/> ```js showImage("/images/pic1.jpg",
      "style='border:2px solid red' alt='City Center'"); showImage("pic2.jpg",
      "class='logo-img'"); ```
*/

var visitorImage = window.prompt(
  "Enter an image you would like to see: *(pic1 ; pic2 ; pic3 ):"
);
var text = window.prompt("Enter the text above the image:");

var color = window.prompt("Enter the text color:");

function customizeImage(visitorImage, text, color) {
  var styleColor =  '<h2 style ="color:' ;

  if (typeof color !== "string" || text.trim().length === 0) {
    color = "purple";
  }
  if (typeof text !== "string" || text.length === 0) {
    document.write(
      styleColor + color + '">' + "Default Text" + "</h2>"
    );
  }
  document.write(styleColor + color + '">' + text + "</h2>");

  if (visitorImage === "" || visitorImage === null) {
    return document.write('<img src="./defaultImages/default.png">');
  }
  document.write('<img src="./images/' + visitorImage + '.jpg">');
}

customizeImage(visitorImage, text, color);

//Няма проверка за грешено въведено име за цвят *(стил)
//Няма проверка за White spaces  пред снимките и цвета
//Няма проверка за грешно написано име на снимките   if (visitorImage !=='<img src="./images/">') --всичко различно от имената на снимките в ./images/ папка
//Ако няма въведен текст, color = "purple";
//При натискане на "F5" след първията windows.promt ,прескача въпросът и продължава към следващият windows.prompt
//При натискане на "Escape"-->null

// Вариант 2:

// var visitorImage = window.prompt(
//   "Enter an image you would like to see: *(pic1 ; pic2 ; pic3 ):"
// );
// var text = window.prompt("Enter the text above the image:");

// var color = window.prompt("Enter the text color:");

// function customizeImage(visitorImage, text, color) {
//   var textChecker = typeof text !== "string" || text.length === 0;
//   var colorValidator = typeof color !== "string" || text.trim().length === 0;

//   textChecker && colorValidator
//     ? document.write("Default Text" + "<br/>")
//     : document.write(
//         '<h2 style ="color:' + color + '">' + text + "<br/> </h2>"
//       );

//   visitorImage === "" || visitorImage === null
//     ? document.write('<img src="./defaultImages/default.png">' + "<br/>")
//     : document.write('<img src="./images/' + visitorImage + '.jpg">');
// }
// customizeImage(visitorImage, text, color);
