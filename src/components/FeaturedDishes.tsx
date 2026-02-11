"use client";

import { useRef } from "react";

const featuredDishes = [
  {
    name: "Khao Soi Chicken",
    description: "Northern Thai Egg Noodle Curry with secret curry paste recipe, bean sprout, crispy fried shallots, roasted chili oil, and lime wedge topped with crispy wonton strips",
    price: "$15.95",
    badge: "Must Try",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/p3wBVwRmPY1H0m13n6Enbw/o.jpg",
  },
  {
    name: "Pad Thai",
    description: "Stir-fried thin rice noodles with egg, bean sprout, scallion, and crushed peanut",
    price: "From $15.95",
    badge: null,
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/V2DDsvDgH-OVg1zrwUszww/o.jpg",
  },
  {
    name: "Palm Thai Soft Shell Crab",
    description: "Crispy soft shell crab and shrimp on a bed of mixed vegetables topped with creamy avocado green curry sauce",
    price: "$27.95",
    badge: "House Special",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=640&h=480&fit=crop&q=80",
  },
  {
    name: "Chu Chee Crispy Duck",
    description: "Crispy duck topped with Chu Chee curry sauce and a side of mixed vegetables with kaffir lime leaves",
    price: "$27.95",
    badge: null,
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/Hz-YUCpYdzP5y474hdEuLQ/o.jpg",
  },
  {
    name: "Pineapple Fried Rice",
    description: "Stir-fried jasmine rice with egg, pineapple, roasted cashew nut, raisin, carrot, onion with a hint of curry flavor",
    price: "From $15.95",
    badge: null,
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/DU23HFWC1LP4QFhe6yJj7g/o.jpg",
  },
  {
    name: "Drunken Noodle",
    description: "Stir-fried wide ribbon rice noodles with bell pepper, onion, green bean, carrot, Thai chili, and basil leaves",
    price: "From $15.95",
    badge: null,
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/QW26Io-ZLQmDdg9RhemWWw/o.jpg",
  },
];

export default function FeaturedDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured" className="section-padding bg-hero-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Signature Flavors
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            Featured Dishes
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Our most beloved dishes, crafted with authentic recipes and the freshest ingredients
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-10 bg-white/95 hover:bg-white text-secondary w-11 h-11 rounded-full shadow-xl hidden sm:flex items-center justify-center transition-all hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-10 bg-white/95 hover:bg-white text-secondary w-11 h-11 rounded-full shadow-xl hidden sm:flex items-center justify-center transition-all hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          >
            {featuredDishes.map((dish) => (
              <div key={dish.name} className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start">
                <div className="rounded-2xl overflow-hidden bg-white/[0.06] border border-white/10 hover:border-primary/40 transition-all duration-500 group h-full flex flex-col hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {dish.badge && (
                      <span className="absolute top-4 right-4 bg-primary text-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {dish.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading text-2xl text-white mb-2 group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed flex-1">
                      {dish.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-primary font-bold text-lg">{dish.price}</span>
                      <a href="#menu" className="text-white/40 hover:text-primary text-sm transition-colors inline-flex items-center gap-1">
                        View in Menu
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
