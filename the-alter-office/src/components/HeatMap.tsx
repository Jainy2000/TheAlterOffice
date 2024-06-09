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

// HeatMap chart component definition
const HeatMapChartComponent = ({ data }: { data: any }) => {

    // State hooks for managing chart options, data, and date range
    const [options, setOptions] = useState<echarts.EChartsCoreOption>({});
    const [chartData, setChartData] = useState<{ values: number[], extraValues: number[], dates: string[] } | undefined>(undefined);
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
        const values: number[] = jsonData.map((entry: { value: number }) => entry.value.toFixed(2));
        const dates: string[] = jsonData.map((entry: { date: string }) => entry.date);
        const extraValues: number[] = values.map(value => value + (Math.random() - 0.5) * 2); // Add random variation
        setChartData({ values, extraValues, dates });
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

    // Handler for series numbers
    const numbers = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
        .map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });

    // Function to set chart formatting options
    const setFormattingOptions = () => {
        try {
            setOptions({
                xAxis: {
                    type: 'category',
                    data: chartData?.values,
                },
                yAxis: {
                    type: 'category',
                    data: chartData?.dates,
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    show: false,
                    inRange: {
                        color: ['#EBFAFA', '#55B1F3', '#0063F7', '#0010F7'] //From smaller to bigger value ->
                    }
                },
                series: [
                    {
                        name: 'Expense',
                        type: 'heatmap',
                        data: numbers,
                    },
                ],
                grid: {
                    left: 10,
                    right: 0,
                    top: 30,
                    bottom: 50,
                    // height: '50%',
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
        <div className='bg-white p-[24px] h-[350px] w-[50%] rounded-[7px] border border-[#DFE6E9]'>
            {/* Header section with title and date pickers */}
            <div className='flex flex-row justify-between items-center mb-[16px]'>
                <div className='flex items-baseline'>
                    <span className='font-medium text-[16px] leading-[24px] text-[#2D3436]'>HeatMap Chart</span>
                    <span className='font-semibold text-[12px] leading-[12px] text-[#636E72] ml-[10px]'>Sales</span>
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
export default HeatMapChartComponent;
