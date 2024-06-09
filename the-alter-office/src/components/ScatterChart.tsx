"use client"

// Importing necessary components and libraries
import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts/core'
import ReactECharts from 'echarts-for-react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DataItem } from '@/models/chart.model';

// Scatter chart component definition
const ScatterChartComponent = ({ data }: { data: any }) => {

    // State hooks for managing chart options, data, and date range
    const [options, setOptions] = useState<echarts.EChartsCoreOption>({});
    const [chartData, setChartData] = useState<{ values: number[], extraValues: number[], randomValues: number[], dates: string[] } | undefined>(undefined);
    const [startYear, setStartYear] = useState<Dayjs | null>(null);
    const [endYear, setEndYear] = useState<Dayjs | null>(null);
    const [jsonData, setJsonData] = useState(data[1])

    // Effect hook to extract values and dates from data
    useEffect(() => {
        if (data) {
            extractValuesAndDates();
        }
    }, [data, jsonData]);

    // Effect hook to set formatting options for the chart
    useEffect(() => {
        if (chartData) {
            setFormattingOptions();
        }
    }, [chartData]);

    // Function to extract values and dates from jsonData
    function extractValuesAndDates() {
        const values: number[] = jsonData.map((entry: { value: number }) => entry.value);
        const dates: string[] = jsonData.map((entry: { date: string }) => entry.date);
        const extraValues: number[] = values.map(value => value + (Math.random() - 0.5) * 2); // Add random variation
        const randomValues: number[] = values.map(value => value + (Math.random() - 0.25) * 4); // Add random variation 2
        setChartData({ values, extraValues, randomValues, dates });
    }

    // Handler for start date change
    const handleStartDateChange = (e: Dayjs | null) => {
        setStartYear(e)
        if (e && endYear) {
            filterDataByYearRange(e.year(), endYear.year());
        }
    }

    // Handler for end date change
    const handleEndDateChange = (e: Dayjs | null) => {
        setEndYear(e)
        if (e && startYear) {
            filterDataByYearRange(startYear!.year(), e.year());
        }
    }

    // Function to set chart formatting options
    const setFormattingOptions = () => {
        try {
            setOptions({
                xAxis: {
                    type: 'category',
                    data: chartData?.dates,
                    axisLine: {
                        lineStyle: {
                            color: '#DFE6E9',
                            width: 0.5
                        }
                    },
                    axisLabel: {
                        color: '#636E72',
                        fontSize: 14,
                        fontWeight: 400
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: chartData?.values,
                        name: 'Nike',
                        type: 'scatter',
                        itemStyle: {
                            color: '#00F7BF'
                        }
                    },
                    {
                        data: chartData?.extraValues,
                        name: 'Adidas',
                        type: 'scatter',
                        itemStyle: {
                            color: '#55B1F3'
                        }
                    },
                    {
                        data: chartData?.randomValues,
                        name: 'Puma',
                        type: 'scatter',
                        itemStyle: {
                            color: '#0010F7'
                        }
                    }
                ],
                legend: {
                    show: true,
                    right: 0,
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
                    bottom: 50,
                    containLabel: true
                }
            });
        }
        catch (error) {
            ("Error: " + error);
        }
    }

    // Function to filter data by year range
    function filterDataByYearRange(startYear: number, endYear: number): DataItem[] {
        const filteredData = data[1].filter((item: any) => {
            const year = parseInt(item.date);
            return year >= startYear && year <= endYear;
        });
        setJsonData(filteredData);
        return filteredData;
    }

    // JSX returned by the component
    return (
        chartData &&
        <div className='bg-white p-[24px] h-[350px] w-full rounded-[7px] border border-[#DFE6E9]'>
            {/* Header section with title and date pickers */}
            <div className='flex flex-row justify-between items-center mb-[16px]'>
                <div className='flex items-baseline'>
                    <span className='font-medium text-[16px] leading-[24px] text-[#2D3436]'>Scattered Chart</span>
                    <span className='font-semibold text-[12px] leading-[12px] text-[#636E72] ml-[10px]'>Brands</span>
                </div>
                <div className="flex flex-row w-[224px] gap-x-[10px]">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            views={["year"]}
                            value={startYear}
                            minDate={dayjs('1993')}
                            maxDate={dayjs()}
                            onChange={handleStartDateChange}
                            sx={{

                            }}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            views={["year"]}
                            value={endYear}
                            onChange={handleEndDateChange}
                            minDate={startYear ?? dayjs('1993')}
                            maxDate={dayjs()}
                            sx={{

                            }}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            {/* Chart component */}
            <ReactECharts style={{ width: '100%', height: '275px' }} option={options} />
        </div>
    );
}

// Exporting the component as default
export default ScatterChartComponent;
