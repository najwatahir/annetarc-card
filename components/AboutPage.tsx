import React from "react"
import Image from "next/image"

const AboutPage = () => {
    return (
        <section id="about" className=" mt-0 pb-6 bg-[#EDEDED]">
            <div className="md:pt-5 md:pb-5 p-10 lg:p-2">
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 mr-auto ml-auto justify-between p-6">
                        <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:text-center text-[#1E1E1E] font-['Concert One']">
                            ABOUT ME
                        </h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                        <p className="text-[#1E1E1E] mb:text-lg text-base">
                            My name is <span>Najwa Tahir</span>, you can call me <span>Najwa</span> for short. I am a 2nd year Vocational High School student majoring in Software Engineering at SMKN 1 Denpasar.
                        </p>
                        <br />
                        <p>
                            I start coding on the first year of Vocational High School. I like problem solving and logic things, so that was the reason i choosed Software Engineering major. My dream is to be a Software Engineer.

                        </p>
                        <br />
                        <p className="mb-10">
                            I am a very curious person. I love to learning new things everyday, especially in improving my coding skill. I always try to trust every single process I make.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-center">
                        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center mx-auto">SKILLS & ABILITIES</h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                        <div className="flex flex-wrap flex-row z-10  items-center justify-center">
                            <div className="skill-box">
                                <p>HTML</p>
                                <img src="/images/html.png" alt="" />
                            </div>
                            <div className="skill-box">
                                <p>CSS</p>
                                <img src="/images/css.png" alt="" />
                            </div>
                            <div className="skill-box">
                                <p>JavaScript</p>
                                <img src="/images/js.png" alt="" />
                            </div>
                            <div className="skill-box">
                                <p>Tailwind CSS</p>
                                <img src="/images/tailwind-css.png" alt="" />
                            </div>
                            <div className="skill-box">
                                <p>PHP</p>
                                <img className="php-img" src="/images/php.png" alt="" />
                            </div>
                            <div className="skill-box">
                                <p>MySQL</p>
                                <img src="/images/MySQL.png" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-row z-10 justify-center">
                            <div className="ability-box">
                                <p>Problem Solving</p>
                            </div>
                            <div className="ability-box">
                                <p>Creative Thinking</p>
                            </div>
                            <div className="ability-box">
                                <p>Team Working</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutPage