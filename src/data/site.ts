/**
 * Site-wide config. Links left as empty strings are simply not rendered,
 * so you can fill them in later without touching any components.
 */
export const SITE = {
  name: "David Bao",
  taglineEn: "Game designer & developer — stories told through systems.",
  taglineZh: "游戏设计师与开发者——用系统讲故事。",
  email: "yubao9527@gmail.com",
  linkedin: "https://www.linkedin.com/in/yudavidbao/",
  phone: "+12134490511",
  phoneDisplay: "(213) 449-0511",
  /** English resume, served from /public. Shown while the site is in EN mode. */
  resumeUrl: "/David-Bao-Resume.pdf",
  /** Chinese resume. Swapped in by LanguageScript when the site is in ZH mode. */
  resumeUrlZh: "/Bao-Yu-Resume-zh.pdf",
  /** TODO(David): set your GitHub profile URL when ready */
  github: "",
};
