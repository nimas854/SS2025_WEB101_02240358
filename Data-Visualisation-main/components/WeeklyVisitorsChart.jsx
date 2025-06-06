"use client";

import { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { format, parseISO } from "date-fns";
import { customerData, weeklyVisitors } from "../src/data/salesData";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function CombinedAnalyticsChart() {
  const [visitorsData, setVisitorsData] = useState({
    labels: [],
    datasets: [],
  });

  const [acquisitionData, setAcquisitionData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Prepare Weekly Visitors Line Chart data
    const visitorLabels = weeklyVisitors.map((item) => `Week ${item.week}`);
    const visitorDataset = {
      fill: true,
      label: "Weekly Visitors",
      data: weeklyVisitors.map((item) => item.visitors),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    };

    setVisitorsData({
      labels: visitorLabels,
      datasets: [visitorDataset],
    });

    // Prepare Customer Acquisition Bar Chart data
    const acquisitionLabels = customerData.map((item) =>
      format(parseISO(item.date), "MMM dd")
    );

    const newCustomerDataset = {
      label: "New Customers",
      data: customerData.map((item) => item.newCustomers),
      backgroundColor: "rgba(53, 162, 235, 0.7)",
    };

    const returningCustomerDataset = {
      label: "Returning Customers",
      data: customerData.map((item) => item.returningCustomers),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    };

    setAcquisitionData({
      labels: acquisitionLabels,
      datasets: [newCustomerDataset, returningCustomerDataset],
    });
  }, []);

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Weekly Visitors Trend",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
    plugins: {
      title: {
        display: true,
        text: "Customer Acquisition Over Time",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div style={{ height: "400px" }}>
        <Line data={visitorsData} options={lineChartOptions} />
      </div>
      <div style={{ height: "400px" }}>
        <Bar data={acquisitionData} options={barChartOptions} />
      </div>
    </div>
  );
}
