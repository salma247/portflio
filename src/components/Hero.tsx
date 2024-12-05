import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 pt-24 md:py-28 flex flex-col md:flex-row items-center gap-8" id="me">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hi, I'm Salma Mohammed
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
          Frontend Engineer | React & Next.js Specialist
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          I craft high-performance web applications with a focus on creating
          seamless, responsive user experiences. Currently enhancing frontend
          solutions at iCloud-Ready, I bring 2+ years of expertise in building
          scalable web interfaces.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/salma247"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-colors"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/salma-ahmed-mohammed"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-colors"
          >
            <FaLinkedinIn className="text-xl" />
            LinkedIn
          </a>
          <a
            href="mailto:salmaelhamshary1@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-colors"
          >
            <FaEnvelope className="text-xl" />
            Email
          </a>
        </div>
      </div>
      <div className="flex-1 hidden md:flex justify-center">
        <div className="w-64 h-64 bg-gray-200 rounded-full">
          <img
            src="/images/me.jpg"
            alt="Salma Mohammed"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}