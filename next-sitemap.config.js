/**
 * next-sitemap
 * @see https://github.com/iamvishnusankar/next-sitemap
 */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://zcip.github.io/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "out",
}
