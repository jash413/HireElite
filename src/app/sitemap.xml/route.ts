export async function GET() {
  const baseUrl = "https://hireelite.dev";
  const lastModified = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Optional: force dynamic if sitemap data changes often
export const dynamic = "force-dynamic";
