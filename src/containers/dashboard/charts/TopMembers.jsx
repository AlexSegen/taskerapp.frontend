import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const dataset = {
    label: 'Completed tasks',
    data: [],
    backgroundColor: [
      'rgba(59, 130, 246, 0.5)',
      'rgba(59, 130, 246, 0.5)',
      'rgba(59, 130, 246, 0.5)'
    ],
    borderColor: [
      'rgba(59, 130, 246, 0.9)',
      'rgba(59, 130, 246, 0.9)',
      'rgba(59, 130, 246, 0.9))'
    ],
    borderWidth: 1
  }

const initialState = {
    labels: [],
    datasets: [dataset]
}

const TopMembers = ({tasks}) => {

    const [data, setData] = useState(initialState);

    const getGroup = () => {

        let group = [];
        const filtered = tasks.filter(task => task.completed && task.completedBy);

        filtered.reduce((_, current) => {
            const index = group.findIndex(m => m._id === current.completedBy._id);
            if(index > -1) {
                group[index].count++;
            } else {
                group.push({
                    _id: current.completedBy._id,
                    name: `${current.completedBy.first_name}`,
                    count: 0
                });
            }
        }, {});
        
        group = group.sort((a, b) =>  {
            if ( a.count < b.count )
              return 1;
            if ( a.count > b.count )
              return -1;
            
            return 0;
        });

        group = group.filter(user => user.count > 0);

        return group.splice(0,3);
        
    }

    const getData = () => {

        const group = getGroup();

        let labels = [];
        let rawData = [];

        group.forEach(user => {
            labels.push(user.name);
            rawData.push(user.count);
        });

        setData({
            ...data,
            labels,
            datasets: [{
                ...dataset,
                data: rawData
            }]
        })
    }

    useEffect(() => {
        getData();
    }, [tasks])

    return <Bar data={data} />;
}
 
export default TopMembers;