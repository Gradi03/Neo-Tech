/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://neodstvtechnologies.co.za",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, url) => {
    const staticUrls = ["/about", "/contact", "/services"];
    if (staticUrls.includes(url)) {
      return {
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.7,
      };
    }
    return {
      loc: url,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    };
  },
};
