const plans = document.querySelectorAll(".plan");

const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalInput = document.getElementById("modalInput");
const modalButton = document.getElementById("modalButton");

const monthTitle = document.getElementById("monthTitle");
const monthModal = document.getElementById("monthModal");
const monthSelect = document.getElementById("monthSelect");
const monthConfirm = document.getElementById("monthConfirm");

const newCategoryModal = document.getElementById("newCategoryModal");
const categorySelect = document.getElementById("categorySelect");
const subcategorySelect = document.getElementById("subcategorySelect");
const permanentMode = document.getElementById("permanentMode");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const confirmCategoryBtn = document.getElementById("confirmCategoryBtn");
const amountInput = document.getElementById("amountInput");
const dateInput = document.getElementById("dateInput");
const descriptionInput = document.getElementById("descriptionInput");
const addCategoryButton = document.querySelector(".add-category");
const detailsInput = document.getElementById("detailsInput");

// Header Plan Button Functionality
plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    plans.forEach((p) => p.classList.remove("active"));
    plan.classList.add("active");
  });
});

// Modal Open Functions
function openAddMoneyModal() {
  document.getElementById("addMoneyModal").style.display = "block";
}

function openRemoveMoneyModal() {
  document.getElementById("removeMoneyModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function openRemoveMoneyModal() {
  document.getElementById("removeMoneyModal").style.display = "block";
}

function closeRemoveMoneyModal() {
  document.getElementById("removeMoneyModal").style.display = "none";
}

function addMoney() {
  const amount = parseFloat(document.getElementById("addAmount").value);
  if (!isNaN(amount) && amount > 0) {
    const balanceElement = document.getElementById("balance-amount");
    const currentBalance = parseFloat(balanceElement.innerText);
    balanceElement.innerText = (currentBalance + amount).toFixed(2);
    closeAddMoneyModal();
  } else {
    alert("Введите корректную сумму для пополнения.");
  }
}

function removeMoney() {
  const amount = parseFloat(document.getElementById("removeAmount").value);
  if (!isNaN(amount) && amount > 0) {
    const balanceElement = document.getElementById("balance-amount");
    const currentBalance = parseFloat(balanceElement.innerText);
    if (amount <= currentBalance) {
      balanceElement.innerText = (currentBalance - amount).toFixed(2);
      closeRemoveMoneyModal();
    } else {
      alert("Недостаточно средств на счете.");
    }
  } else {
    alert("Введите корректную сумму для снятия.");
  }
}

function openMonthModal() {
  document.getElementById("monthModal").style.display = "block";
}

function openNewCategoryModal() {
  document.getElementById("newCategoryModal").style.display = "block";
}

// Modal Close Function
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Confirm Month Change
function confirmMonth() {
  monthTitle.textContent = monthSelect.value;
  closeModal("monthModal");
}

// Confirm Adding Money
let balance = 0; // Переменная для хранения текущего баланса

function updateBalanceDisplay() {
  document.getElementById("balance-amount").innerText = balance; // Обновляем отображение баланса
}

function confirmAddMoney() {
  const amount = parseFloat(document.getElementById("addAmount").value); // Получаем сумму
  if (!isNaN(amount) && amount > 0) {
    balance += amount; // Добавляем сумму к балансу
    updateBalanceDisplay(); // Обновляем отображение баланса
    // Очищаем поле ввода
    document.getElementById("addAmount").value = "";
    closeModal("addMoneyModal");
  } else {
    alert("Пожалуйста, введите корректную сумму.");
  }
}

function confirmRemoveMoney() {
  const amount = parseFloat(document.getElementById("removeAmount").value); // Получаем сумму
  if (!isNaN(amount) && amount > 0 && amount <= balance) {
    balance -= amount; // Вычитаем сумму из баланса
    updateBalanceDisplay(); // Обновляем отображение баланса
    // Очищаем поле ввода
    document.getElementById("removeAmount").value = "";
    closeModal("removeMoneyModal");
  } else {
    alert(
      "Пожалуйста, введите корректную сумму или убедитесь, что у вас достаточно средств."
    );
  }
}

// New Category Modal Functionality
function selectIncome() {
  incomeBtn.classList.add("active");
  expenseBtn.classList.remove("active");
  detailsInput.style.display = "flex";
}

function selectExpense() {
  expenseBtn.classList.add("active");
  incomeBtn.classList.remove("active");
  detailsInput.style.display = "flex";
}

function confirmCategory() {
  const category = document.getElementById("categorySelect").value;
  const customSubcategory = document.getElementById("customSubcategory").value; // Получаем пользовательскую подкатегорию
  const isPermanent = document.getElementById("permanentMode").checked;
  const amount = document.getElementById("amountInput").value;
  const date = document.getElementById("dateInput").value;
  const description = document.getElementById("descriptionInput").value;

  // Проверка на наличие подкатегории
  if (customSubcategory) {
    // Создаем новый элемент категории
    const categoryElement = document.createElement("div");
    categoryElement.className = "category";
    categoryElement.innerHTML = `
      <div class="category-icon">
        <img src="../../svg/list-check.svg" alt="${customSubcategory}" />
      </div>
      <div class="category-info">
        <h3>${customSubcategory}</h3>
        <p>${isPermanent ? "Доход" : "Расход"}: ${amount}</p>
      </div>
      <span class="delete-icon" onclick="removeCategory(this)">&times;</span>
    `;
    // Добавляем новый элемент в контейнер категорий
    document
      .querySelector(".category-right")
      .insertBefore(categoryElement, document.querySelector(".add-category"));
    // Очищаем поля ввода
    document.getElementById("categorySelect").value = "";
    document.getElementById("customSub category").value = "";
    document.getElementById("amountInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("descriptionInput").value = "";
    closeModal("newCategoryModal"); // Закрываем модальное окно
  } else {
    alert("Пожалуйста, введите подкатегорию."); // Сообщение об ошибке, если подкатегория не введена
  }
}

function removeCategory(element) {
  // Удаляем родительский элемент (категорию)
  const categoryElement = element.parentElement;
  categoryElement.remove();
}

// Logout Functionality
function logout() {
  window.location.href = "../../index.html";
}

// Dropdown Menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

window.onclick = function (event) {
  if (
    event.target == modal ||
    event.target == monthModal ||
    event.target == newCategoryModal
  ) {
    modal.style.display = "none";
    monthModal.style.display = "none";
    newCategoryModal.style.display = "none";
  }
};

function changePlan(button) {
  const selectedPlan = button.dataset.plan;
  const categoryElements = document.querySelectorAll(".category-info p");
  const monthlyLimitElement = document.querySelector(".circle-limit span");
  const planButtons = document.querySelectorAll(".plan");

  // Удаляем класс 'active' у всех кнопок
  planButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Добавляем класс 'active' к выбранной кнопке
  button.classList.add("active");

  // Устанавливаем лимиты в зависимости от выбранного плана
  if (selectedPlan === "expensive") {
    categoryElements.forEach((element) => {
      element.textContent = "10000";
    });
    monthlyLimitElement.textContent = "10000";
  } else if (selectedPlan === "medium") {
    categoryElements.forEach((element) => {
      element.textContent = "5000";
    });
    monthlyLimitElement.textContent = "5000";
  } else if (selectedPlan === "small") {
    categoryElements.forEach((element) => {
      element.textContent = "2500";
    });
    monthlyLimitElement.textContent = "2500";
  }
}

const planButtons = document.querySelectorAll(".plan");
planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    planButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    changePlan(button);
  });
});

// Sample user data (this could come from a server or user input)
const user = {
  name: "den den",
  email: "123",
};

// Function to display user information
function displayUser() {
  // Get the HTML elements
  const userNameElement = document.getElementById("userName");
  const userEmailElement = document.getElementById("userEmail");

  // Set the inner text of the elements to the user data
  userNameElement.innerText = user.name;
  userEmailElement.innerText = user.email;
}

// Call the function to display user information
displayUser();
