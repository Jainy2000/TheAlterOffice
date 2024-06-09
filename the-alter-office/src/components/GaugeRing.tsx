"use client"

// Importing necessary components and libraries
import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts/core'
import ReactECharts from 'echarts-for-react';

// Gauge chart component definition
const GaugeRingChartComponent = () => {

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
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        pointer: {
                            show: false
                        },
                        progress: {
                            show: true,
                            overlap: false,
                            roundCap: true,
                            clip: false,
                            itemStyle: {
                                borderWidth: 0
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                width: 40
                            }
                        },
                        splitLine: {
                            show: false,
                            distance: 0,
                            length: 10
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            distance: 50
                        },
                        data: [
                            {
                                value: 25,
                                name: 'Ebay',
                                color: '#00F7BF',
                                pointer: {
                                    show: false
                                },
                                title: {
                                    offsetCenter: ['20%', '120%'],
                                    fontSize: '10px',
                                    fontWeight: 600,
                                },
                                detail: {
                                    show: true,
                                    borderWidth: 0,
                                    offsetCenter: ['0%', '120%'],
                                    formatter: '⬤',
                                    valueAnimation: true,
                                    fontSize: '10px',
                                    fontWeight: 600,
                                    color: '#636E72',
                                },
                                itemStyle: {
                                    color: '#00F7BF',
                                }
                            },
                            {
                                value: 50,
                                name: 'Amazon',
                                pointer: {
                                    show: false
                                },
                                title: {
                                    offsetCenter: ['90%', '120%'],
                                    fontSize: '10px',
                                    fontWeight: 600,
                                },
                                detail: {
                                    valueAnimation: true,
                                    offsetCenter: ['60%', '120%'],
                                    borderWidth: 0,
                                    formatter: '⬤',
                                    color: '#0010F7',
                                    fontSize: '10px',
                                    fontWeight: 600,
                                },
                                itemStyle: {
                                    color: '#0010F7',
                                }
                            },
                            {
                                value: 75,
                                name: 'Web',
                                pointer: {
                                    show: false
                                },
                                title: {
                                    offsetCenter: ['-40%', '120%'],
                                    fontSize: '10px',
                                    fontWeight: 600,
                                },
                                detail: {
                                    valueAnimation: true,
                                    offsetCenter: ['-60%', '120%'],
                                    borderWidth: 0,
                                    formatter: '⬤',
                                    color: '#FFC700',
                                    fontSize: '10px',
                                    fontWeight: 600,
                                },
                                itemStyle: {
                                    color: '#FFC700',
                                }
                            }
                        ],
                        detail: {
                            width: 50,
                            height: 14,
                            fontSize: 14,
                            color: 'inherit',
                            borderColor: 'inherit',
                            borderRadius: 20,
                            borderWidth: 1,
                            formatter: '{value}%'
                        }
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
                Market Place
            </div>
            {/* Chart component */}
            <ReactECharts style={{ width: '100%', height: '275px' }} option={options} />
        </div>
    );
}

// Exporting the component as default
export default GaugeRingChartComponent;