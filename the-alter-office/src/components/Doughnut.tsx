"use client"

// Importing necessary components and libraries
import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts/core'
import ReactECharts from 'echarts-for-react';

// Doughnut chart component definition
const DoughnutChartComponent = () => {

    // State hooks for managing chart options
    const [options, setOptions] = useState<echarts.EChartsCoreOption>({});

    // Effect hook to set formatting options for the chart
    useEffect(() => {
        setFormattingOptions();
    }, []);


    // Function to set chart formatting options
    const setFormattingOptions = () => {
        try {
            setOptions({
                series: [
                    {
                        type: 'pie',
                        radius: ['60%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            formatter: 'Total\n\nRs. 2363',
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: false,
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Marketing', itemStyle: { color: '#0010F7' } },
                            { value: 735, name: 'Payments', itemStyle: { color: '#55B1F3' } },
                            { value: 580, name: 'Bills', itemStyle: { color: '#1BE7FF' } },
                        ]
                    }
                ],
                legend: {
                    show: true,
                    left: 'center',
                    top: 'bottom',
                    lineStyle: {
                        width: 0,
                        inactiveWidth: 0,
                    },
                    textStyle: {
                        color: '#636E72',
                        fontSize: 12,
                        fontWeight: 600
                    },
                    icon: 'circle',
                    itemHeight: 6,
                    itemWidth: 6,
                },
                grid: {
                    left: 0,
                    right: 0,
                    top: 50,
                    bottom: 30,
                    containLabel: true
                }
            });
        }
        catch (error) {
            ("Error: " + error);
        }
    }

    // JSX returned by the component
    return (
        <div className='bg-white p-[24px] h-full w-[50%] rounded-[7px] border border-[#DFE6E9]'>
            {/* Header section with title */}
            <div className='font-medium text-[16px] leading-[24px] text-[#2D3436]'>
                Donut Chart
                <span className='font-semibold text-[12px] leading-[12px] text-[#636E72] ml-[10px]'>Expenses</span>
            </div>
            {/* Chart component */}
            <ReactECharts style={{ width: '100%', height: '275px' }} option={options} />
        </div>
    );
}

// Exporting the component as default
export default DoughnutChartComponent;
