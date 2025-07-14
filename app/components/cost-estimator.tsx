import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sampleEstimates = {
  plumbing: 150,
  electrical: 180,
  carpentry: 120,
  handyman: 80,
};

export const CostEstimator = () => {
  const [category, setCategory] = useState("plumbing");
  const [hours, setHours] = useState(1);
  const [cost, setCost] = useState(sampleEstimates["plumbing"]);

  function handleEstimate(e: React.FormEvent) {
    e.preventDefault();
    setCost((sampleEstimates as any)[category] * hours);
  }

  return (
    <section id="estimate" className="max-w-xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Instant Cost Estimator</h2>
      <p className="mb-8 text-center text-gray-600">Select a service and number of hours to get an instant estimate.</p>
      <form onSubmit={handleEstimate} className="flex flex-col gap-4 bg-white shadow rounded-xl p-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="font-medium">Category:</label>
          <select
            className="border px-3 py-2 rounded-md outline-blue-400"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="carpentry">Carpentry</option>
            <option value="handyman">Handyman</option>
          </select>
          <label className="font-medium ml-4">Hours:</label>
          <Input
            type="number"
            min={1}
            max={24}
            value={hours}
            onChange={e => setHours(Math.max(1, Number(e.target.value)))}
            className="w-28"
            required
          />
          <Button type="submit">Estimate</Button>
        </div>
        <div className="text-center mt-3">
          <span className="font-semibold">Estimated Total: </span>
          <span className="text-blue-700 text-lg font-bold">${cost}</span>
        </div>
      </form>
    </section>
  );
};
