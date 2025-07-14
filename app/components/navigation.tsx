import React from "react";
import { navLinks } from "../data";
import { Button } from "@/components/ui/button";

export const Navigation = () => (
  <nav className="bg-white/90 shadow backdrop-blur sticky top-0 z-40 w-full border-b border-gray-100">
    <div className="max-w-7xl mx-auto flex items-center px-4 h-16">
      <a href="#home" className="font-bold text-xl tracking-tight mr-8">HomePro</a>
      <ul className="flex gap-3 flex-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition font-medium px-3 py-2 rounded-lg">
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <Button asChild className="ml-auto">
        <a href="#booking">Book Now</a>
      </Button>
    </div>
  </nav>
);
