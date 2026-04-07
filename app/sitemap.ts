import { MetadataRoute } from "next";

const base = "https://rbghotels.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                     priority: 1,   changeFrequency: "weekly"  },
    { url: `${base}/rooms`,          priority: 0.9, changeFrequency: "weekly"  },
    { url: `${base}/dining`,         priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/spa`,            priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/concierge`,      priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/guest-services`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/contact`,        priority: 0.8, changeFrequency: "monthly" },
  ];
}
