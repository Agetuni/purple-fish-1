import React from "react";
import { Zap, Info, Wrench, Droplets, Home } from "lucide-react";
import { Tip } from "../types";

const tips: Tip[] = [
  {
    id: "1",
    title: "Water Shut-Off",
    description: "Know your main shut-off location before a plumbing crisis.",
    icon: <Droplets className="w-7 h-7 text-blue-500" />,
  },
  {
    id: "2",
    title: "Safety First",
    description: "Never attempt electrical repairs unless you are qualified.",
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
  },
  {
    id: "3",
    title: "Routine Checks",
    description: "Regularly inspect caulking, seals, smoke detectors, filters.",
    icon: <Info className="w-7 h-7 text-indigo-500" />,
  },
  {
    id: "4",
    title: "Prevent Pest Entry",
    description: "Seal cracks around doors, pipes, and attic entrances.",
    icon: <Home className="w-7 h-7 text-green-700" />,
  },
  {
    id: "5",
    title: "Tool Kit Musts",
    description: "Always have a plunger, flashlight, wrench, and duct tape on hand.",
    icon: <Wrench className="w-7 h-7 text-gray-700" />,
  },
];

export const MaintenanceTips = () => (
  <section id="tips" className="bg-blue-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 text-center">Home Maintenance Tips</h2>
      <div className="grid md:grid-cols-3 gap-7">
        {tips.map((tip) => (
          <div key={tip.id} className="rounded-xl bg-white shadow p-7 flex flex-col items-center gap-2 border-t-4 border-blue-200">
            {tip.icon}
            <h3 className="text-xl font-semibold mt-3 mb-1 text-blue-800 text-center">{tip.title}</h3>
            <p className="text-gray-700 text-center text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
