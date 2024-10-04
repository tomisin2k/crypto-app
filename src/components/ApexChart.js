// src/components/ApexChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Minting Data",
                data: [150, 200, 250, 300, 350, 400] // Adjust this data as needed
            }],
            options: {
                chart: {
                    type: 'area',
                    height: '100%',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#39ff14'], // Neon green color
                grid: {
                    show: false // Removes grid lines
                },
                xaxis: {
                    categories: ['14:00', '17:00', '20:00', '23:00', '02:00', '05:00', '08:00', '11:00'], // Custom X-axis times
                    labels: {
                        style: {
                            colors: '#39ff14' // Neon color for x-axis labels
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#39ff14' // Neon color for y-axis labels
                        }
                    }
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#39ff14',
                                opacity: 0.7
                            },
                            {
                                offset: 100,
                                color: '#39ff14',
                                opacity: 0.9
                            }
                        ]
                    }
                },
                // Tooltip configuration
                tooltip: {
                    theme: 'dark', // Set tooltip theme to dark
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif'
                    },
                    marker: {
                        show: true
                    },
                    x: {
                        show: true
                    },
                    y: {
                        formatter: function (val) {
                            return val + " units"; // Customize tooltip value display
                        },
                        style: {
                            color: '#000' // Black color for tooltip text
                        }
                    }
                }
            }
        };
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="100%" />
            </div>
        );
    }
}

export default ApexChart;
