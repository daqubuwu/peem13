document.addEventListener("DOMContentLoaded", function () {
  // Регистрация
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Предотвращаем стандартную отправку формы

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const passwordConfirm = document.getElementById("passwordConfirm").value;

      // Проверка паролей
      if (password !== passwordConfirm) {
        alert("Пароли не совпадают!");
        return;
      }

      // Сохранение данных пользователя (в localStorage)
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Регистрация успешна!");
      // Перенаправление на главную страницу
      window.location.href = "/main/main.html";
    });

  // Вход
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Проверка данных пользователя (из localStorage)
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (email === storedEmail && password === storedPassword) {
        alert("Вход выполнен!");
        // Перенаправление на главную страницу
        window.location.href = "/main/main.html";
      } else {
        alert("Неверный email или пароль!");
      }
    });
});
