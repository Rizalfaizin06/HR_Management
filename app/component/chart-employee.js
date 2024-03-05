"use client";
import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    // x axis
    LinearScale, // y axis
    PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
class MyChart extends Component {
    render() {
        const data = {
            labels: [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember",
            ],
            datasets: [
                {
                    label: "Absent",
                    data: [10, 20, 15, 20, 50, 1, 13, 30, 20, 10, 8, 2],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    fill: true, // Enable line filling for smoother appearance
                    tension: 0.4,
                },
                {
                    label: "Urgent need",
                    data: [1, 13, 30, 20, 10, 10, 8, 2, 13, 30, 20, 23],
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    fill: true, // Enable line filling for smoother appearance
                    tension: 0.4,
                },
            ],
        };

        const options = {
            title: {
                display: true,
                text: "Grafik Penjualan",
            },
            elements: {
                line: {
                    // Adjust line width for better visibility
                    borderWidth: 2,
                },
            },
        };

        return (
            <div>
                <Line data={data} options={options} />
            </div>
        );
    }
}

export default MyChart;
