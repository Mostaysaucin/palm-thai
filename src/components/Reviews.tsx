const featuredReviews = [
  {
    text: "Palm Thai stands out as a vibrant gem in Tampa's culinary scene, celebrated for its authentic Thai cuisine and inviting atmosphere.",
    author: "Google Reviewer",
    platform: "Google",
    rating: 5,
  },
  {
    text: "Patrons rave about the restaurant's dedication to flavor, with dishes like Pineapple Fried Rice and Drunken Noodles receiving high praise for their bold tastes and perfect seasoning.",
    author: "Google Reviewer",
    platform: "Google",
    rating: 5,
  },
  {
    text: "Best Thai food in the New Tampa area. Khao Soi is a must-try.",
    author: "Yelp Reviewer",
    platform: "Yelp",
    rating: 5,
  },
];

const platforms = [
  { name: "Google", rating: 4.6, count: 661, color: "bg-blue-500" },
  { name: "Yelp", rating: 4.4, count: 186, color: "bg-red-500" },
  { name: "Facebook", rating: 4.4, count: null, color: "bg-indigo-500" },
];

function StarRating({ rating, size = "w-5 h-5" }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${size} ${star <= rating ? "star-filled" : "star-empty"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-section-alt-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            What Our Guests Say
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-6">
            Loved by the Community
          </h2>

          {/* Composite Rating */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-heading text-6xl text-text-primary">4.55</span>
            <div>
              <StarRating rating={5} size="w-6 h-6" />
              <p className="text-text-secondary text-sm mt-1">
                Based on 847+ reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating rating={review.rating} />
              <p className="text-text-primary mt-4 leading-relaxed text-base italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-text-secondary text-sm">
                  {review.author}
                </span>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    review.platform === "Google"
                      ? "bg-blue-50 text-blue-600"
                      : review.platform === "Yelp"
                      ? "bg-red-50 text-red-600"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {review.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Breakdown */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 bg-surface rounded-full px-5 py-3 shadow-sm"
            >
              <div className={`w-3 h-3 rounded-full ${platform.color}`} />
              <span className="font-bold text-text-primary text-sm">
                {platform.name}
              </span>
              <span className="text-primary font-bold">
                {platform.rating}/5
              </span>
              {platform.count && (
                <span className="text-text-secondary text-sm">
                  ({platform.count})
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Review Themes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "Authentic Thai flavors",
            "Generous portions",
            "Friendly owner and staff",
            "Great lunch specials",
            "Fast takeout service",
            "Welcoming atmosphere",
          ].map((theme) => (
            <span
              key={theme}
              className="text-sm text-text-secondary bg-surface/60 px-4 py-2 rounded-full border border-primary/10"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
