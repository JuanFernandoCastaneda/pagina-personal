export const SITE = {
  website: "https://juanfernandocastaneda.dev", // replace this with your deployed domain
  author: "JuanFernandoCastaneda",
  profile: "",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false, // Mostrar archivados
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    url: "https://github.com/yousef8/astro-paper-i18n/edit/main/",
  },
  dynamicOgImage: true,
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "America/Bogota", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
