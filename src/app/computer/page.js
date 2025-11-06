"use client";
import Image from "next/image";
import React, { useState } from "react";
import Taskbar from "@/components/taskbar";
import Fullskjerm from "@/components/fullskjerm";

export default function App() {
  const [openApp, setOpenApp] = useState(null);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/desktop.jpg')" }}
    >
      <h1 className="text-4xl font-bold absolute top-10 transform">
        Welcome to My Portfolio
      </h1>

     
      <div className="flex flex-col items-start gap-8 fixed left-10 top-1/4">
       
        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("about")}
        >
          <span className="text-6xl">📖</span>
          <p className="mt-2 text-sm">Hvem er jeg?</p>
        </div>


        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("projects")}
        >
          <span className="text-6xl">📂</span>
          <p className="mt-2 text-sm">Projekter</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("Spotify")}
        >
          <Image
            src="/spoti.png"
            alt="Spotify Icon"
            width={64}
            height={64}
            className="hover-glow rounded-lg"
          />
          <p className="mt-2 text-sm text-center">Spotify</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("Flappy Bird")}
        >
          <Image
            src="/flappy.png"
            alt="Flappy Bird Icon"
            width={64}
            height={64}
            className="hover-glow rounded-lg"
          />
          <p className="mt-2 text-sm text-center">Flappy Bird</p>
        </div>
      </div>

      {openApp && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-xl shadow-2xl w-[90%] max-w-md  p-6 z-10 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {openApp === "about" && "About Me"}
              {openApp === "projects" && "Projects Folder"}
            </h2>
            <button
              onClick={() => setOpenApp(null)}
              className="text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {openApp === "about" && (
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Hei 👋 Jeg heter [navnet ditt].</p>
              <p>
                Jeg er en [rolle] med interesse for webutvikling, design og læring
                gjennom prosjekter. Dette er min lille “digitale bok”.
              </p>
            </div>
          )}

          

       
          {openApp === "projects" && (
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project1")}
              >
                <span className="text-5xl">⛰️</span>
                <p className="mt-1 text-sm text-center">Planlegger du en fjelltur?</p>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project2")}
              >
                <span className="text-5xl">💇🏻</span>
                <p className="mt-1 text-sm text-center">Eller kanskje du skulle vært hos frisøren?</p>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project3")}
              >
                <span className="text-5xl">🔮</span>
                <p className="mt-1 text-sm text-center">Hva med et visdomsord før du bestemmer deg?</p>
              </div>
            </div>
          )}  
        </div>
      )}
         {openApp === "project1" && (
              <Fullskjerm
                url="https://fjellturer.vercel.app/"
                title="Fjellturer Nettside"
                onBack={() => setOpenApp("projects")}
              />
          )}

          {openApp === "project2" && (
              <Fullskjerm
                url="https://kjodes-frisor.vercel.app/"
                title="Frisør Booking"
                onBack={() => setOpenApp("projects")}
              />
          )}

          {openApp === "project3" && (
            <Fullskjerm
              url="https://reketino-s-word-of-wisdom-31dr.vercel.app/"
              title="Visdomsord"
              onBack={() => setOpenApp("projects")}
            />
          )}

          {openApp === "Spotify" && (
            <Fullskjerm
              url="https://open.spotify.com/embed/playlist/5fWaijV0GmLzP9KFydh712?utm_source=generator"
              title="Spotify"
              onBack={() => setOpenApp(null)}
            />
          )}

          {openApp === "Flappy Bird" && (
            <Fullskjerm
              url="https://flappy-bird-ruby-nine.vercel.app/"
              title="Flappy Bird"
              onBack={() => setOpenApp(null)}
            />
          )}

    
      <Taskbar />
    </main>
  );
}
      
      