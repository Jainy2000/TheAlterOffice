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

// CandleStick chart component definition
const CandleStickChartComponent = ({ data }: { data: any }) => {

    // State hooks for managing chart options, data, and date range
    const [options, setOptions] = useState<echarts.EChartsCoreOption>({});
    const [chartData, setChartData] = useState<{ values: number[][], dates: string[] } | undefined>(undefined);
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
        const result: number[][] = [];
        const dates: string[] = jsonData.map((entry: { date: string }) => entry.date);
        const values: number[] = jsonData.map((point: { value: any; }) => Math.abs(point.value));

        for (let i = 0; i < values.length; i += 4) {
            result.push(values.slice(i, i + 4));
        }
        setChartData({ values: result, dates });
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
                yAxis: {},
                series: [
                    {
                        data: chartData?.values,
                        name: 'Expense',
                        type: 'candlestick',
                        lineStyle: {
                            color: '#0063F7',
                            width: 3,
                        },
                        itemStyle: {
                            color: '#0063F7',
                        }
                    }
                ],
                grid: {
                    left: 0,
                    right: 0,
                    top: 30,
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
                    <span className='font-medium text-[16px] leading-[24px] text-[#2D3436]'>CandleStick Chart</span>
                    <span className='font-semibold text-[12px] leading-[12px] text-[#636E72] ml-[10px]'>Doge Coin</span>
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
export default CandleStickChartComponent;
