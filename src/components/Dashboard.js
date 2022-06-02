import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = (props) => {

    const opts = {
        tooltips: {
            intersect: false,
            mode: "index"
        },
        responsive: true,
        maintainAspectRatio: false
    };
    return (
        <div className="dashboard">
            <div className="chart-container">
                <Line data={props.data} options={opts} />
            </div>
        </div>
    );
}

export default Dashboard;