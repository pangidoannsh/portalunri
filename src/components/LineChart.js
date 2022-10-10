
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },

    },
};

const LineChart = (props) => {

    const labels = [];
    props.dataset.forEach(item => {
        labels.push(item.year)
    });
    const data = {
        labels,
        datasets: [
            {
                label: 'IP',
                data: props.dataset.map(item => item.ip),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'IPK',
                data: props.dataset.map(item => item.ipk),
                borderColor: '#029FFF',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },

        ],
    };
    return (
        <>
            <Line options={options} data={data} />
        </>
    );
}

export default LineChart;
