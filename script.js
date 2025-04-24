// script.js
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");
const ctx = document.getElementById("expense-chart").getContext("2d");

let total = 0.00;
let highestExpense = { amount: 0, element: null };
let expenseData = []; // Stores expense descriptions and amounts

// Initialize Chart.js
let expenseChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [], // Expense descriptions
    datasets: [{
      label: 'Expenses (OMR)',
      data: [], // Expense amounts
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and a positive number.");
    return;
  }

  // Add expense to the list
  const listItem = document.createElement("li");
  listItem.innerHTML = `${description} - OMR ${amount.toFixed(2)} <button class="delete-btn">Delete</button>`;
  expenseList.appendChild(listItem);

  // Update total
  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  // Add data to the chart
  expenseData.push({ description, amount });
  updateChart();

  // Reset form
  expenseForm.reset();

  // Delete button functionality
  listItem.querySelector(".delete-btn").addEventListener("click", () => {
    total -= amount;
    totalDisplay.textContent = total.toFixed(2);

    // Remove data from the chart
    expenseData = expenseData.filter(expense => expense.description !== description || expense.amount !== amount);
    updateChart();

    expenseList.removeChild(listItem);
  });
});

// Function to update the chart
function updateChart() {
  expenseChart.data.labels = expenseData.map(expense => expense.description);
  expenseChart.data.datasets[0].data = expenseData.map(expense => expense.amount);
  expenseChart.update();
}
