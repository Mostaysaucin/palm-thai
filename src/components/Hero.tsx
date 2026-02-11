export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative Thai pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23AEC240' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto text-center relative z-10 px-6">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-primary text-sm font-medium tracking-wider">Sawatdee!</span>
          <span className="text-white/60 text-sm">Welcome to</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white mb-4 leading-[1.1]">
          <span className="text-primary">Palm</span> Thai
        </h1>
        <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white/70 mb-6">
          of New Tampa
        </p>

        {/* Tagline */}
        <p className="text-white/60 text-lg sm:text-xl max-w-lg mx-auto mb-4 font-body">
          Authentic Thailand Cuisine in Tampa Palms
        </p>

        {/* Rating Badge */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">4.6 on Google &middot; 847+ Reviews</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="group bg-primary text-secondary px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            View Our Menu
          </a>
          <a
            href="https://www.grubhub.com/restaurant/palm-thai-restaurant-17022-palm-pointe-dr-tampa/2721814"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
          >
            Order Online
          </a>
        </div>
      </div>

      {/* Scroll Indicator — positioned relative to section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
