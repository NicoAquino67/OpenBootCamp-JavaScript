const date = new Date();
console.log(date);

const birthday = new Date("May 23, 1997");
console.log(birthday);

let isLater = date > birthday;
console.log(isLater);

var birthdayDay;
switch (birthday.getDay()) {
  case 0:
    birthdayDay = "Sunday";
    break;
  case 1:
    birthdayDay = "Monday";
    break;
  case 2:
    birthdayDay = "Tuesday";
    break;
  case 3:
    birthdayDay = "Wednesday";
    break;
  case 4:
    birthdayDay = "Thursday";
    break;
  case 5:
    birthdayDay = "Friday";
    break;
  case 6:
    birthdayDay = "Saturday";
    break;
}
console.log(birthdayDay);

var birthdayMonth;
switch (birthday.getMonth()) {
  case 0:
    birthdayMonth = "January";
    break;
  case 1:
    birthdayMonth = "February";
    break;
  case 2:
    birthdayMonth = "March";
    break;
  case 3:
    birthdayMonth = "April";
    break;
  case 4:
    birthdayMonth = "May";
    break;
  case 5:
    birthdayMonth = "June";
    break;
  case 6:
    birthdayMonth = "July";
    break;
  case 7:
    birthdayMonth = "August";
    break;
  case 8:
    birthdayMonth = "September";
    break;
  case 9:
    birthdayMonth = "October";
    break;
  case 10:
    birthdayMonth = "November";
    break;
  case 11:
    birthdayMonth = "December";
    break;
}
console.log(birthdayMonth);

var birthdayYear = birthday.getFullYear();

console.log(birthdayYear);