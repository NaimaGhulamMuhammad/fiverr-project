/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    path: "/assets/images",
    domains: [
      "d1ojs48v3n42tp.cloudfront.net",
      "www.citypng.com",
      "upload.wikimedia.org",
      "kenzawellness.com",
      "wwsthemes.com",
    ],
    // loader: "imgix",
  },
  async rewrites() {
    return [
      {
        source: "/api/:any*",
        destination: "/api/:any*",
      },
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
