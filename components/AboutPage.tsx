"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image"
import Footer from "./Footer";

const AboutPage = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <main className="flex flex-col min-h-screen">
            <div className={`flex-1 sm:mt-24 mt-10 min-h-screen pb-6 ${isActive ? 'page active' : 'page'}`}>
                <div className="md:pt-5 md:pb-5 p-10 lg:p-2 bg-[#FEFAEE]">
                    <div className="space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                        <div className="md:w-1/2 mr-auto ml-auto justify-between p-6">
                            <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:text-center text-[#1E1E1E] pixelify">
                                ABOUT ME
                            </h1>
                            <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                            <p className="text-[#1E1E1E] mb:text-xl text-base jetbrains">
                                Hi folks! call me <span className="font-semibold">Najwa</span> for short. I also go by name <span className="font-semibold">Annet</span> on internet. I&apos;m currently studying on Information Technology @ Udayana University.
                            </p>
                            <br />
                            <br />
                            <p className="mb-10 text-[#1E1E1E] mb:text-xl text-base jetbrains">
                                I have big curiosity in the world of STEM. Also my side daily curiosity is literature, both reading and writing. And any other interests that create my existence.
                            </p>
                        </div>
                        <div className="text-center mr-auto ml-auto justify-between md:px-20">
                            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center mx-auto pixelify">INTERESTS</h1>
                            <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                            <div className="flex flex-wrap justify-center">
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="mr-4"
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Book</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="mr-2"
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Animanga</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                        <p className="jetbrains mb:text-xl text-base">J-Pop Songs</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="mr-7"
                                        />
                                        <p className="jetbrains text-center mb:text-xl text-base">Cat</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Genshin Impact</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="mr-2"
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Pokemon</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="mr-4"
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Marvel</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Project Sekai</p>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/purple-heart.png"
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                        <p className="jetbrains mb:text-xl text-base">Harry Potter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default AboutPage