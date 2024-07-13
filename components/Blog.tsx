"use client"

import React, { useEffect, useState } from "react";
import Footer from './Footer';

const Blog = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);
    
    return (
        <div className={`bg-[#FEFAEE] mb-6 ${isActive ? 'page active' : 'page'}`}">
            <div className="text-center flex flex-col items-center justify-center min-h-screen">
                <p className="pixelify md:text-2xl text-lg">Blog coming soon! :D</p>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default Blog
