"use client"

// Importing necessary components and libraries
import AreaChartComponent from '@/components/AreaChart';
import BarChartComponent from '@/components/BarChart';
import CandleStickChartComponent from '@/components/CandleStickChart';
import DoughnutChartComponent from '@/components/Doughnut';
import GaugeRingChartComponent from '@/components/GaugeRing';
import HeatMapChartComponent from '@/components/HeatMap';
import LaidBarChartComponent from '@/components/LaidBarChart';
import LineChartComponent from '@/components/LineChart';
import RadarChartComponent from '@/components/Radar';
import ScatterChartComponent from '@/components/ScatterChart';
import React from 'react'

// Chart Wrapper component definition  with props
const ChartWrapper = ({ data }: { data: any }) => {

    // JSX returned by the component
    return (
        <div style={{ rowGap: '32px' }} className='flex flex-col'>
            <LineChartComponent data={data} />
            <BarChartComponent data={data} />
            <AreaChartComponent data={data} />
            <ScatterChartComponent data={data} />
            <div style={{ columnGap: '32px' }} className='flex flex-row w-full'>
                <LaidBarChartComponent data={data} />
                <CandleStickChartComponent data={data} />
            </div>
            <div style={{ columnGap: '32px' }} className='flex flex-row w-full'>
                <HeatMapChartComponent data={data} />
                <DoughnutChartComponent />
            </div>
            <div style={{ columnGap: '32px' }} className='flex flex-row w-full'>
                <RadarChartComponent />
                <GaugeRingChartComponent />
            </div>
        </div>
    )
}

// Exporting the component as default
export default ChartWrapper