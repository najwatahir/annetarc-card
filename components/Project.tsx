import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./Slideup"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const Project = () => {
    return (
        <section id="project" className="bg-[#EDEDED] pt-5">
            <h1 className="my-5 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E]">
                PROJECT
                <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
            </h1>
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4">
                        <div className="h-fit rounded-lg overflow-hidden cursor-default">
                            <img className="lg:h-40 w-screen object-cover object-center"
                                src="/images/todo.jpg" alt="Simple To-Do List" />
                            <div className="p-4">
                                <h1 className="text-xl font-semibold mb-3">A Simple To-Do List</h1>
                                <p className="leading-relaxed mb-3">My first small project I made with HTML, CSS, and JavaScript. The design is very simple because I made this just for fun & fill my boredness time.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://purple-to-do.netlify.app/" target="_blank"><button className="visit-button">Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4">
                        <div className="h-fit rounded-lg overflow-hidden cursor-default">
                            <img className="lg:h-40 md:h-48 w-screen object-cover object-center"
                                src="/images/wordpressProject.jpg" alt="Personal Website with WordPress" />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold mb-3">Personal WordPress Site</h1>
                                <p className="leading-relaxed mb-3">A personal website I created with WordPress for my school OOP class project. The contents are flat because I didnt have idea what I want to put.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://wawaffle.wordpress.com/" target="_blank"><button className="visit-button">Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4">
                        <div className="h-fit rounded-lg overflow-hidden cursor-default">
                            <img className="lg:h-40 w-screen object-cover object-center"
                                src="/images/webBali.jpg" alt="Website about Pulau Bali" />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold mb-3">Pulau Bali Website</h1>
                                <p className="leading-relaxed mb-3">A school project that I made with my friends in group. This project we made on Web Programming class. We use HTML, CSS, and little bit of JavaScript.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://madekarma.github.io/SoulSilver/Bali/project1.html" target="_blank"><button className="visit-button">Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Project