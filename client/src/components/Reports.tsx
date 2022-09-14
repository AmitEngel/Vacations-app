import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectVacation } from '../features/vacationSlice';
import { Container } from 'react-bootstrap';
import { selectFollow } from '../features/followSlice';

const Reports = () => {

    const followed = useSelector(selectFollow)
    useEffect(() => {
        console.log(followed)
    }, [])
    const vacation = useSelector(selectVacation);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const dest = vacation.map(v => v.destination)

    const data = {
        dest,
        datasets: [
            {
                label: 'Vacation 1',
                data: dest,
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Vacation 2',
                data: dest,
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
        ]
    }

    return (
        <Container>
            <Bar options={options} data={data} />
        </Container>
    )
}

export default Reports