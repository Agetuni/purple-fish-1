import React from "react";

export const HeroSection = () => (
  <section id="home" className="relative bg-gradient-to-br from-blue-100 to-blue-50 h-[400px] md:h-[500px] flex items-center justify-center">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&auto=format"
        alt="Home improvement transformation"
        className="w-full h-full object-cover object-center opacity-60"
        loading="lazy"
      />
    </div>
    <div className="relative z-10 text-center text-blue-900">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Quality Home Services, On Your Schedule</h1>
      <p className="mb-6 text-lg md:text-2xl font-medium max-w-lg mx-auto">Trusted, local experts in repairs, renovations, emergency fixes, and more. Book in minutes or get a fast cost estimate.</p>
      <a href="#booking" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition">
        Book Service
      </a>
    </div>
  </section>
);
