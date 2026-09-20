import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../config/firebase";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const navigate = useNavigate();

    const [log, setlog] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                setlog(true);
                console.log("User Logged In");
            } else {
                setlog(false);
                console.log("User Logged Out");
            }
        });
    }, []);

    function logout() {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
                setMenuOpen(false);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
       <nav className="fixed top-0 left-0 z-[9999] w-full bg-[#0f0b2e]/95 backdrop-blur-md border-b border-purple-400/20">

            {/* NAVBAR TOP */}
            <div className="py-4 px-4 md:px-10 flex items-center">

                {/* LOGO / NAME */}
                <Link
                    to="/home"
                    onClick={closeMenu}
                    className="text-lg md:text-3xl font-bold text-white whitespace-nowrap"
                >
                    Jeevitha Paul
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-3 ml-auto">

                    <Link
                        className="px-4 py-2 font-medium text-gray-200 hover:text-fuchsia-400 transition"
                        to="/home"
                    >
                        Home
                    </Link>

                    <a
                        className="px-4 py-2 font-medium text-gray-200 hover:text-fuchsia-400 transition"
                        href="/home#about"
                    >
                        About
                    </a>

                    <a
                        className="px-4 py-2 font-medium text-gray-200 hover:text-fuchsia-400 transition"
                        href="/home#skills"
                    >
                        Skills
                    </a>

                    <a
                        className="px-4 py-2 font-medium text-gray-200 hover:text-fuchsia-400 transition"
                        href="/home#projects"
                    >
                        Projects
                    </a>

                    <Link
                        className="px-4 py-2 font-medium text-gray-200 hover:text-fuchsia-400 transition"
                        to="/blogs"
                    >
                        Blog
                    </Link>

                    <a
                        className="px-4 py-2 font-medium text-gray-200 hover:text-fuchsia-400 transition"
                        href="/home#contact"
                    >
                        Contact
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/JeevithaPaul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1 text-white hover:text-gray-300 transition"
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/jeevitha-paul-74a810415/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1 text-[#0A66C2] hover:text-[#004182] transition"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>

                    {/* Login / Logout */}
                    {log ? (
                        <button
                            className="bg-fuchsia-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="bg-fuchsia-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    )}

                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden ml-auto w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white"
                >
                    <FontAwesomeIcon
                        icon={menuOpen ? faXmark : faBars}
                        size="lg"
                    />
                </button>

            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#0f0b2e]/98 px-5 py-4">

                    <div className="flex flex-col gap-1">

                        <Link
                            to="/home"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-fuchsia-400 py-3"
                        >
                            Home
                        </Link>

                        <a
                            href="/home#about"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-fuchsia-400 py-3"
                        >
                            About
                        </a>

                        <a
                            href="/home#skills"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-fuchsia-400 py-3"
                        >
                            Skills
                        </a>

                        <a
                            href="/home#projects"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-fuchsia-400 py-3"
                        >
                            Projects
                        </a>

                        <Link
                            to="/blogs"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-fuchsia-400 py-3"
                        >
                            Blog
                        </Link>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-fuchsia-400 py-3"
                        >
                            Contact
                        </a>

                        {/* SOCIAL LINKS */}
                        <div className="flex items-center gap-5 py-4 border-t border-white/10 mt-2">

                            <a
                                href="https://github.com/JeevithaPaul"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="xl"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jeevitha-paul-74a810415/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0A66C2] hover:text-[#004182] transition"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size="xl"
                                />
                            </a>

                        </div>

                        {/* LOGIN / LOGOUT */}
                        {log ? (
                            <button
                                className="w-full bg-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="w-full bg-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                                onClick={() => {
                                    closeMenu();
                                    navigate("/login");
                                }}
                            >
                                Login
                            </button>
                        )}

                    </div>

                </div>
            )}

        </nav>
    );
}

export default Navbar;