"use client";
import React from "react";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ServiceCategories } from "./components/service-categories";
import { BeforeAfterGallery } from "./components/before-after-gallery";
import { BookingSection } from "./components/booking-section";
import { CostEstimator } from "./components/cost-estimator";
import { CustomerReviews } from "./components/customer-reviews";
import { MaintenanceTips } from "./components/maintenance-tips";
import { ServiceAreaMap } from "./components/service-area-map";
import { WarrantySection } from "./components/warranty-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ServiceCategories />
        <BeforeAfterGallery />
        <BookingSection />
        <CostEstimator />
        <CustomerReviews />
        <MaintenanceTips />
        <ServiceAreaMap />
        <WarrantySection />
      </main>
      <footer className="bg-white border-t py-6 text-sm text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} HomePro. All rights reserved.
      </footer>
    </div>
  );
}
