// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/styles/global.scss'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-title', content: 'Crave' },
        { name: 'application-name', content: 'Crave' },
        { name: 'msapplication-TileColor', content: '#f2efdd' },
        {
          name: 'msapplication-config',
          content: '/icons/fav/browserconfig.xml',
        },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/icons/fav/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/icons/fav/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/icons/fav/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/icons/fav/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/icons/fav/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
        { rel: 'shortcut icon', href: '/icons/fav/favicon.ico' },
      ],
    },
  },
})
