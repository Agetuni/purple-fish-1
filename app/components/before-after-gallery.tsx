import React from "react";
import { GalleryItem } from "../types";

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    beforeUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop&auto=format",
    afterUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop&auto=format",
    alt: "Renovated kitchen before and after",
    description: "Kitchen remodel for the Smith family — from old and dated to bright and beautiful."
  },
  {
    id: "2",
    beforeUrl: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=400&h=300&fit=crop&auto=format",
    afterUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop&auto=format",
    alt: "Bathroom fixtures upgrade before and after",
    description: "Full bathroom update: new fixtures, tile, and brighter lighting."
  },
  {
    id: "3",
    beforeUrl: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=400&h=300&fit=crop&auto=format",
    afterUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop&auto=format",
    alt: "Living room updated with new lighting and paint",
    description: "Living room refresh: trending colors, clean lines, upgraded comfort."
  }
];

export const BeforeAfterGallery = () => (
  <section id="gallery" className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Before & After Gallery</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {galleryItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow p-3">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1">Before</span>
              <img
                src={item.beforeUrl}
                alt={item.alt + " before"}
                className="w-full h-40 object-cover rounded-md mb-2"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1">After</span>
              <img
                src={item.afterUrl}
                alt={item.alt + " after"}
                className="w-full h-40 object-cover rounded-md mb-2"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-gray-800 text-center mt-2 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);
