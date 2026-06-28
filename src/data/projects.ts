/**
 * Single source of truth for all project content (both languages).
 *
 * To add a new project:
 *   1. Copy the template at the bottom of this file (UPCOMING_PROJECT_TEMPLATE).
 *   2. Fill in the fields — anything optional can be omitted and the page
 *      simply won't render that section.
 *   3. Set `published: true` and it appears on the site automatically
 *      (home grid, /projects/all, and its own /projects/<id> page).
 *
 * Order: newest → oldest. The first published project is the featured card.
 */

export type Localized = { en: string; zh: string };

export type CaseStudySection = {
  heading: Localized;
  body: Localized[]; // each item = one paragraph
};

export type ProjectEntry = {
  id: string; // URL slug → /projects/<id>
  title: string;
  year: number;
  published: boolean;
  status: Localized; // small pill, e.g. "Released"
  tag: Localized; // genre / discipline line
  summary: Localized; // card description
  tools: string[];
  chips: Localized[];
  cover: string; // poster image (shown before the video loads / when there's no video)
  youtubeId?: string; // if set, the card/detail media becomes a click-to-play YouTube player
  links?: { youtube?: string; github?: string; play?: string };
  caseStudy: {
    lede: Localized;
    role?: Localized;
    team?: Localized;
    engine?: string;
    timeframe?: string;
    sections: CaseStudySection[]; // empty array = no sections yet
    gallery: { src: string; alt: string }[];
    inProgress?: boolean; // shows a "full case study in progress" note
  };
};

