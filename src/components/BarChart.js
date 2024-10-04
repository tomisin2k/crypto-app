// src/components/BarChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class BarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690] // Bar data
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: '100%',
                    toolbar: {
                        show: false
                    },
                    background: 'transparent'
                },
                colors: ['#39ff14'], // Neon green color
                grid: {
                    show: false // Removes grid lines
                },
                xaxis: {
                    categories: ['00', '04', '08', '12', '14', '16', '18'], // Custom X-axis data
                    labels: {
                        style: {
                            colors: '#39ff14' // Neon color for x-axis labels
                        }
                    },
                    axisBorder: {
                        show: false // Hides the X-axis line
                    },
                    axisTicks: {
                        show: false // Hides the ticks on the X-axis
                    }
                },
                yaxis: {
                    show: false // Hides Y-axis completely
                },
                plotOptions: {
                    bar: {
                        columnWidth: '20%', // Makes the bar slimmer
                        borderRadius: 4 // Adds rounded edges to the bars
                    }
                },
                dataLabels: {
                    enabled: false // Hides data labels on bars
                }
            }
        };
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="100%" />
            </div>
        );
    }
}

export default BarChart;
