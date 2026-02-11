export default function OrderingCTA() {
  return (
    <section id="order" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-4xl sm:text-5xl text-text-on-primary mb-4">
          Ready to Order?
        </h2>
        <p className="text-text-on-primary/80 mb-8 text-lg max-w-xl mx-auto">
          Enjoy authentic Thai flavors from Palm Thai. Order online through
          GrubHub for delivery or call us directly for pickup.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.grubhub.com/restaurant/palm-thai-restaurant-17022-palm-pointe-dr-tampa/2721814"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-text-on-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/80 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
          >
            Order on GrubHub
          </a>
          <a
            href="tel:8132523534"
            className="border-2 border-text-on-primary/30 text-text-on-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-text-on-primary/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Call (813) 252-3534
          </a>
        </div>
      </div>
    </section>
  );
}