export const ALL_PROJECTS: ProjectEntry[] = [
  {
    id: "traveler",
    title: "Traveler",
    year: 2026,
    published: true,
    status: { en: "Unity 3D", zh: "Unity 3D" },
    tag: { en: "Narrative · Moral Choice", zh: "叙事 · 道德抉择" },
    summary: {
      en: "A Unity 3D narrative game about a criminal choosing a path toward heaven or hell—exploring moral choice through exploration and story beats.",
      zh: "一款 Unity 3D 叙事向作品：一名罪犯在通往天堂或地狱的路径之间做出选择，通过探索与剧情节点呈现道德抉择。",
    },
    tools: ["Unity", "3D", "Story-driven"],
    chips: [
      { en: "Solo Dev", zh: "独立开发" },
      { en: "Choice", zh: "抉择" },
      { en: "3D", zh: "3D" },
    ],
    cover: "/gameplay/traveler.jpg",
    youtubeId: "rh9rtkyCN-U",
    links: { youtube: "https://www.youtube.com/watch?v=rh9rtkyCN-U" },
    caseStudy: {
      // TODO(David): replace lede with your own positioning line, then add
      // sections: 你负责什么 / 1-2 个设计决策深挖 / 截图 gallery。
      lede: {
        en: "A criminal walks the line between heaven and hell. Traveler explores how moral choice can be carried by exploration and story beats rather than menus and dialogue boxes.",
        zh: "一名罪犯行走在天堂与地狱的分界线上。Traveler 探索如何让道德抉择由探索与剧情节点承载，而不是靠菜单和对话框。",
      },
      role: { en: "Solo developer — design, narrative, implementation", zh: "独立开发——设计、叙事、实现" },
      engine: "Unity (3D)",
      timeframe: "2026",
      sections: [],
      gallery: [],
      inProgress: true,
    },
  },
  {
    id: "after-theyre-gone",
    title: "After They're Gone",
    year: 2025,
    published: true,
    status: { en: "Unity 3D", zh: "Unity 3D" },
    tag: { en: "Environmental Storytelling", zh: "环境叙事" },
    summary: {
      en: "A 3D Unity game about robots salvaging a world without humans—a dystopian city where sanitation falls entirely to machines, told through exploration and environmental storytelling.",
      zh: "一款 3D Unity 游戏，讲述在人类消失后的世界里，机器人拾荒与清理的故事：一座反乌托邦城市中，环卫工作完全交给机器，通过探索与环境叙事呈现世界。",
    },
    tools: ["Unity", "3D", "Environment storytelling"],
    chips: [
      { en: "Solo", zh: "独立" },
      { en: "Exploration", zh: "探索" },
      { en: "Worldbuilding", zh: "世界观" },
    ],
    cover: "/gameplay/after.jpg",
    youtubeId: "zuhjDCuK5eU",
    links: { youtube: "https://www.youtube.com/watch?v=zuhjDCuK5eU" },
    caseStudy: {
      // TODO(David): add sections + gallery screenshots.
      lede: {
        en: "What stories does a city tell when no one is left to tell them? After They're Gone hands the world to its robots and lets the environment do the talking.",
        zh: "当无人讲述时，一座城市还能讲出什么故事？After They're Gone 把世界交给机器人，让环境自己开口说话。",
      },
      role: { en: "Solo developer — design, environment, implementation", zh: "独立开发——设计、场景、实现" },
      engine: "Unity (3D)",
      timeframe: "2025",
      sections: [],
      gallery: [],
      inProgress: true,
    },
  },
  {
    id: "overtale",
    title: "Overtale",
    year: 2024,
    published: true,
    status: { en: "Released", zh: "已发布" },
    tag: { en: "2D · Pixel · Shooter", zh: "2D · 像素 · 射击" },
    summary: {
      en: "A 2D pixel-art platform shooter made in Unity: move, jump, and shoot through compact levels built around readable combat and flow.",
      zh: "一款用 Unity 制作的 2D 像素平台射击游戏：在紧凑关卡里移动、跳跃与射击，强调可读的操作反馈与战斗节奏。",
    },
    tools: ["Unity", "C#", "Pixel art"],
    chips: [
      { en: "Solo Dev", zh: "独立开发" },
      { en: "Unity", zh: "Unity" },
      { en: "2D", zh: "2D" },
    ],
    cover: "/gameplay/overtale.jpg",
    youtubeId: "QkLvMYWeGDo",
    links: { youtube: "https://www.youtube.com/watch?v=QkLvMYWeGDo&t=1s" },
    caseStudy: {
      // TODO(David): add sections + gallery screenshots.
      lede: {
        en: "A compact 2D platform shooter built around readable combat: every jump, shot, and hit should be legible at a glance.",
        zh: "一款紧凑的 2D 平台射击游戏，核心是可读的战斗：每一次跳跃、射击与命中都应一眼可读。",
      },
      role: { en: "Solo developer — design, code, pixel art", zh: "独立开发——设计、代码、像素美术" },
      engine: "Unity (2D)",
      timeframe: "2024",
      sections: [],
      gallery: [],
      inProgress: true,
    },
  },
  {
    id: "cami",
    title: "CAMI",
    year: 2024,
    published: true,
    status: { en: "UX · UI", zh: "UX · UI" },
    tag: { en: "Interaction Design", zh: "交互设计" },
    summary: {
      en: "A friendly AI companion concept explored through user research, personas, journey mapping, information architecture, wireframes, and interface design—framed around real-world conversations about misinformation and AI anxiety.",
      zh: "「友好的 AI 伴侣」概念：通过用户调研、人物画像、用户旅程、信息架构、线框图与界面设计推进，围绕误信息、认知误区与 AI 焦虑等现实议题展开。",
    },
    tools: ["Figma", "UX research", "UI design"],
    chips: [
      { en: "Solo", zh: "独立" },
      { en: "AI literacy", zh: "AI 素养" },
      { en: "Product", zh: "产品" },
    ],
    cover: "/projects/cami/01.png",
    caseStudy: {
      lede: {
        en: "Slides exported from my portfolio PDF in order (original pages 2–8).",
        zh: "以下为作品集 PDF 中的页面顺序导出（原 PDF 第 2–8 页）。",
      },
      role: { en: "Solo — research, IA, wireframes, UI", zh: "独立——调研、信息架构、线框、界面" },
      timeframe: "2024",
      sections: [],
      gallery: Array.from({ length: 7 }, (_, i) => ({
        src: `/projects/cami/${String(i + 1).padStart(2, "0")}.png`,
        alt: `CAMI portfolio page ${i + 1}`,
      })),
    },
  },
  {
    id: "picnic-panic",
    title: "Picnic Panic!",
    year: 2024,
    published: true,
    status: { en: "Tabletop", zh: "桌游" },
    tag: { en: "Board Game", zh: "棋盘游戏" },
    summary: {
      en: "An ant-inspired cooperative board game: escape the storm, gather food, and survive backyard hazards—built around movement, combat, items, rivals, and clear win/lose conditions.",
      zh: "一款受蚂蚁启发的合作类桌游：在暴雨来临前收集食物、穿越后院障碍，结合移动、战斗、道具与对手规则，并设定清晰的胜负条件。",
    },
    tools: ["Game design", "Rules", "Playtesting"],
    chips: [
      { en: "Designer", zh: "设计" },
      { en: "Co-op", zh: "合作" },
      { en: "Prototype", zh: "原型" },
    ],
    cover: "/projects/picnic-panic/01.png",
    caseStudy: {
      lede: {
        en: "Slides exported from my portfolio PDF in order (original pages 9–13).",
        zh: "以下为作品集 PDF 中的页面顺序导出（原 PDF 第 9–13 页）。",
      },
      role: { en: "Designer — rules, balance, playtesting", zh: "设计师——规则、平衡、试玩迭代" },
      timeframe: "2024",
      sections: [],
      gallery: Array.from({ length: 5 }, (_, i) => ({
        src: `/projects/picnic-panic/${String(i + 1).padStart(2, "0")}.png`,
        alt: `Picnic Panic portfolio page ${i + 1}`,
      })),
    },
  },

  /* ------------------------------------------------------------------ *
   * Upcoming projects — fill in and flip `published: true` when ready. *
   * ------------------------------------------------------------------ */
  {
    id: "upcoming-project-1", // TODO(David): real slug, e.g. "my-big-game"
    title: "Upcoming Project 1", // TODO(David)
    year: 2026,
    published: false,
    status: { en: "In Development", zh: "开发中" },
    tag: { en: "TBD", zh: "待定" },
    summary: { en: "TODO", zh: "TODO" },
    tools: [],
    chips: [],
    cover: "/poster-upcoming.svg",
    caseStudy: {
      lede: { en: "TODO", zh: "TODO" },
      sections: [],
      gallery: [],
      inProgress: true,
    },
  },
  {
    id: "upcoming-project-2", // TODO(David)
    title: "Upcoming Project 2", // TODO(David)
    year: 2026,
    published: false,
    status: { en: "In Development", zh: "开发中" },
    tag: { en: "TBD", zh: "待定" },
    summary: { en: "TODO", zh: "TODO" },
    tools: [],
    chips: [],
    cover: "/poster-upcoming.svg",
    caseStudy: {
      lede: { en: "TODO", zh: "TODO" },
      sections: [],
      gallery: [],
      inProgress: true,
    },
  },
];

export const PUBLISHED_PROJECTS = ALL_PROJECTS.filter((p) => p.published);

/** First published project is the full-width featured card on the home page. */
export const FEATURED_PROJECT = PUBLISHED_PROJECTS[0];
export const HOME_PROJECTS = PUBLISHED_PROJECTS;
