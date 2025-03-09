"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import React from 'react'

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        labels: ['Bank 1', 'Bank 2'],
        datasets: [
            {
                label: 'Banks',
                data: [20,345.70,5460.90],
                backgroundColor: ['#0747b612','#2265d8','#2f91fa'],
            }
        ]
    }
  
    return <Doughnut 
    data={data}
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
}

export default DoughnutChart