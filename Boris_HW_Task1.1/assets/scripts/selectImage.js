/* Задача 1:
      Към "задача 1", добавете проверка какво е направил посетителя и ако е настиснал "Ок"
    без да въвежда име на картинка или е натиснал "Cancel",  да излиза подразбираща се картинка.
*/

var visitorImage = window.prompt(
  "Enter an image you would like to see: *(pic1 ; pic2 ; pic3 ):"
);

console.log(visitorImage);

// var imagePath = './images/'
// var imageRegExp = "/[^0-9]/";

if (visitorImage === "" || visitorImage === null) {
  window.open("./images/pic2.jpg");
} else if (
  visitorImage !== "pic1" &&
  visitorImage !== "pic2" &&
  visitorImage !== "pic3"
) {
  window.open("./images/pic3.jpg");
} else {
  window.open("./images/" + visitorImage + ".jpg");
}
