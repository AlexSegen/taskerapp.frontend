import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

const dataset = {
  label: 'Tasks',
  data: [],
  fill: false,
  borderColor: 'rgb(75, 192, 192)',
  tension: 0.1
}

const initialState = {
  labels: [],
  datasets: [dataset]
}

const getRange = (month, task) => {
  //months range must be from 0 to 11
  const startOf = moment(moment().set('month', month)).startOf('month').format();
  const endOf = moment(moment().set('month', month)).endOf('month').format();

  return moment(moment(task.completedAt)).isBetween(startOf, endOf);
}

const LastDays = ({tasks}) => {

    const [data, setData] = useState(initialState);

    const getData = () => {
      
      const currentMonth = moment().get('month') + 1;

      let labels = [];
      let rawData = [];

      for (let index = 0; index < currentMonth; index++) {
        labels.push(moment(index+1, 'MM').format('MMMM'))
        rawData.push(tasks.filter(task => task.completed && getRange(index, task)).length)
      }

      setData({
        ...data,
         labels,
         datasets: [{
          ...dataset,
          data: rawData
        }]
      });
    }

    useEffect(() => {
        getData();
    }, [tasks])

    return <Line data={data} />;
}
 
export default LastDays;