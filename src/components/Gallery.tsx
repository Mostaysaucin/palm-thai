const galleryImages = [
  { alt: "Khao Soi Chicken - Northern Thai Egg Noodle Curry", aspectClass: "aspect-[4/5]", gradient: "from-amber-800 to-amber-600" },
  { alt: "Pad Thai with shrimp", aspectClass: "aspect-[3/4]", gradient: "from-orange-800 to-orange-600" },
  { alt: "Green Curry with chicken", aspectClass: "aspect-square", gradient: "from-green-800 to-green-600" },
  { alt: "Fresh Spring Rolls", aspectClass: "aspect-[4/5]", gradient: "from-lime-800 to-lime-600" },
  { alt: "Tom Kha Soup", aspectClass: "aspect-[3/4]", gradient: "from-yellow-800 to-yellow-600" },
  { alt: "Mango Sticky Rice dessert", aspectClass: "aspect-square", gradient: "from-amber-700 to-orange-500" },
  { alt: "Palm Thai restaurant interior", aspectClass: "aspect-[4/3]", gradient: "from-stone-800 to-stone-600" },
  { alt: "Drunken Noodles close-up", aspectClass: "aspect-[3/4]", gradient: "from-red-800 to-red-600" },
  { alt: "Crab Rangoon appetizer", aspectClass: "aspect-square", gradient: "from-amber-900 to-amber-700" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            A Visual Feast
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From our kitchen to your table — a glimpse of the authentic Thai
            flavors awaiting you
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.aspectClass} rounded-xl overflow-hidden relative group cursor-pointer`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${image.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
              >
                <div className="text-center p-4 opacity-60 group-hover:opacity-80 transition-opacity">
                  <svg
                    className="w-12 h-12 text-white/60 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z"
                    />
                  </svg>
                  <p className="text-white/70 text-sm">{image.alt}</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Yelp Photos Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.yelp.com/biz/palm-thai-tampa-4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
          >
            See 292 photos on Yelp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
