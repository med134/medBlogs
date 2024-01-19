export default function manifest() {
  return {
    name: "medCode blogs & portfolio",
    short_name: "MedCode",
    description: `Learning programming is accessible for beginners through free software programming`,
    start_url: "/",
    display: "standalone",
    theme_color: "#f5f5f5",
    lang: "en",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/app/favicon.ico",
        sizes: "192x192",
        type: "image/ico",
        purpose: "any maskable",
      },
      {
        src: "/app/favicon.ico",
        sizes: "384x384",
        type: "image/ico",
      },
      {
        src: "/app/favicon.ico",
        sizes: "512x512",
        type: "image/ico",
      },
    ],
  };
}
