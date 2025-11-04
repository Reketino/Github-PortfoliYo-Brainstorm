import Image from "next/image";
import React from 'react'

export default function brainstormpage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Brainstorming Page</h1>
        <p className="text-lg mb-4 font-semibold">PortifoliYo ideas & testing:</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4 font-semibold">Idea 1</p>
          <p className="text-lg mb-4">Book That turns like a page</p>
          <p className="text-lg mb-4">Maybe the book is on a computer screen</p>
          <p className="text-lg mb-4">First Page about me</p>
          <p className="text-lg mb-4">Second Page Projects</p>
          <p className="text-lg mb-4">Third Page Contact</p>
          <p className="text-lg mb-4">Footer with social media links</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-lg mb-4 font-semibold">Idea 2</p>
          <p className="text-lg mb-4">Computer Screen showcasing My Name as a background and about me</p>
          <p className="text-lg mb-4"> Different icons for contact, projects icons etc.</p>
        </div>
    </main>
  )
}
