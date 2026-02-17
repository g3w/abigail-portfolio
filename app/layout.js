import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: {
    default: "Abigail Tetteh | Software Engineer",
    template: "%s | Abigail Tetteh",
  },
  description:
    "Software Engineer at Bank of America passionate about building scalable systems, mentoring in STEM, and creating impactful technology solutions.",
  keywords: [
    "Abigail Tetteh",
    "Software Engineer",
    "Bank of America",
    "React",
    "Next.js",
    "Women in Tech",
  ],
  authors: [{ name: "Abigail Tetteh" }],
  creator: "Abigail Tetteh",

  openGraph: {
    title: "Abigail Tetteh | Software Engineer",
    description:
      "Software Engineer at Bank of America. Passionate about technology, mentorship, and impact.",
    url: "https://yourdomain.com",
    siteName: "Abigail Tetteh Portfolio",
    images: [
      {
        url: "/images/Abigail.JPG",
        width: 1200,
        height: 630,
        alt: "Abigail Tetteh Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abigail Tetteh | Software Engineer",
    description:
      "Software Engineer at Bank of America building impactful systems.",
    images: ["/images/Abigail.JPG"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abigail Tetteh",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Bank of America",
              },
              url: "https://yourdomain.com",
              sameAs: [
                "https://linkedin.com/in/ATetteh",
                "https://github.com/AbigailTetteh",
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
