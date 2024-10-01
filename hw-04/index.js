// HW 4.1

const userName = prompt("What is your name?");
alert(`Hello ${userName}! How are you?`);

// HW 4.2

const enteredNumber = prompt("Enter three-digit number"); //string
const digits = enteredNumber.split(""); //array of strings

const allEqual = digits[0] === digits[1] && digits[1] === digits[2];
const someEqual =
  digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2];

if (allEqual) {
  console.log("All digits are equal");
} else if (someEqual) {
  console.log("Some digits are equal");
} else {
  console.log("All digits are not equal");
}

// HW 4.3
const userYearOfBirth = +prompt("Вкажи свій рік народження");
const userCity = prompt("В якому місті ти живеш");
const userFavoriteSport = prompt("Який твій улюблений вид спорту");

let userCapital = "";
let sportChampion = "";

switch (userCity) {
  case "Київ":
    userCapital = "України";
    break;
  case "Вашингтон":
    userCapital = "Сполучених Штатів Америки";
    break;
  case "Лондон":
    userCapital = "Великої Британії";
    break;
  default:
    userCapital = userCity;
}

switch (userFavoriteSport.toLowerCase()) {
  case "футбол":
    sportChampion = "Андрієм Шевченком";
    break;
  case "бокс":
    sportChampion = "Олександром Усіком";
    break;
  case "гімнастика":
    sportChampion = "Лілією Подкопаєвою";
    break;
  default:
    sportChampion = "чемпіоном";
}

if (!userYearOfBirth || !userCity || !userFavoriteSport) {
  alert(
    `Шкода, що Ви не захотіли ввести свій(оє) ${
      !userYearOfBirth
        ? "рік народження"
        : !userCity
        ? "місто"
        : "улюблений вид спорту"
    }.`
  );
} else {
  alert(`Тобі ${2024 - userYearOfBirth}
    Ти живеш у ${
      userCapital !== userCity ? `столиці ${userCapital}` : `місті ${userCity}`
    }
    Круто! Хочеш стати ${sportChampion} у ${userFavoriteSport.toLowerCase()}?`);
}

// HW 4.4

let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log("ви скасували");
    break;
  case numOrStr.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrStr):
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}
