import React from "react";

export default function WheelRepair() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-600">Professional Wheel Repair</h1>
        <p className="text-lg mb-4">
          We specialize in repairing bent and cracked wheels to restore them to like-new condition.
          Whether you hit a pothole or curb, Concept Motorsports has the tools and expertise to get you rolling again.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300">
          <li>Crack repair & precision welding</li>
          <li>Rim straightening for bent wheels</li>
          <li>Cosmetic refinishing and paint correction</li>
          <li>Curb rash removal and polishing</li>
          <li>Same-day service available on request</li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <p className="text-xl mb-2">Call us today for a quote:</p>
          <a href="tel:7083339420" className="text-3xl font-bold text-red-500 hover:underline">
            (708) 333-9420
          </a>
        </div>
      </div>
    </div>
  );
}