const country_1 = "КИТАЙ";
const country_2 = "ЧИЛИ";
const country_3 = "АВСТРАЛИЯ";
const country_4 = "ИНДИЯ";
const country_5 = "ЯМАЙКА";
let price;

const destinationCountry = prompt("Введите страну").toUpperCase();

switch (destinationCountry) {
  case country_1:
    price = 100;
    break;

  case country_2:
    price = 250;
    break;

  case country_3:
    price = 170;
    break;

  case country_4:
    price = 80;
    break;

  case country_5:
    price = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

console.log(`Доставка в ${destinationCountry} будет стоить ${price} кредитов`);
