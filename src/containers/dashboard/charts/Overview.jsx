import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const dataset = {
    label: 'Overview',
    data: [],
    backgroundColor: [
        'rgba(59, 130, 246, 0.9)',
        'rgba(59, 130, 246, 0.5)'
    ],
    hoverOffset: 4
  }

const initialState = {
    labels: ["Completed", "Pending"],
    datasets: [dataset]
  }

const Overview = ({tasks}) => {

    const [data, setData] = useState(initialState);

    const getData = () => {

        const rawData = [
            tasks.filter(task => task.completed).length,
            tasks.filter(task => !task.completed).length,
        ]

        setData({
            ...data,
            datasets: [{
                ...dataset,
                data: rawData
            }]
        })
    }

    useEffect(() => {
        getData();
    }, [tasks])

    return <Doughnut data={data} />;
}
 
export default Overview;