import { MetadataRoute } from 'next';

const baseURL = 'https://joaoemaria-cafeteria.vercel.app/';

export default function sitemap() {
  // const response = await fetch(`${baseURL}/`);
  // const {}

  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
    },
  ];
}
