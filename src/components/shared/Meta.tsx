import Head from "next/head";

export const Meta = ({
  title = "Birhanu Dejen – Full-Stack Software Developer | React & Node.js Expert",
  description = "Birhanu Dejen is a professional full-stack developer based in Addis Ababa, Ethiopia. Specializing in modern web technologies including React, Next.js, Node.js, and TypeScript to build scalable applications.",

  keywords = "Full-Stack Developer Ethiopia, Software Engineer Addis Ababa, React Specialist, Node.js Expert, Next.js Developer, Web Development Ethiopia, Birhanu Dejen Portfolio, Ethiopian Software Developer",
  siteUrl = "https://birhanudejen.vercel.app",
  image = "/img.jpg",
  imageAlt = "Birhanu Dejen - Professional Full-Stack Developer",
  author = "Birhanu Dejen",
  locale = "en_US",
  type = "website",
}) => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Birhanu Dejen",
    jobTitle: "Full-Stack Software Developer",
    url: siteUrl,
    sameAs: [
      "https://github.com/birhanu-dejen",
      "https://linkedin.com/in/birhanu-dejen",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "Ethiopia",
    },
  };

  return (
    <Head>
      <title>{title}</title>

      {/* Primary Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Birhanu Dejen - Portfolio" />
      <meta property="og:locale" content={locale} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourhandle" />
      <meta name="twitter:creator" content="@yourhandle" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Robots & Web Crawlers */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="AdsBot-Google" content="index, follow" />

      {/* App Specific Meta */}
      <meta name="application-name" content="Birhanu Dejen Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Birhanu Dejen" />

      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
  );
};
