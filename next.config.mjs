// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // false = 307 (موقت)
      },
    ];
  },
};

export default nextConfig;
