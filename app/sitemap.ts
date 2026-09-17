import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://cascrete.com/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cascrete.com/careers",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cascrete.com/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}