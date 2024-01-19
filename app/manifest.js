export default function manifest() {
    return {
      name: 'medCode blogs & portfolio',
      short_name: 'MedCode',
      description: `Learning programming is accessible for beginners through free software programming
      courses These courses introduce essential best programming languages`,
      start_url: '/',
      display: 'standalone',
      Scope: "/",  "orientation": "portrait",
      lang:'en',
      theme_color: '#f5f5f5',
      icons: [
        {
          src: '/app/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
      start_url: "/"
    }
  }