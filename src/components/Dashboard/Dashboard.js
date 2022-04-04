
import React from 'react';
import { BarChart, Bar, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart';
import './Dashboard.css'

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 71241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 51423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 81726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 710529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 210601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 220670,
            "revenue": 61000
        }
    ]
    return (
       <div className='charts'>
           
            <BarChart width={730} height={250} data={data}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="month" />
         <YAxis/>
         <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
            <Bar dataKey="investment" fill="#82ca9d" />
            
            </BarChart>
            <h1 className='title'>Investment VS sell</h1>
            <TwoLevelPieChart></TwoLevelPieChart>
            </div>    
            
       
    );
};

export default Dashboard;