/* Задача 1:
        Напишете скрипт, който пита посетителя коя картинка иска да види (напр.
        pic1.jpg,pic2.jpg,pic3.jpg) и след като посетителя въведе името на картинката, 
        в страницата се показва картинката.*(Без да използвате if statements)
*/

var visitorImage = window.prompt(
  "Enter an image you would like to see: *(pic1 ; pic2 ; pic3 ):"
);

console.log(visitorImage);
window.open("./images/" + visitorImage + ".jpg");
