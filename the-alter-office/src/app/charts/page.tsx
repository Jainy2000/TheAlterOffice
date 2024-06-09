// Importing necessary components and libraries
import LineChartComponent from '@/components/LineChart'
import ChartWrapper from '@/wrapper/ChartWrapper'
import { LineChart } from 'echarts/charts'
import Image from 'next/image'
import React from 'react'

// Async function to fetch data and render the component
const Charts = async () => {
    // Fetching data from the given URL with no-store caching
    const res = await fetch(`https://cdn.jsdelivr.net/gh/highcharts/highcharts@c55c2f39d531b227dc239d2d63d6eef882260cb6/samples/data/worldbank-norway.json`, { cache: 'no-store' });
    const data = await res.json();

    // JSX returned by the component
    return (
        <div className='bg-[#F0F3F5] pt-[36px] h-fulls px-[100px] w-full'>
            {/* Header section with icons and text */}
            <div className='min-h-[64px] px-[24px] py-[16px] flex-wrap bg-white flex justify-between flex-row items-center rounded-[7px]'>
                <div className='flex flex-row items-center flex-wrap'>
                    <div className='h-[32px] w-[32px] bg-[#F7FAFC] rounded-[9px] flex items-center justify-center'>
                        <Image
                            src="/Document.png"
                            width={16}
                            height={16}
                            alt="Document"
                        />
                    </div>
                    <span className='text-[14px] whitespace-nowrap font-semibold leading-[16px] text-[#2D3436]'>Do you know the latest update of 2021? 🎉</span>
                    <span className='text-[14px] whitespace-nowrap font-normal leading-[16px] text-[#FF8B9A]'>Our roadmap is alive for future updates.</span>
                    <Image
                        src="/Upload.png"
                        width={24}
                        height={24}
                        alt="Upload"
                    />
                </div>
                <div className='flex flex-row items-center gap-x-[24px]'>
                    <Image
                        src="/Language.png"
                        width={24}
                        height={24}
                        alt="Language"
                    />
                    <Image
                        src="/Iconly.png"
                        width={24}
                        height={24}
                        alt="Iconly"
                    />
                    <Image
                        src="/chat-3-line.png"
                        width={24}
                        height={24}
                        alt="chat-3-line"
                    />
                    <Image
                        src="/notification.png"
                        width={24}
                        height={24}
                        alt="notification"
                    />
                    <Image
                        src="/Memoji-2.png"
                        width={24}
                        height={24}
                        alt="Memoji-2"
                    />
                </div>
            </div>
            {/* Breadcrumb navigation */}
            <div className='font-medium text-[14px] leading-[16px] mt-[32px] text-[#0010F7] flex gap-x-[8px]'>
                Home
                <span className='text-[#B2BEC3]'>/</span>
                Main
                <span className='text-[#B2BEC3]'>/</span>
                Widgets
                <span className='text-[#B2BEC3]'>/</span>
                Charts
            </div>
            {/* Description text */}
            <div className='text-[14px] font-normal leading-[20px] text-[#636E72] mt-[68px]'>I used ECharts and customized for the assignment task</div>
            {/* Chart wrapper component */}
            <div className='mt-[32px] h-full w-full'>
                <ChartWrapper data={data} />
            </div>
            {/* Footer text */}
            <div className='text-[12px] font-semibold text-[#636E72] h-[78px] mt-[32px] flex items-center w-full'>
                COPYRIGHT ©2022 Hypeople, All rights Reserved
            </div>
        </div>
    )
}

// Exporting the component as default
export default Charts