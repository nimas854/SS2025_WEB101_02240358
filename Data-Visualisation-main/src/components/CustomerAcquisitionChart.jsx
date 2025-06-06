"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { format, parseISO } from "date-fns";
import { customerData } from "../src/data/salesData";
import { useState, useEffect } from "react";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CustomerAcquisitionChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels = customerData.map((item) =>
      format(parseISO(item.date), "MMM dd")
    );

    setChartData({
      labels,
      datasets: [
        {
          label: "New Customers",
          data: customerData.map((item) => item.newCustomers),
          backgroundColor: "rgba(53, 162, 235, 0.7)",
        },
        {
          label: "Returning Customers",
          data: customerData.map((item) => item.returningCustomers),
          backgroundColor: "rgba(255, 99, 132, 0.7)",
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Customer Acquisition Over Time",
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Bar options={options} data={chartData} />
    </div>
  );
}
