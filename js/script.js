const plans = document.querySelectorAll(".plan");
const addMoneyButton = document.getElementById("addMoney");
const removeMoneyButton = document.getElementById("removeMoney");
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
function confirmAddMoney() {
  const amount = document.getElementById("addMoneyInput").value;
  console.log("Пополнение на сумму:", amount);
  closeModal("addMoneyModal");
}

// Confirm Removing Money
function confirmRemoveMoney() {
  const amount = document.getElementById("removeMoneyInput").value;
  console.log("Снятие на сумму:", amount);
  closeModal("removeMoneyModal");
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
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;
  const isPermanent = permanentMode.checked;
  const amount = amountInput.value;
  const date = dateInput.value;
  const description = descriptionInput.value;

  console.log("Новая категория:", category);
  console.log("Подкатегория:", subcategory);
  console.log("Постоянный режим:", isPermanent);
  console.log("Сумма:", amount);
  console.log("Дата:", date);
  console.log("Описание:", description);

  closeModal("newCategoryModal");
}

// Logout Functionality
function logout() {
  window.location.href = "../download/index.html";
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
