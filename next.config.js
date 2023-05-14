/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  // async headers() {
  //   return [
  //     {
  //       source: "/_next/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: "http://localhost:3000/" },
  //       ],
  //     },
  //   ]
  // },
}