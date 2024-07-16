"use client"

import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import Footer from "./Footer";

function ContactForm() {
    const [state, handleSubmit] = useForm("mjvdovve");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);

    const handleFormSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        await handleSubmit(event);
        if (state.succeeded) {
            // Optionally, you can perform any actions after successful submission
        }
    };

    return (
        <main id="contact" className={`bg-[#FEFAEE] body-font flex flex-col min-h-screen relative mt-4 ${isActive ? 'page active' : 'page'}`}>
            <div className="container flex-1 px-5 py-10 mx-auto sm:mt-20 mt-8">
                {state.succeeded ? (
                    <div className="flex flex-wrap -m-4 justify-center">
                        <div className="p-4 mt-36 w-2/3 sm:w-1/2 lg:w-1/3 bg-[#F1F1F1] rounded-xl">
                            <h3 className="text-center pb-10 jetbrains">Thank you for your message. Hope you always have a nice day!</h3>
                            <div className="flex items-center flex-wrap justify-center ">
                                <Link href="/"><button className="edu-box hover:cursor-pointer pixelify">Back to home page</button></Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="my-2 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E] pixelify">
                            CONTACT
                            <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-xl text-[#1E1E1E] jetbrains">Write me your message, question, or anything here. Feel free to hit me up to ask or having random conversation ^^</p>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2 justify-center">
                                <div className="p-2 w-3/4">
                                    <div className="relative">
                                        <form action="https://formspree.io/f/mjvdovve"
                                            method="POST" onSubmit={handleFormSubmit} autoComplete="off">
                                            <label className="leading-7 text-sm text-[#1E1E1E] jetbrains" htmlFor="name">Name</label>
                                            <input className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] text-base outline-none text-[#EDEDED] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out jetbrains"
                                                placeholder="Insert your name" required
                                                id="name"
                                                type="name"
                                                name="name"
                                            />
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                            />
                                            <label className="leading-7 text-sm text-[#1E1E1E] jetbrains" htmlFor="email">Email</label>
                                            <input className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] text-base outline-none text-[#EDEDED] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out jetbrains"
                                                placeholder="Insert your email" required
                                                id="email"
                                                type="email"
                                                name="email"
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                            <label htmlFor="message" className="leading-7 text-sm text-[#1E1E1E] jetbrains">Message</label>
                                            <textarea className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] h-32 text-base outline-none text-[#EDEDED] py-1 px-3 leading-6 transition-colors duration-200 ease-in-out jetbrains"
                                                placeholder="Insert your message" required
                                                id="message"
                                                name="message"
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                            <div className="mt-10 items-center">
                                                <button className="send-button pixelify" type="submit" disabled={state.submitting}>
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;
