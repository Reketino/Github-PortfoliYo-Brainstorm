import Image from "next/image";
import React from 'react'
import Link from "next/link";

export default function brainstormpage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Brainstorming Page</h1>
        <p className="text-lg mb-4 font-semibold">PortifoliYo ideas & testing:</p>
        </div>
        <div className="flex bg-cyan-950 rounded-full flex-col items-center align-center justify-center px-6 py-2">
          <p className="text-2xl mb-2 font-semibold">Idea 1</p>
          <p className="text-lg mb-2">Book That turns like a page</p>
          <p className="text-lg mb-2">Maybe the book is on a computer screen</p>
          <p className="text-lg mb-2">First Page about me</p>
          <p className="text-lg mb-2">Second Page Projects</p>
          <p className="text-lg mb-2">Third Page Skills</p>
          <p className="text-lg mb-2">Fourth Page Contact</p>
          <p className="text-lg mb-2">Footer with social media links</p>
          <Link href="/bok" className="text-xl font-bold mt-2 hover:underline">Book Idea</Link>
        </div>
        

        <div className="flex bg-gray-400 rounded-full flex-col items-center justify-center mt-4 px-6 py-2">
          <p className="text-2xl mb-2 font-semibold">Idea 2</p>
          <p className="text-lg mb-2">Computer Screen showcasing My Name as a background and about me</p>
          <p className="text-lg mb-2"> Different icons for contact, projects, skills with icons</p>
          <Link href="/computer" className="text-xl font-bold mt-2 hover:underline">Computer Idea</Link>
        </div>

        <div className=" flex  flex-col bg-neutral-600 rounded-full items-center justify-center mt-4 px-6 py-2">
          <p className="text-2xl mb-2 font-semibold">Idea 3</p>
          <p className="text-lg mb-2">Standard Setup</p>
          <p className="text-lg mb-2">Picture Of Me in left Corner w/ about me section</p>
          <p className="text-lg mb-2">Own page for Projects</p>
          <p className="text-lg mb-2">Contact Information And skills on front page as card section?</p>
          <Link href="/standard" className="text-xl font-bold mt-2 hover:underline">Standard Idea</Link>
        </div>
    </main>
  )
}
