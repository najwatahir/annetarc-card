"use client"

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <main id="home" className={`bg-[#FEFAEE] pt-2 ${isActive ? 'page active' : 'page'}`}>
            <div className="mt-24 flex flex-col text-center items-center justify-center pl-20 pr-20 animate-fadeIn animation-delay-2 sm:py-20 md:pt-40 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:mr-8">
                    <Image
                        src="/images/home_icon.jpg"
                        alt=""
                        width={350}
                        height={350}
                        className="w-[400px]"
                    />
                </div>
                <div className="md:mt-2">
                    <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-5xl text-[#1E1E1E] pixelify">Najwa Tahir</h1>
                    <p className="text-xs mt-4 mb-6 md:text-sm text-[#B19DC5] jetbrains">
                        Annetarc/Annet
                    </p>
                    <p className="text-sm mt-4 mb-6 md:text-xl text-[#1E1E1E] jetbrains">
                        Information Technology Student
                    </p>
                    <span className="flex items-center mb-4 justify-center md:justify-start">
                        <div>
                            <Link href="https://github.com/najwatahir">
                                <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 0 256 256" className='text-[#1E1E1E] w-8 h-8 fill-current hover:bg-[#b7a7c6] hover:rounded-md p-1'>
                                    <rect fill="currentColor" x="64" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="112" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="128" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="144" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="0" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="64" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="112" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="128" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="144" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="16" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="64" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="112" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="128" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="144" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="32" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="112" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="128" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="144" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="48" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="64" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="64" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="64" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="64" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="64" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="64" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="80" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="80" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="80" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="80" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="80" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="80" width="16" height="16" />
                                    <rect fill="currentColor" x="0" y="96" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="96" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="96" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="96" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="96" width="16" height="16" />
                                    <rect fill="currentColor" x="240" y="96" width="16" height="16" />
                                    <rect fill="currentColor" x="0" y="112" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="112" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="112" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="112" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="112" width="16" height="16" />
                                    <rect fill="currentColor" x="240" y="112" width="16" height="16" />
                                    <rect fill="currentColor" x="0" y="128" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="128" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="128" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="128" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="128" width="16" height="16" />
                                    <rect fill="currentColor" x="240" y="128" width="16" height="16" />
                                    <rect fill="currentColor" x="0" y="144" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="144" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="144" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="144" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="144" width="16" height="16" />
                                    <rect fill="currentColor" x="240" y="144" width="16" height="16" />
                                    <rect fill="currentColor" x="0" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="240" y="160" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="64" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="176" width="16" height="16" />
                                    <rect fill="currentColor" x="16" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="64" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="144" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="224" y="192" width="16" height="16" />
                                    <rect fill="currentColor" x="32" y="208" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="208" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="208" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="208" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="208" width="16" height="16" />
                                    <rect fill="currentColor" x="208" y="208" width="16" height="16" />
                                    <rect fill="currentColor" x="48" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="64" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="192" y="224" width="16" height="16" />
                                    <rect fill="currentColor" x="64" y="240" width="16" height="16" />
                                    <rect fill="currentColor" x="80" y="240" width="16" height="16" />
                                    <rect fill="currentColor" x="96" y="240" width="16" height="16" />
                                    <rect fill="currentColor" x="160" y="240" width="16" height="16" />
                                    <rect fill="currentColor" x="176" y="240" width="16" height="16" />
                                </svg>
                            </Link>
                        </div>
                        <Link className="ml-4 text-[#000000] hover:bg-[#b7a7c6] hover:rounded-full" href="mailto:najwatahir186@gmail.com" target="_blank">
                            <svg fill="#000000" className='text-[#1E1E1E] w-8 h-8 fill-current hover:bg-[#b7a7c6] hover:rounded-md p-1' viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-email"><path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" /></svg>
                        </Link>
                        <Link href="https://www.linkedin.com/in/najwatahir/" target="_blank" className="ml-4 text-[#e34343] hover:text-[#70667a]">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-current hover:bg-[rgb(183,167,198)] hover:rounded-md p-1' viewBox="0 0 512 512" version="1.1"><path d="" stroke="none" fill="#080404" fillRule="evenodd" /><path d="M 33 16.500 L 33 33 16.500 33 L 0 33 0 67 L 0 101 16.500 101 L 33 101 33 117.500 L 33 134 67 134 L 101 134 101 117.500 L 101 101 117.500 101 L 134 101 134 67 L 134 33 117.500 33 L 101 33 101 16.500 L 101 0 67 0 L 33 0 33 16.500 M 11 339.500 L 11 512 67 512 L 123 512 123 339.500 L 123 167 67 167 L 11 167 11 339.500 M 155 339.500 L 155 512 211.500 512 L 268 512 268 406.500 L 268 301 284.500 301 L 301 301 301 284.500 L 301 268 334 268 L 367 268 367 284.500 L 367 301 383.500 301 L 400 301 400 406.500 L 400 512 456 512 L 512 512 512 372.500 L 512 233 495.500 233 L 479 233 479 216.500 L 479 200 462.500 200 L 446 200 446 183.500 L 446 167 367.500 167 L 289 167 289 183.500 L 289 200 272.500 200 L 256 200 256 183.500 L 256 167 205.500 167 L 155 167 155 339.500" stroke="none" fill="#040404" fillRule="evenodd" /></svg>
                        </Link>
                    </span>
                    <Link href="/about">
                        <button className="home-button pixelify mt-4">Get to know me</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default HomePage