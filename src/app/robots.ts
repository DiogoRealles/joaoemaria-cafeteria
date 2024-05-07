import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseURL = 'https://joaoemaria-cafeteria.vercel.app/';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/privacy', '/private'],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
