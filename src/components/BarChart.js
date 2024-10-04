import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ timeRange }) => {
    const [chartData, setChartData] = useState({
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690]
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
            colors: ['#39ff14'],
            grid: {
                show: false
            },
            xaxis: {
                categories: ['00', '04', '08', '12', '14', '16', '18'],
                labels: {
                    style: {
                        colors: '#39ff14'
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '20%',
                    borderRadius: 4
                }
            },
            dataLabels: {
                enabled: false
            },
            // Tooltip configuration for hover info
            tooltip: {
                theme: 'dark', // 'dark' allows custom text color
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
                        color: '#000', // Text color set to black for better visibility
                    }
                }
            }
        }
    });

    useEffect(() => {
        // Update chart data based on selected time range
        const updateChartData = () => {
            let newData, newCategories;
            switch (timeRange) {
                case '1 hour':
                    newData = [100, 150, 120, 180, 130, 170, 140];
                    newCategories = ['00', '10', '20', '30', '40', '50', '60'];
                    break;
                case '6 hours':
                    newData = [200, 250, 220, 280, 230, 270];
                    newCategories = ['00', '01', '02', '03', '04', '05'];
                    break;
                case '24 hours':
                    newData = [400, 430, 448, 470, 540, 580, 690];
                    newCategories = ['00', '04', '08', '12', '16', '20', '24'];
                    break;
                // Add more cases for other time ranges
                default:
                    newData = [400, 430, 448, 470, 540, 580, 690];
                    newCategories = ['00', '04', '08', '12', '16', '20', '24'];
            }

            setChartData(prevState => ({
                ...prevState,
                series: [{
                    data: newData
                }],
                options: {
                    ...prevState.options,
                    xaxis: {
                        ...prevState.options.xaxis,
                        categories: newCategories
                    }
                }
            }));
        };

        updateChartData();
    }, [timeRange]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height="100%" />
        </div>
    );
};

export default BarChart;
