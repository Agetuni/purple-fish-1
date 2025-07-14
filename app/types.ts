import React from "react";

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
};

export type GalleryItem = {
  id: string;
  beforeUrl: string;
  afterUrl: string;
  alt: string;
  description: string;
};

export type CustomerReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
};

export type Tip = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type WarrantyInfo = {
  headline: string;
  description: string;
  details: string[];
};

export type ServiceArea = {
  city: string;
  area: string;
};
