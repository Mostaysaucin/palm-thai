"use client";

import { useRef } from "react";

const featuredDishes = [
  {
    name: "Khao Soi Chicken",
    description:
      "Northern Thai Egg Noodle Curry with secret curry paste recipe, bean sprout, crispy fried shallots, roasted chili oil, and lime wedge topped with crispy wonton strips",
    price: "$15.95",
    badge: "Must Try",
    bgGradient: "from-amber-900/80 to-amber-700/80",
  },
  {
    name: "Pad Thai",
    description:
      "Stir-fried thin rice noodles with egg, bean sprout, scallion, and crushed peanut",
    price: "From $15.95",
    badge: null,
    bgGradient: "from-orange-900/80 to-orange-700/80",
  },
  {
    name: "Palm Thai Soft Shell Crab",
    description:
      "Crispy soft shell crab and shrimp on a bed of mixed vegetables topped with creamy avocado green curry sauce",
    price: "$27.95",
    badge: "House Special",
    bgGradient: "from-emerald-900/80 to-emerald-700/80",
  },
  {
    name: "Chu Chee Crispy Duck",
    description:
      "Crispy duck topped with Chu Chee curry sauce and a side of mixed vegetables with kaffir lime leaves",
    price: "$27.95",
    badge: null,
    bgGradient: "from-red-900/80 to-red-700/80",
  },
  {
    name: "Pineapple Fried Rice",
    description:
      "Stir-fried jasmine rice with egg, pineapple, roasted cashew nut, raisin, carrot, onion with a hint of curry flavor",
    price: "From $15.95",
    badge: null,
    bgGradient: "from-yellow-900/80 to-yellow-700/80",
  },
  {
    name: "Drunken Noodle",
    description:
      "Stir-fried wide ribbon rice noodles with bell pepper, onion, green bean, carrot, Thai chili, and basil leaves",
    price: "From $15.95",
    badge: null,
    bgGradient: "from-rose-900/80 to-rose-700/80",
  },
];

export default function FeaturedDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
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
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Signature Flavors
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-on-dark mb-4">
            Featured Dishes
          </h2>
          <p className="text-text-on-dark/60 max-w-xl mx-auto">
            Our most beloved dishes, crafted with authentic recipes and the
            freshest ingredients
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-surface/90 hover:bg-surface text-text-primary w-10 h-10 rounded-full shadow-lg hidden sm:flex items-center justify-center transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-surface/90 hover:bg-surface text-text-primary w-10 h-10 rounded-full shadow-lg hidden sm:flex items-center justify-center transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          >
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start"
              >
                <div className="rounded-xl overflow-hidden bg-secondary border border-white/10 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                  {/* Image Area */}
                  <div className={`relative h-48 bg-gradient-to-br ${dish.bgGradient} flex items-center justify-center`}>
                    <div className="text-center p-4">
                      <svg className="w-16 h-16 text-white/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {dish.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-text-on-primary text-xs font-bold px-3 py-1 rounded-full">
                        {dish.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-heading text-2xl sm:text-3xl text-text-on-dark mb-2 group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-text-on-dark/50 text-sm leading-relaxed flex-1">
                      {dish.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">
                        {dish.price}
                      </span>
                      <a
                        href="#menu"
                        className="text-text-on-dark/40 hover:text-primary text-sm transition-colors"
                      >
                        View in Menu &rarr;
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
