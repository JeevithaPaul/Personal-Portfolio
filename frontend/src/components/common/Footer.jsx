import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#0f0b2e] border-t border-white/10 text-white py-10">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* NAME */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold text-fuchsia-400">
              Jeevitha Paul
            </h2>

            <p className="text-gray-300 mt-1">
              Full Stack Web Developer
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Building responsive and user-friendly web applications.
            </p>

          </div>


          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/JeevithaPaul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jeevitha-paul-74a810415/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#004182] transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>


            {/* Email */}
            <a
              href="mailto:Pauljeevi23@gmail.com"
              className="bg-fuchsia-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
            >
              Email Me
            </a>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-white/10 mt-8 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © 2026 Jeevitha Paul. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;