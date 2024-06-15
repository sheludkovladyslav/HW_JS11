const user = {
  name: "Vlad",
  email: "vladsh2103@gmail.com",
  password: "1234",

  login() {
    document.getElementById("login-check").addEventListener("click", () => {
      const userPassword = document.getElementById("login-password").value;
      const userEmail = document.getElementById("login-email").value;
      if (userPassword === this.password && userEmail === this.email) {
        return alert("Вхід успішно виконано!");
      } else {
        alert("Ваші дані не є правильними!");
      }
    });
  },
};

user.login();
