import React from "react";

const areas = [
  { city: "Downtown", area: "Central, Eastside, West End" },
  { city: "Uptown", area: "North Hills, Riverside, Westwood" },
  { city: "Suburbs", area: "Pinecrest, Brookwood, Meadowview" },
  { city: "Lakeview", area: "Lakeside, Parkview, Elm Heights" },
];

export const ServiceAreaMap = () => (
  <section id="areas" className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">Where We Work</h2>
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-lg border border-blue-200 p-10 md:p-12 text-center">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop&auto=format"
          alt="Map of city neighborhoods"
          className="w-64 h-48 object-cover rounded-lg shadow border"
          loading="lazy"
        />
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-2">Coverage Areas</h3>
          <ul className="text-gray-800 text-sm list-disc ml-5">
            {areas.map((a, i) => (
              <li key={i}><b>{a.city}:</b> <span className="text-gray-600">{a.area}</span></li>
            ))}
          </ul>
          <p className="text-xs text-blue-700 mt-3 italic">If your area isn’t listed, contact us — we may be able to help!</p>
        </div>
      </div>
    </div>
  </section>
);
