import React, {FC, JSX,} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { ChartPropInterface, ChartOptionsInterface } from "../utils/interfaces";

// material ui imports
import {Grid} from "@material-ui/core";

// style imports
import contentStyles from "../styles/contentStyles";

ChartJS.register(...registerables);

const Chart: FC<ChartPropInterface> = (props: ChartPropInterface): JSX.Element => {
    const {pastData} = props;
    const classes = contentStyles(); // ?? type

    const opts: ChartOptionsInterface = {
        tooltips: {
            intersect: false,
            mode: "index"
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    color: 'rgba(222, 222, 222, 0.3)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(222, 222, 222, 0.3)'
                }
            }
        }
    };

    return (
        <Grid item xs={12} className={classes.chartContainer}>
            <div className={classes.chart}>
                <Line data={pastData} options={opts} />
            </div>
        </Grid>
    );
}

export default Chart;