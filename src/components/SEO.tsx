import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string; // Add image for social media
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, keywords, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || ''} />
      <meta name="keywords" content={keywords || ''} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:url" content={canonicalUrl || ''} />
      <meta property="og:image" content={image || ''} />
      <meta property="og:type" content="website" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={image || ''} />
    </Helmet>
  );
};

export default SEO;
