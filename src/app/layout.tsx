import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://breatherestolounge.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Breathe Restaurant & Lounge | Enugu's Upscale Resto-Lounge",
    template: "%s | Breathe Restaurant & Lounge",
  },
  description:
    "Delectable local & intercontinental dishes and a complete relaxation experience in Independence Layout, Enugu. Cocktails, cuisine, and cozy nights at Breathe Restaurant & Lounge.",
  keywords: [
    "Breathe Restaurant",
    "Breathe Lounge",
    "Enugu restaurant",
    "Independence Layout Enugu",
    "resto-lounge Enugu",
    "cocktail bar Enugu",
    "Nigerian lounge",
  ],
  openGraph: {
    title: "Breathe Restaurant & Lounge",
    description:
      "Delectable local & intercontinental dishes · Complete relaxation experience · Independence Layout, Enugu.",
    url: siteUrl,
    siteName: "Breathe Restaurant & Lounge",
    locale: "en_NG",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathe Restaurant & Lounge",
    description:
      "Delectable local & intercontinental dishes · Complete relaxation experience · Independence Layout, Enugu.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Breathe Restaurant & Lounge",
  image: `${siteUrl}/og-image.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+234-90-253-2983",
  servesCuisine: ["Nigerian", "Local", "Intercontinental"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100A Independence Avenue, Umuawulu St",
    addressLocality: "Independence Layout, Enugu",
    addressRegion: "Enugu State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4483,
    longitude: 7.5106,
  },
  hasMap: "https://maps.google.com/?q=CGVH+92H+Enugu",
  // TODO(client): placeholder hours pending confirmation — see src/lib/data/site.ts
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "02:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/breathe.resto.lounge",
    "https://www.threads.net/@breathe.resto.lounge",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${greatVibes.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
