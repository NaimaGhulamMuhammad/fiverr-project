/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "d1ojs48v3n42tp.cloudfront.net",
      "www.citypng.com",
      "upload.wikimedia.org",
      "kenzawellness.com",
      "wwsthemes.com",
    ],
    // loader: "imgix",
  },
};

module.exports = nextConfig;
