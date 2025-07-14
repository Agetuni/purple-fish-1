import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Book a Service</h2>
      <p className="mb-8 text-center text-gray-600">Schedule online and instantly add to your Google Calendar.</p>
      {submitted ? (
        <div className="p-6 bg-green-100 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-2">Request Submitted!</h3>
          <p className="text-gray-700">Thank you! We will confirm your booking via email and send a calendar invite.</p>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit} className="grid gap-5 bg-white rounded-xl shadow-lg p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
            <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <Input placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
          <Input placeholder="Service Needed (e.g., Plumbing)" value={service} onChange={e => setService(e.target.value)} required />
          <Textarea placeholder="Additional Notes" value={notes} onChange={e => setNotes(e.target.value)} rows={3} />
          <div>
            <label className="font-medium mr-6">Preferred Date:</label>
            <Calendar mode="single" selected={date} onSelect={setDate} required className="my-1" />
          </div>
          <Button type="submit" className="w-full mt-2">Submit Booking</Button>
        </form>
      )}
    </section>
  );
};
