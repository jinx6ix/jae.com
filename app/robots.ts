export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/internal"],
      },
    ],
    sitemap: "https://jaetravel.com/sitemap.xml",
  }
}
