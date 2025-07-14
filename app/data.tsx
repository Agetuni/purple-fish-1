import React from "react";
import { Wrench, Home, Zap, ShieldCheck, Calendar, MapPin, DollarSign, Info, Star } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
  { label: "Services", href: "#services", icon: <Wrench className="w-5 h-5" /> },
  { label: "Gallery", href: "#gallery", icon: <Zap className="w-5 h-5" /> },
  { label: "Booking", href: "#booking", icon: <Calendar className="w-5 h-5" /> },
  { label: "Estimate", href: "#estimate", icon: <DollarSign className="w-5 h-5" /> },
  { label: "Reviews", href: "#reviews", icon: <Star className="w-5 h-5" /> },
  { label: "Tips", href: "#tips", icon: <Info className="w-5 h-5" /> },
  { label: "Areas", href: "#areas", icon: <MapPin className="w-5 h-5" /> },
  { label: "Warranty", href: "#warranty", icon: <ShieldCheck className="w-5 h-5" /> },
];
