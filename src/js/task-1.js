// let balance = Math.random() * (50 - 2) + 2;
// balance = Math.round(balance);
// const result = document.getElementById("bank-result");

// const bankAccount = {
//   ownerName: "Vlad Shel",
//   accountNumber: 123456,
//   balance: balance,
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return alert("Ви ввели завелику суму!");
//     }

//     if (amount < this.balance) {
//       this.balance -= amount;
//     }
//   },
//   deposit(amount) {
//     this.balance += amount;
//     return this.balance;
//   },
// };

// const updateBalance = () => {
//   result.innerHTML = bankAccount.balance.toFixed(2);
// };

// document.getElementById("bank-widthdraw").addEventListener("click", () => {
//   const sum = parseFloat(document.getElementById("bank-sum").value);
//   if (isNaN(sum) || sum <= 0) {
//     alert("Будь ласка, введіть коректну суму");
//     return;
//   }
//   bankAccount.withdraw(sum);
//   updateBalance();
// });

// document.getElementById("bank_deposit").addEventListener("click", () => {
//   const sum = parseFloat(document.getElementById("bank-sum").value);
//   if (isNaN(sum) || sum <= 0) {
//     alert("Будь ласка, введіть коректну суму");
//     return;
//   }
//   bankAccount.deposit(sum);
//   updateBalance();
// });
