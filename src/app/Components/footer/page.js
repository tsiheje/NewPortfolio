import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Ending = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-600 duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-400 duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-700 duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Mickaelio. All rights reserved.
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:contact@mickaelio.com"
              className="text-blue-400 hover:underline transition-colors duration-300"
            >
              contact@mickaelio.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Ending;
