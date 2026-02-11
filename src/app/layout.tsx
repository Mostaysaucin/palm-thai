import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palm Thai of Tampa Bay | Authentic Thai Cuisine in New Tampa",
  description:
    "Sawatdee! Palm Thai serves authentic Thailand cuisine in Tampa Palms, New Tampa. Enjoy Khao Soi, Pad Thai, Curry, and 80+ dishes. Dine-in or order on GrubHub. Mon-Fri 11:30AM-9PM, Sat 12-9PM.",
  keywords: [
    "Palm Thai",
    "Thai food Tampa",
    "Thai restaurant New Tampa",
    "Tampa Palms Thai",
    "authentic Thai cuisine",
    "Khao Soi Tampa",
    "Pad Thai Tampa",
    "Thai food delivery Tampa",
    "best Thai food Tampa",
  ],
  openGraph: {
    title: "Palm Thai of Tampa Bay | Authentic Thai Cuisine in New Tampa",
    description:
      "Sawatdee! Authentic Thailand cuisine in Tampa Palms. 80+ dishes, lunch specials from $8.95. Rated 4.6 on Google (661 reviews).",
    type: "website",
    locale: "en_US",
    siteName: "Palm Thai of Tampa Bay",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.palmthainewtampa.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Palm Thai of Tampa Bay",
  alternateName: "Palm Thai",
  description:
    "Authentic Thailand cuisine in Tampa Palms, New Tampa. Serving Khao Soi, Pad Thai, Curry, and 80+ Thai dishes.",
  url: "https://www.palmthainewtampa.com",
  telephone: "+1-813-252-3534",
  priceRange: "$$",
  servesCuisine: "Thai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17022 Palm Pointe Dr",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33647",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.1461,
    longitude: -82.3554,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "12:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.55",
    bestRating: "5",
    ratingCount: "847",
  },
  hasMenu: {
    "@type": "Menu",
    name: "Palm Thai Menu",
    description: "81 authentic Thai dishes across 12 categories",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
