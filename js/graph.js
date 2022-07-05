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
      backgroundColor: "#012168",
    },
    {
      label: "Pay out",
      data: [180, 120, 465, 270, 190, 250],
      backgroundColor: "#2f80ed",
    },
  ],
};

const efficiencyChartConfig = {
  labels: ["Pay in", "Pay out", "Profit"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#012168", "#002082", "#2f80ed"],
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
