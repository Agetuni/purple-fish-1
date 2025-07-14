import React from "react";
import { ServiceCategory } from "../types";
import { Wrench, Zap, Home, Droplets, ShieldCheck } from "lucide-react";

const categories: ServiceCategory[] = [
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Drips, leaks, remodels, and emergency repairs by licensed experts.",
    icon: <Droplets className="w-8 h-8 text-blue-600" />
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Fixture installs, faulty wiring, panel upgrades & emergency service.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "carpentry",
    name: "Carpentry",
    description: "Custom builds, repairs, cabinetry, framing, and home renovations.",
    icon: <Home className="w-8 h-8 text-green-600" />
  },
  {
    id: "handyman",
    name: "Handyman",
    description: "All repairs, installations, assembly, mounting, and odd jobs.",
    icon: <Wrench className="w-8 h-8 text-gray-700" />
  },
  {
    id: "emergency",
    name: "Emergency",
    description: "24/7 urgent repairs for leaks, outages, safety hazards, and more.",
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />
  }
];

export const ServiceCategories = () => (
  <section id="services" className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Our Service Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((cat) => (
        <div key={cat.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center p-6 min-h-[240px]">
          <div>{cat.icon}</div>
          <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900">{cat.name}</h3>
          <p className="text-gray-600 text-center text-sm">{cat.description}</p>
        </div>
      ))}
    </div>
  </section>
);
