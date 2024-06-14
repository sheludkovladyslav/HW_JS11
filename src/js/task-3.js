const user = {
  name: "Vlad",
  email: "vladsh2103@gmail.com",
  password: "1234",

  login() {
    const inputPassword = document.getElementById("login-password");
    const inputEmail = document.getElementById("login-email");
    const userPassword = inputPassword.value;
    const userEmail = inputEmail.value;
    const loginCheck = document.getElementById("login-check");

    loginCheck.addEventListener("click", () => {
      //   коментар Владу, якщо ми подивимось, то консол лог видає правильні емейл та пароль,
      //   тобто мало би працювати, коли ви це бачити і знайшли проблеми, киньте фідбек будь ласка в тг.
      //   Я думаю що це якась помилка можливо або шось типу того
      console.log(userPassword, this.password, userEmail, this.email);
      if (userPassword === this.password && userEmail === this.email) {
        return alert("Вхід успішно виконано!");
      } else {
        alert("Ваші дані не є правильними!");
      }
    });
  },
};

user.login();
