const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location & Hours", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="section-padding bg-secondary border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl text-text-on-dark mb-4">
              <span className="text-primary">Palm</span> Thai
            </h3>
            <p className="text-text-on-dark/60 leading-relaxed mb-4">
              Authentic Thailand Cuisine in Tampa Palms. Serving the New Tampa
              community with bold, fresh Thai flavors since day one.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com/Palmthaihouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-on-dark/50 hover:text-primary transition-colors"
              aria-label="Visit Palm Thai on Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-body font-bold text-text-on-dark uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-on-dark/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.grubhub.com/restaurant/palm-thai-restaurant-17022-palm-pointe-dr-tampa/2721814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-on-dark/60 hover:text-primary transition-colors"
                >
                  Order on GrubHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-body font-bold text-text-on-dark uppercase tracking-wider text-sm mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-text-on-dark/60">
              <p>
                17022 Palm Pointe Dr
                <br />
                Tampa, FL 33647
              </p>
              <p>
                <a
                  href="tel:8132523534"
                  className="hover:text-primary transition-colors"
                >
                  (813) 252-3534
                </a>
              </p>
              <div className="text-sm">
                <p>Mon-Fri: 11:30 AM - 9:00 PM</p>
                <p>Sat: 12:00 PM - 9:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-text-on-dark/40 text-sm">
            &copy; {new Date().getFullYear()} Palm Thai of Tampa Bay. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
