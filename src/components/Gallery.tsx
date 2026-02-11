const galleryImages = [
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/Mfomi-GxO7WNxz_JoIRHnw/o.jpg", alt: "Khao Soi Chicken - Northern Thai Egg Noodle Curry", aspectClass: "aspect-[4/5]" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/ODI5FM_8uOnzoonl-67Mug/o.jpg", alt: "Pad Thai with chicken", aspectClass: "aspect-[3/4]" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/iTUqSXl2yTJhoMFOfQhpkA/o.jpg", alt: "Green Curry", aspectClass: "aspect-square" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/PleAsrsum0rNgENzAveWEg/o.jpg", alt: "Fresh Rolls with peanut sauce", aspectClass: "aspect-[4/5]" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/at2s-JB1XXvDWb95-LQUaA/o.jpg", alt: "Tom Kha Soup", aspectClass: "aspect-[3/4]" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/b775HFPPWTmFFjmGp2IU2A/o.jpg", alt: "Mango and Sticky Rice", aspectClass: "aspect-square" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/8ioghb9T3A5Ve0Lv81Q3wg/o.jpg", alt: "Palm Thai restaurant interior", aspectClass: "aspect-[4/3]" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/5WX7l6vsVqj1Gyqgs4kujQ/o.jpg", alt: "Drunken Noodle", aspectClass: "aspect-[3/4]" },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/4lpXATlIh3uLoU0bg23TdA/o.jpg", alt: "Pineapple Fried Rice", aspectClass: "aspect-square" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            A Visual Feast
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From our kitchen to your table — a glimpse of the authentic Thai flavors awaiting you
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.aspectClass} rounded-xl overflow-hidden relative group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium text-sm p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Yelp Photos Link */}
        <div className="text-center mt-10">
          <a
            href="https://www.yelp.com/biz/palm-thai-tampa-4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
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
