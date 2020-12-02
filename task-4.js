const credits = 23580;
const pricePerDroid = 3000;
let message;
const amount = prompt("Введите количество дроидов");

if (amount === null) {
  message = "Отменено пользователем!";
} else {
  amount = Number(amount);
  let totalPrice = pricePerDroid * amount;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    let balance = credits - totalPrice;
    message = `Вы купили ${amount} дроидов, на счету осталось ${balance} кредитов.`;
  }
}

console.log(message);
