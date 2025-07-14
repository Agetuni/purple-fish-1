"use client"
import React from "react"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Thompson",
    title: "Homeowner, Austin TX",
    photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120&h=120&fit=crop&auto=format",
    testimonial:
      "The professionalism and attention to detail were outstanding. Booking was seamless and my house looks brand new! Highly recommended.",
  },
  {
    name: "James Carter",
    title: "Property Manager",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&fit=crop&auto=format",
    testimonial:
      "My tenants always praise the fast, reliable service. The team is courteous, prompt, and always goes the extra mile—my go-to for home maintenance!",
  },
  {
    name: "Linda Gomez",
    title: "Busy Mom & Entrepreneur",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop&auto=format",
    testimonial:
      "Finally, a service I can trust! From the first call to the final walk-through, everything exceeded expectations. Will use again!",
  },
  {
    name: "Wei Zhang",
    title: "Retired Teacher",
    photo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=120&h=120&fit=crop&auto=format",
    testimonial:
      "Scheduling was effortless and everyone was very helpful and friendly. The team left my home spotless. Thank you!",
  },
]

export const TestimonialPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 lg:px-0">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">What Our Clients Say</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Real stories from happy customers about their experiences with our home services team.</p>
      </section>
      <Separator className="max-w-xl mx-auto mb-12" />
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} className="flex flex-col gap-5 items-center p-8 shadow-lg bg-white dark:bg-slate-800 border-0 rounded-xl transition-transform hover:scale-105 focus-within:scale-105">
            <Quote className="w-10 h-10 text-sky-400 dark:text-sky-300 mb-4" aria-hidden="true" />
            <p className="italic text-gray-700 dark:text-gray-200 text-lg mb-6 line-clamp-5">“{t.testimonial}”</p>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="w-16 h-16 mb-1 ring-4 ring-sky-200 dark:ring-sky-700">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
              </Avatar>
              <span className="font-semibold text-gray-900 dark:text-gray-50">{t.name}</span>
              <span className="text-sky-600 dark:text-sky-400 text-sm">{t.title}</span>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default TestimonialPage
