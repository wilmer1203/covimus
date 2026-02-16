import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, ogTitle, ogDescription, ogType = 'website' }) => {
    const fullTitle = `${title} | COVIMUS`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
        </Helmet>
    );
};

export default SEO;
