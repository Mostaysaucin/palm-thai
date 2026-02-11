const hours = [
  { day: "Monday", time: "11:30 AM - 9:00 PM" },
  { day: "Tuesday", time: "11:30 AM - 9:00 PM" },
  { day: "Wednesday", time: "11:30 AM - 9:00 PM" },
  { day: "Thursday", time: "11:30 AM - 9:00 PM" },
  { day: "Friday", time: "11:30 AM - 9:00 PM" },
  { day: "Saturday", time: "12:00 PM - 9:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Location() {
  return (
    <section id="location" className="section-padding bg-hero-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-on-dark mb-4">
            Location &amp; Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-3">
                Find Us
              </h3>
              <div className="space-y-2 text-text-on-dark/80">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    17022 Palm Pointe Dr
                    <br />
                    Tampa, FL 33647
                  </span>
                </p>
                <p className="text-text-on-dark/50 text-sm ml-8 italic">
                  In the shopping plaza behind the Olive Garden
                </p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-3">
                Call Us
              </h3>
              <a
                href="tel:8132523534"
                className="flex items-center gap-3 text-text-on-dark/80 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">(813) 252-3534</span>
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-3">
                Hours
              </h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center text-text-on-dark/80"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span
                      className={
                        h.time === "Closed"
                          ? "text-red-400"
                          : "text-text-on-dark/60"
                      }
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=17022+Palm+Pointe+Dr+Tampa+FL+33647"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-text-on-primary px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map Column */}
          <div className="rounded-xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.4!2d-82.3554!3d28.1461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c5f8b1b1b1b1%3A0x1234567890abcdef!2s17022+Palm+Pointe+Dr%2C+Tampa%2C+FL+33647!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palm Thai Location - 17022 Palm Pointe Dr, Tampa, FL 33647"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
