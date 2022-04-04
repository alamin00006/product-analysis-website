import React from 'react';

import { PieChart, Pie } from 'recharts';

const TwoLevelPieChart = () => {
    const data01 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    const data02 = [
        {
            "month": "Mar",
            "investment": 200000,
            "sell": 241,
            "revenue": 20401
        },
        {
            "month": "Apr",
            "investment": 300000,
            "sell": 423,
            "revenue": 34500
        },
        {
            "month": "May",
            "investment": 400000,
            "sell": 726,
            "revenue": 57010
        },
        {
            "month": "Jun",
            "investment": 600000,
            "sell": 529,
            "revenue": 50405
        },
        {
            "month": "Jul",
            "investment": 700000,
            "sell": 601,
            "revenue": 60900
        },
        {
            "month": "Aug",
            "investment": 800000,
            "sell": 670,
            "revenue": 51000
        }
    ]



    return (
        <>
        
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />

          <Pie data={data02} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        <h1>Investment VS Revenue</h1>
        </>
 
    );
};

export default TwoLevelPieChart;