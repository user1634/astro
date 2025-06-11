import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://yzual.com/",
  author: "Yzual",
  desc: "Yzual的个人博客",
  title: "Yzual",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/user1634",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:pmme.reproduce124@passinbox.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/mudrocks_bot",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://github.com/yq612/astro-paper-plus",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
