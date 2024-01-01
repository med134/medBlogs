export default function manifest() {
    return {
      name: 'medcode blogs & portfolio',
      short_name: 'medcode',
      description: `Learning programming is accessible for beginners through free software programming
      courses These courses introduce essential best programming languages`,
      start_url: '/',
      display: 'standalone',
      lang:'en',
      theme_color: 'light',
      icons: [
        {
          src: '/app/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }