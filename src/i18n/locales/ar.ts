import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "JuanFernandoCastaneda",
  "site.title1": "Juan Fernando",
  "site.title2": "ola",
  "site.desc": "ثيمة متفرعة من استروبيبر مع دعم للترجمة",
};

const ARLocale: I18nStrings = {
  ...baseStrings,
  cv: "cv",
  projects: "projects",
  "hero.title": "أهلاً و سهلاً",
  "hero.body": `استروبيبر هو قالب مدونة Astro بسيط، سريع الاستجابة، سهل الاستخدام، ومتوافق مع محركات البحث. يتبع هذا القالب أفضل الممارسات ويوفر إمكانية الوصول للأشخاص ذوى الهمم. يدعم الوضعان الفاتح والداكن افتراضيًا. كما يمكن أيضًا تكوين أنظمة ألوان إضافية.`,
  "hero.beforeReadme": "اقرأ مقالات المدونة أو اطّلع على",
  "hero.readme": "اقرأنى",
  "hero.afterReadme": "لمزيد من المعلومات.",
  copy: "نسخ",
  copied: "تم النسخ",
  by: "بواسطة",
  about: "عنى",
  socialLinks: "تابعنى على",
  home: "الصفحة الرئيسية",
  posts: "المقالات",
  "posts.desc": "كل ما نشرت من مقالات",
  tag: "موضوع",
  "tag.desc": 'كل المقالات المتعلقة بموضوع "{name}".',
  tags: "المواضيع",
  "tags.desc": "كل المواضيع التى كتبت بها",
  archives: "الأرشيف",
  "archives.desc": "جميع المقالات المؤرشفة",
  featured: "المميزة",
  recentPosts: "أحدث المقالات",
  tableOfContents: "جدول المحتويات",
  "tableOfContents.desc": "افتح جدول المحتويات",
  allPosts: "جميع المقالات",
  search: "البحث",
  "search.desc": "ابحث عن أي مقالة تريدها",
  "search.placeholder": "ابحث عن ما تريد",
  pages: "الصفحات",
  page: "الصفحة",
  pageWithNo: "صفحة رقم {no}",
  "navigation.goBack": "اذهب للخلف",
  "navigation.goBackHome": "اذهب للصفحة الرئيسية",
  "navigation.backToTop": "للأعلى",
  "navigation.nextPost": "المقالة التالية",
  "navigation.prevPost": "المقالة السابقة",
  pageNotFound: "هذه الصفحة غير موجودة",
  notFound: "غير موجود",
  rssFeed: "تغذية  بواسطة RSS",
  suggestChanges: "اقترح تعديل",
  toggleLightAndDark: "بدل بين الصبح و الليل",
  "pagination.prev": "السابق",
  "pagination.next": "التالى",
  "footer.text": "حقوق الطبع والنشر © {year} | جميع الحقوق محفوظة",
  "date.published": "نشر فى",
  "date.updated": "تم التحديث فى",
  "date.month.1": "يناير",
  "date.month.2": "فبراير",
  "date.month.3": "مارس",
  "date.month.4": "أبريل",
  "date.month.5": "مايو",
  "date.month.6": "يونيه",
  "date.month.7": "يوليو",
  "date.month.8": "أغسطس",
  "date.month.9": "سبتمبر",
  "date.month.10": "أكتوبر",
  "date.month.11": "نوفمبر",
  "date.month.12": "ديسمبر",
  "socials.github": `${baseStrings["site.title"]} على Github`,
  "socials.facebook": `${baseStrings["site.title"]} على Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} على Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} على LinkedIn`,
  "socials.mail": `أرسل رسالة إلكترونيى إلى ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} على X`,
  "socials.twitch": `${baseStrings["site.title"]} على Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} على Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} على Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} على Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} على Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} على TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} على CodePen`,
  "socials.discord": `${baseStrings["site.title"]} على Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} على GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} على Reddit`,
  "socials.skype": `${baseStrings["site.title"]} على Skype`,
  "socials.steam": `${baseStrings["site.title"]} على Steam`,
  "socials.telegram": `${baseStrings["site.title"]} على Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} على Mastodon`,
  "sharePost.desc": "شارك هذه المقالة على",
  "sharePost.on": "شارك هذه المقالة على {media}",
  "sharePost.via": "شارك هذه المقالة بواسطة {media}",
  "a11y.skipToContent": "تجاوز إلى المحتوى",
  "a11y.rssFeed": "تغذية  بواسطة rss",
  "a11y.openMenu": "افتح القائمة",
  "a11y.closeMenu": "اغلق القائمة",
  "a11y.archives": "الأرشيف",
  "a11y.search": "البحث",
  "a11y.themeButtonDefaultLabel": "تلقائى",
  "a11y.pagination": "ترقيم الصفحات",
  "a11y.breadcrumb": "اثار الطريق",
  "a11y.languagePicker": "اختر لغة الموقع",
};

export default ARLocale;
