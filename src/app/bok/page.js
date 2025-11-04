"use client";
import Image from "next/image";
import Taskbar from "@/components/taskbar";
import React, { useState, } from "react";

export default function App() {
  const [openApp, setOpenApp] = useState(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative" style={{ backgroundImage: "url('/desktop.jpg')" }}>
      <h1 className="text-4xl font-bold top-0">Welcome to My Portfolio</h1>
      <div className="flex flex-col items-start gap-8 fixed left-10 top-1/4">
        
        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("about")}
        >
          <span className="text-6xl">📖</span>
          <p className="mt-2 text-sm">About Me</p>
        </div>

        
        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("projects")}
        >
          <span className="text-6xl">💼</span>
          <p className="mt-2 text-sm">Projects</p>
        </div>
      </div>

   
      {openApp && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-xl shadow-2xl w-[90%] max-w-lg p-6 z-10 animate-fadeIn"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {openApp === "about" ? "About Me" : "Projects & Contact"}
            </h2>
            <button
              onClick={() => setOpenApp(null)}
              className="text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {openApp === "about" ? (
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Hei 👋 Jeg heter [navnet ditt].</p>
              <p>
                Jeg er en [rolle] med interesse for webutvikling, design og læring
                gjennom prosjekter. Dette er min lille “digitale bok”.
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-sm leading-relaxed">
              <p>💡 <strong>Projects</strong></p>
              <ul className="list-disc list-inside">
                <li>Portfolio website (this one!)</li>
                <li>A hobby project or game</li>
                <li>Maybe something with React, API, or animation</li>
              </ul>
              <hr className="my-3" />
              <p>📬 <strong>Kontakt</strong></p>
              <p>
                E-post: <a href="mailto:deg@example.com" className="text-blue-600 underline">deg@example.com</a>
              </p>
              <p>GitHub: <a href="https://github.com/dittbrukernavn" className="text-blue-600 underline">dittbrukernavn</a></p>
            </div>
          )}
        </div>
      )}
        <Taskbar />
    </main>
  );
}