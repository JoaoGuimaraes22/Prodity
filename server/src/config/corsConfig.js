const corsConfig =
  process.env.NODE_ENV !== "production"
    ? {
        origin: "http://localhost:3000",
        credentials: true,
      }
    : {
        origin: "https://your-website.com",
        credentials: true,
      };

module.exports = corsConfig;
