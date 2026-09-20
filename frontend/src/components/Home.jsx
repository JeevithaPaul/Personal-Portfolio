import React from "react";
import Footer from "./common/Footer";

import Nostra from "../assets/nostra.png";
import Weather from "../assets/weather.png";
import BulkMail from "../assets/bulkmail.png";
import DeveloperAvatar from "../assets/developer-avatar.png";


/* BACK TO TOP BUTTON */

function BackToTop() {
    return (
        <a
            href="#top"
            className="absolute bottom-5 right-6 w-9 h-9 flex items-center justify-center border border-fuchsia-400 text-fuchsia-400 rounded-full hover:bg-fuchsia-500 hover:text-white transition"
        >
            ↑
        </a>
    );
}


function Home() {
    return (
        <div
            id="top"
            className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0f0b2e] via-[#24104f] to-[#7b1fa2] text-white pt-[108px]"
        >

            {/* ================= HERO ================= */}

            <section className="relative min-h-[60vh] flex items-center px-6 md:px-16 pt-16 pb-28">

                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}

                    <div>

                        <p className="text-fuchsia-400 font-semibold text-lg mb-4">
                            Welcome to my portfolio
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Hello, I'm
                        </h1>

                        <h2 className="text-5xl md:text-6xl font-bold text-fuchsia-400 mt-2">
                            Jeevitha Paul
                        </h2>

                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mt-5">
                            Full Stack Web Developer
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed mt-6 max-w-xl">
                            I am a passionate Full Stack Development learner with a
                            background in HR Management and professional experience
                            in coordination and online tutoring. I enjoy creating
                            responsive, user-friendly and practical web applications.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">

                            <a
                                href="#projects"
                                className="bg-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                            >
                                View My Projects
                            </a>

                            <a
                                href="#contact"
                                className="border-2 border-fuchsia-400 text-fuchsia-400 px-6 py-3 rounded-lg font-semibold hover:bg-fuchsia-500 hover:text-white transition"
                            >
                                Contact Me
                            </a>

                            <a
                                href="/Jeevitha-Paul-CV.pdf"
                                download
                                className="border-2 border-fuchsia-400 text-fuchsia-400 px-6 py-3 rounded-lg font-semibold hover:bg-fuchsia-500 hover:text-white transition"
                            >
                                Download CV
                            </a>

                        </div>

                    </div>


                    {/* RIGHT - PROFESSIONAL DEVELOPER IMAGE */}

                    <div className="flex justify-center items-center">

                        <div className="relative w-full max-w-xl">

                            {/* Purple glow */}

                            <div className="absolute inset-0 bg-fuchsia-500/20 blur-3xl rounded-full"></div>

                            <img
                                src={DeveloperAvatar}
                                alt="Professional developer"
                                className="relative w-full h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}

            <section
                id="about"
                className="relative scroll-mt-24 py-16 px-6 bg-transparent"
            >

                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* ABOUT */}

                        <div>

                            <p className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-5 py-2 rounded-full font-semibold text-sm">
                                About Me
                            </p>

                            <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
                                My Journey into Full Stack Development
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed mt-6">
                                With an academic background in Commerce and HR Management
                                and professional experience in coordination and tutoring,
                                I am now developing my technical skills through Full Stack
                                Web Development.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                I enjoy learning new technologies and turning ideas into
                                functional, responsive and user-friendly web applications.
                            </p>

                        </div>


                        {/* EDUCATION & EXPERIENCE */}

                        <div className="space-y-5">

                            {/* EDUCATION */}

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">

                                <h3 className="text-xl font-bold mb-4">
                                    Education
                                </h3>

                                <div className="space-y-4">

                                    <div>

                                        <h4 className="font-semibold">
                                            MBA – Human Resource Management
                                        </h4>

                                        <p className="text-gray-400 mt-1">
                                            2022
                                        </p>

                                    </div>


                                    <div>

                                        <h4 className="font-semibold">
                                            B.Com – Corporate Secretaryship
                                        </h4>

                                        <p className="text-gray-400 mt-1">
                                            2020
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* EXPERIENCE */}

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">

                                <h3 className="text-xl font-bold mb-4">
                                    Professional Experience
                                </h3>

                                <div className="space-y-4">

                                    <div>

                                        <h4 className="font-semibold">
                                            ERP Coordinator
                                        </h4>

                                        <p className="text-gray-400 mt-1">
                                            Samara Exports · April 2020 – March 2021
                                        </p>

                                    </div>


                                    <div>

                                        <h4 className="font-semibold">
                                            Online Tutor
                                        </h4>

                                        <p className="text-gray-400 mt-1">
                                            November 2021 – March 2023
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <BackToTop />

            </section>


            {/* ================= TECHNICAL SKILLS ================= */}

            <section
                id="skills"
                className="relative scroll-mt-12 py-16 px-6 bg-transparent"
            >

                <div className="max-w-6xl mx-auto">

                    <div className="text-center">

                        <p className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-5 py-2 rounded-full font-semibold text-sm">
                            TECHNICAL PROFICIENCY
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Technical{" "}
                            <span className="text-fuchsia-400">
                                Skills
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg mt-4">
                            Technologies and tools I use to build responsive web applications
                        </p>

                        <div className="w-20 h-1 bg-fuchsia-500 mx-auto mt-5 rounded-full"></div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

                        {/* FRONTEND */}

                        <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl p-7">

                            <div className="flex justify-between items-center border-b border-white/20 pb-4">

                                <h3 className="text-xl font-bold">
                                    Frontend Development
                                </h3>

                                <span className="text-fuchsia-400 text-sm font-semibold">
                                    5 Tools
                                </span>

                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">

                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "React",
                                    "Tailwind CSS",
                                ].map((skill) => (

                                    <span
                                        key={skill}
                                        className="bg-white/10 border border-white/20 shadow-sm px-5 py-3 rounded-xl font-medium"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* BACKEND */}

                        <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl p-7">

                            <div className="flex justify-between items-center border-b border-white/20 pb-4">

                                <h3 className="text-xl font-bold">
                                    Backend & Database
                                </h3>

                                <span className="text-fuchsia-400 text-sm font-semibold">
                                    4 Tools
                                </span>

                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">

                                {[
                                    "Node.js",
                                    "Express.js",
                                    "MongoDB",
                                    "Firebase",
                                ].map((skill) => (

                                    <span
                                        key={skill}
                                        className="bg-white/10 border border-white/20 shadow-sm px-5 py-3 rounded-xl font-medium"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* PROGRAMMING */}

                        <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl p-7">

                            <div className="flex justify-between items-center border-b border-white/20 pb-4">

                                <h3 className="text-xl font-bold">
                                    Programming
                                </h3>

                                <span className="text-fuchsia-400 text-sm font-semibold">
                                    1 Tool
                                </span>

                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">

                                <span className="bg-white/10 border border-white/20 shadow-sm px-5 py-3 rounded-xl font-medium">
                                    JavaScript
                                </span>

                            </div>

                        </div>


                        {/* TOOLS */}

                        <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl p-7">

                            <div className="flex justify-between items-center border-b border-white/20 pb-4">

                                <h3 className="text-xl font-bold">
                                    Tools & Version Control
                                </h3>

                                <span className="text-fuchsia-400 text-sm font-semibold">
                                    2 Tools
                                </span>

                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">

                                {["Git", "GitHub"].map((skill) => (

                                    <span
                                        key={skill}
                                        className="bg-white/10 border border-white/20 shadow-sm px-5 py-3 rounded-xl font-medium"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                <BackToTop />

            </section>


            {/* ================= PROJECTS ================= */}

            <section
                id="projects"
                className="relative scroll-mt-12 py-16 px-6 bg-transparent"
            >

                <div className="max-w-6xl mx-auto">

                    <div className="text-center">

                        <p className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-5 py-2 rounded-full font-semibold text-sm">
                            MY WORK
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-2">
                            Featured Projects
                        </h2>

                        <p className="text-gray-300 mt-4">
                            A selection of applications I have built during my development journey.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">

                        {/* TINYTULIP */}

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-sm hover:shadow-lg transition">

                            <img
                                src={Nostra}
                                alt="TinyTulip Baby E-commerce"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-xl font-bold">
                                    TinyTulip Baby E-commerce
                                </h3>

                                <p className="text-gray-300 mt-3 leading-relaxed">
                                    A responsive baby clothing and essentials e-commerce website.
                                </p>

                                <a
                                    href="https://github.com/JeevithaPaul/Nostra-Baby-Clothing-and-Essentials."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-5 text-fuchsia-400 font-semibold hover:text-fuchsia-300"
                                >
                                    View on GitHub →
                                </a>

                            </div>

                        </div>


                        {/* WEATHER */}

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-sm hover:shadow-lg transition">

                            <img
                                src={Weather}
                                alt="Weather App"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-xl font-bold">
                                    Weather App
                                </h3>

                                <p className="text-gray-300 mt-3 leading-relaxed">
                                    A React weather application using the OpenWeatherMap API.
                                </p>

                                <a
                                    href="https://github.com/JeevithaPaul/weather-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-5 text-fuchsia-400 font-semibold hover:text-fuchsia-300"
                                >
                                    View on GitHub →
                                </a>

                            </div>

                        </div>


                        {/* BULKMAIL */}

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-sm hover:shadow-lg transition">

                            <img
                                src={BulkMail}
                                alt="BulkMail Application"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-xl font-bold">
                                    BulkMail
                                </h3>

                                <p className="text-gray-300 mt-3 leading-relaxed">
                                    A full-stack email application using React, Node.js,
                                    Express and MongoDB.
                                </p>

                                <a
                                    href="https://github.com/JeevithaPaul/Bulkmail"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-5 text-fuchsia-400 font-semibold hover:text-fuchsia-300"
                                >
                                    View on GitHub →
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <BackToTop />

            </section>


            {/* ================= CONTACT ================= */}

            <section
                id="contact"
                className="relative scroll-mt-12 py-16 px-6 bg-transparent"
            >

                <div className="max-w-6xl mx-auto">

                    <div className="text-center">

                        <p className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-5 py-2 rounded-full font-semibold text-sm">
                            LET'S CONNECT
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Get In{" "}
                            <span className="text-fuchsia-400">
                                Touch
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg mt-4">
                            Have an opportunity, project inquiry, or want to connect?
                            Send me a message.
                        </p>

                        <div className="w-20 h-1 bg-fuchsia-500 mx-auto mt-5 rounded-full"></div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

                        {/* CONTACT DETAILS */}

                        <div>

                            <h3 className="text-2xl font-bold">
                                Contact Details
                            </h3>

                            <p className="text-gray-300 text-lg leading-relaxed mt-5">
                                I am open to software development opportunities,
                                technical collaborations, and full-stack projects.
                            </p>


                            <div className="space-y-4 mt-8">

                                {/* EMAIL */}

                                <a
                                    href="mailto:Pauljeevi23@gmail.com"
                                    className="block border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:shadow-md transition"
                                >

                                    <p className="text-sm text-gray-400 font-semibold">
                                        EMAIL
                                    </p>

                                    <p className="font-semibold mt-1">
                                        Pauljeevi23@gmail.com
                                    </p>

                                </a>


                                {/* LINKEDIN */}

                                <a
                                    href="https://www.linkedin.com/in/jeevitha-paul-74a810415/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:shadow-md transition"
                                >

                                    <p className="text-sm text-gray-400 font-semibold">
                                        LINKEDIN
                                    </p>

                                    <p className="font-semibold mt-1">
                                        Jeevitha Paul
                                    </p>

                                </a>


                                {/* GITHUB */}

                                <a
                                    href="https://github.com/JeevithaPaul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:shadow-md transition"
                                >

                                    <p className="text-sm text-gray-400 font-semibold">
                                        GITHUB
                                    </p>

                                    <p className="font-semibold mt-1">
                                        @JeevithaPaul
                                    </p>

                                </a>

                            </div>

                        </div>


                        {/* SEND MESSAGE */}

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">

                            <h3 className="text-2xl font-bold mb-6">
                                Send Message
                            </h3>

                            <form>

                                <label className="block text-sm font-semibold mb-2">
                                    YOUR NAME
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 mb-5 outline-none focus:border-fuchsia-400 text-white placeholder-gray-400"
                                />


                                <label className="block text-sm font-semibold mb-2">
                                    YOUR EMAIL
                                </label>

                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 mb-5 outline-none focus:border-fuchsia-400 text-white placeholder-gray-400"
                                />


                                <label className="block text-sm font-semibold mb-2">
                                    MESSAGE
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400 text-white placeholder-gray-400"
                                ></textarea>


                                <button
                                    type="submit"
                                    className="mt-5 bg-fuchsia-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

                <BackToTop />

            </section>


            {/* ================= FOOTER ================= */}

            <Footer />

        </div>
    );
}


export default Home;