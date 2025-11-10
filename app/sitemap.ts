export default function sitemap() {
  const baseUrl = "https://jaetravel.com"

  const staticRoutes = [
    { url: baseUrl, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/tours`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/destinations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/disabilities-accessible-tours`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vehicle-hire`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/about`, changeFrequency: "yearly", priority: 0.5 },
  ]

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }))
}
