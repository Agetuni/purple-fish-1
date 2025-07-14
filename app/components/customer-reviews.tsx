import React from "react";
import { CustomerReview } from "../types";
import { Star } from "lucide-react";

const reviews: CustomerReview[] = [
  {
    id: "1",
    name: "Sarah W.",
    rating: 5,
    text: "HomePro saved us during an emergency leak—fast and friendly! Highly recommended.",
    date: "March 2024"
  },
  {
    id: "2",
    name: "Mike B.",
    rating: 4,
    text: "Love the online scheduling and clear pricing. Great work on our electrical remodel.",
    date: "Jan 2024"
  },
  {
    id: "3",
    name: "Priya T.",
    rating: 5,
    text: "Professional carpentry, honest estimate, fabulous finishing touches.",
    date: "Dec 2023"
  }
];

export const CustomerReviews = () => (
  <section id="reviews" className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Our Customers Love Us</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((r) => (
        <div key={r.id} className="rounded-xl shadow-xl bg-white p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-500 ml-2 text-xs">{r.date}</span>
          </div>
          <p className="text-gray-800 flex-1">“{r.text}”</p>
          <div className="flex items-center gap-2 mt-auto text-sm text-blue-800 font-medium">
            <span>— {r.name}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
