/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://neodstvtechnologies.co.za",
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 7000, // Limits sitemap to 7000 URLs (only needed for large sites)
  changefreq: "weekly", // Suggests to search engines how often content changes
  priority: 0.7, // Sets the priority of your pages (0.7 is typical for most pages)
};
