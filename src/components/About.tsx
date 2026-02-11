export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-6">
              A Taste of Thailand in Tampa Palms
            </h2>
            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              <p>
                Nestled in the heart of Tampa Palms, Palm Thai brings the vibrant
                flavors and warm hospitality of Thailand to the New Tampa
                community. Every dish is crafted with authentic recipes passed
                down through generations, using fresh ingredients and the
                traditional spices that make Thai cuisine so extraordinary.
              </p>
              <p>
                From our signature Khao Soi Chicken with its secret curry paste
                recipe to the beloved Pad Thai and aromatic curries, each plate
                tells a story of culinary tradition. Our friendly owner and
                dedicated kitchen team pour their passion into every order,
                whether you&apos;re dining in our welcoming space or enjoying
                takeout at home.
              </p>
              <p>
                With generous portions, bold flavors, and a welcoming atmosphere
                that keeps guests coming back, Palm Thai has become a beloved
                neighborhood staple. Come experience why our community has given
                us 847+ five-star reviews and counting.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <span className="block font-heading text-3xl text-primary">
                  81+
                </span>
                <span className="text-text-secondary text-sm">Dishes</span>
              </div>
              <div className="w-px h-12 bg-text-secondary/20" />
              <div className="text-center">
                <span className="block font-heading text-3xl text-primary">
                  4.55
                </span>
                <span className="text-text-secondary text-sm">Rating</span>
              </div>
              <div className="w-px h-12 bg-text-secondary/20" />
              <div className="text-center">
                <span className="block font-heading text-3xl text-primary">
                  847+
                </span>
                <span className="text-text-secondary text-sm">Reviews</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-section-alt-bg relative">
              {/* Decorative placeholder for restaurant image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <p className="font-heading text-2xl text-text-primary/60">Palm Thai</p>
                  <p className="text-text-secondary/60 text-sm mt-2">Tampa Palms, FL</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
