
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flexiride.in',
      lastModified: new Date(),
    },
    {
      url: 'https://flexiride.in/about',
      lastModified: new Date(),
    },
    {
      url: 'https://flexiride.in/vehicles',
      lastModified: new Date(),
    },
    {
      url: 'https://flexiride.in/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://flexiride.in/how-it-works',
      lastModified: new Date(),
    },
    {
      url: 'https://flexiride.in/privacy',
      lastModified: new Date(),
    },
  ]
}
