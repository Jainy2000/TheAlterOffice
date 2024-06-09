"use client"

// Importing necessary components and libraries
import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts/core'
import ReactECharts from 'echarts-for-react';

// Radar chart component definition
const RadarChartComponent = () => {

    // State hooks for managing chart options, data, and date range
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
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget',
                                symbol: 'none',
                                itemStyle: {
                                    show: false,
                                    color: '#0063F7'
                                },
                                areaStyle: {
                                    opacity: 1
                                }
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending',
                                symbol: 'none',
                                itemStyle: {
                                    color: '#1BE7FF'
                                },
                                areaStyle: {
                                    opacity: 1,
                                    shadowColor: 'rgba(0, 0, 0, 0.102)',
                                    shadowBlur: 8,
                                    shadowOffsetY: 4,
                                    shadowOffsetX: 0
                                }
                            }
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
                radar: {
                    indicator: [
                        { name: 'Jan', max: 6500 },
                        { name: 'Feb', max: 16000 },
                        { name: 'Mar', max: 30000 },
                        { name: 'Apr', max: 38000 },
                        { name: 'May', max: 52000 },
                        { name: 'Jun', max: 25000 }
                    ],
                    textStyle: {
                        color: '#636E72',
                        fontSize: 12,
                        fontWeight: 600
                    },
                    axisLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    splitNumber: 1,
                },
                grid: {
                    left: 0,
                    right: 0,
                    height: '50%',
                    top: 0,
                    bottom: 0,
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
                Radar Chart
                <span className='font-semibold text-[12px] leading-[12px] text-[#636E72] ml-[10px]'>Revenue</span>
            </div>
            {/* Chart component */}
            <ReactECharts style={{ width: '100%', height: '275px' }} option={options} />
        </div>
    );
}

// Exporting the component as default
export default RadarChartComponent;
