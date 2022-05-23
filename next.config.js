/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // /contact로 이동하면 /form으로 이동하게 된다.
        source: "/contact",
        destination: "/form",
        // :path를 이용하면 source의 주소에서 path가 유지된 상태로 destination 주소로 이동이 된다.
        // source: "/old-url/:path*",
        // destination: "/new-url/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
      {
        // id값끼리 맞춰줌
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
