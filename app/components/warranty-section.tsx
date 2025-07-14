import React from "react";
import { WarrantyInfo } from "../types";
import { ShieldCheck } from "lucide-react";

const warranty: WarrantyInfo = {
  headline: "Real Peace of Mind — Our Service Warranty",
  description: "We take pride in our workmanship and stand behind every service. If any covered issue arises after your appointment, we’ll make it right — free of charge.",
  details: [
    "12-month warranty for all labor and standard parts",
    "Upgrades and specialty repairs covered for 6 months",
    "No-hassle claims process with 24-hour response",
    "Fully licensed, insured, and bonded technicians"
  ]
};

export const WarrantySection = () => (
  <section id="warranty" className="max-w-3xl mx-auto px-4 py-16">
    <div className="bg-white rounded-xl shadow-lg border border-blue-100 flex items-center p-8 gap-5">
      <div className="flex-shrink-0">
        <ShieldCheck className="w-14 h-14 text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">{warranty.headline}</h2>
        <p className="text-gray-800 mb-3">{warranty.description}</p>
        <ul className="list-disc ml-8 text-gray-700">
          {warranty.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
