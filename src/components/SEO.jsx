import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, ogTitle, ogDescription, ogType = 'website', canonical, ogUrl, jsonLd }) => {
    const fullTitle = `${title} | COVIMUS`;
    const url = ogUrl || canonical;
    const jsonLdBlocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:type" content={ogType} />
            {url && <meta property="og:url" content={url} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            {url && <meta property="twitter:url" content={url} />}

            {/* Structured data (schema.org), page-specific */}
            {jsonLdBlocks.map((block, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(block)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
