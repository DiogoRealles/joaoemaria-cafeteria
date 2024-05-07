import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemap = fetch('https://joao-maria-cafeteria.vercel.app/sitemapa.xml');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://joao-maria-cafeteria.vercel.app/sitemapa.xml',
  };
}
