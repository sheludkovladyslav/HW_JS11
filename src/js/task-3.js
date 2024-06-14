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
      const userPassword = inputPassword.value;
      const userEmail = inputEmail.value;
      if (userPassword === this.password && userEmail === this.email) {
        return alert("Вхід успішно виконано!");
      } else {
        alert("Ваші дані не є правильними!");
      }
    });
  },
};

user.login();
