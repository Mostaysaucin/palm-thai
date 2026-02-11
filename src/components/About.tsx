export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-8 leading-tight">
              A Taste of Thailand
              <br />
              <span className="text-primary">in Tampa Palms</span>
            </h2>
            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
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

            {/* Stats */}
            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="block font-heading text-4xl text-primary">81+</span>
                <span className="text-text-secondary text-sm mt-1 block">Dishes</span>
              </div>
              <div className="w-px h-14 bg-text-secondary/15" />
              <div className="text-center">
                <span className="block font-heading text-4xl text-primary">4.55</span>
                <span className="text-text-secondary text-sm mt-1 block">Rating</span>
              </div>
              <div className="w-px h-14 bg-text-secondary/15" />
              <div className="text-center">
                <span className="block font-heading text-4xl text-primary">847+</span>
                <span className="text-text-secondary text-sm mt-1 block">Reviews</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=1000&fit=crop&q=80"
                alt="Authentic Thai cuisine at Palm Thai"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary text-xs font-medium leading-snug italic">
                &ldquo;Best Thai food in the New Tampa area&rdquo;
              </p>
              <p className="text-text-secondary text-xs mt-1">— Google Review</p>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
