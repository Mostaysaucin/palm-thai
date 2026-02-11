export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding relative min-h-screen flex items-center justify-center bg-hero-bg overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Greeting */}
        <p className="text-primary font-body text-lg sm:text-xl tracking-widest uppercase mb-6 animate-fade-in">
          Sawatdee!
        </p>

        {/* Main Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-text-on-dark mb-6 leading-tight">
          <span className="text-primary">Palm</span> Thai
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-text-on-dark/80">
            of New Tampa
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-text-on-dark/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-body">
          Authentic Thailand Cuisine in Tampa Palms
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-primary text-text-on-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            View Our Menu
          </a>
          <a
            href="tel:8132523534"
            className="border-2 border-text-on-dark/30 text-text-on-dark px-8 py-4 rounded-full text-lg font-bold hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
          >
            Call to Order
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-text-on-dark/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
