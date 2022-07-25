const htmlDoc = document.querySelector("#htmlBody");
const isDarkTheme = htmlDoc.dataset.theme === "dark";

const ctxRevenue = document.getElementById("revenueChart").getContext("2d");
const ctxEfficiency = document
  .getElementById("efficiencyChart")
  .getContext("2d");

const revenueChartConfig = {
  labels: ["Aug", "Sep", "Nov", "Dec", "Jan", "Feb"],
  datasets: [
    {
      label: "Pay in",
      data: [480, 380, 300, 140, 110, 450],
      backgroundColor: isDarkTheme ? "#6bc048" : "#012168",
    },
    {
      label: "Pay out",
      data: [180, 120, 465, 270, 190, 250],
      backgroundColor: isDarkTheme ? "#43a750" : "#2f80ed",
    },
  ],
};

const efficiencyChartConfig = {
  labels: ["Pay in", "Pay out", "Profit"],
  datasets: [
    {
      data: [200, 50, 100, 400],
      backgroundColor: [
        isDarkTheme ? "#6bc048" : "#012168",
        isDarkTheme ? "#27ae60" : "#002082",
        isDarkTheme ? "#43a750" : "#2f80ed",
        isDarkTheme ? "#1d1d1d" : "#FAFAFA",
      ],
      hoverOffset: 20,
    },
  ],
};

const RevenueChart = new Chart(ctxRevenue, {
  type: "bar",
  data: revenueChartConfig,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Monthly",
        align: "start",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const EfficiencyChart = new Chart(ctxEfficiency, {
  type: "doughnut",
  data: efficiencyChartConfig,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});
