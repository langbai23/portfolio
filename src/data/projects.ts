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
  clip?: string; // self-hosted muted looping gameplay clip (mp4); autoplays inline — takes priority over youtubeId
  youtubeId?: string; // if set (and no clip), the card/detail media becomes a click-to-play YouTube player
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
    id: "glimmer",
    title: "Glimmer",
    year: 2026,
    published: true,
    status: { en: "Unity 2D", zh: "Unity 2D" },
    tag: { en: "Narrative · Puzzle", zh: "叙事 · 解谜" },
    summary: {
      en: "A 2D narrative puzzle about school bullying, where a girl's vision brightens or dims with her mood. Notes, mementos, and blue-ghost friends restore her spirit—turning an emotion-driven brightness system into the core mechanic, and the story itself.",
      zh: "一款关于校园霸凌的 2D 叙事解谜游戏：女孩的视野随心情明暗变化。字条、纪念物与蓝色幽灵（朋友）帮她找回勇气——把情绪驱动的「亮度系统」变成核心玩法，也变成故事本身。",
    },
    tools: ["Unity", "C#", "2D", "Pixel art", "Dialogue system"],
    chips: [
      { en: "Team of 2", zh: "双人团队" },
      { en: "Narrative", zh: "叙事" },
      { en: "Systems", zh: "系统" },
    ],
    cover: "/gameplay/glimmer.jpg",
    clip: "/gameplay/glimmer.mp4",
    youtubeId: "z9T54IoSa3k",
    links: { youtube: "https://www.youtube.com/watch?v=z9T54IoSa3k" },
    caseStudy: {
      lede: {
        en: "“At that moment, my world was filled with many glimmers.” Glimmer makes emotional recovery playable: the more you're hurt, the darker and narrower your vision—until friends, notes, and small kindnesses light the world back up, one object at a time.",
        zh: "「那一刻，我的世界充满了点点微光。」Glimmer 把情绪的自愈变成可玩的系统：受伤越深，视野越暗越窄——直到朋友、字条与微小的善意，一件件把世界重新照亮。",
      },
      role: {
        en: "Co-designer & developer (2-person team) — game design doc & narrative, level building (scenes 1–4), player animation, UI, and art & sound integration.",
        zh: "共同设计与开发（双人团队）——设计文档与叙事、关卡搭建（场景 1–4）、角色动画、UI，以及美术与音效整合。",
      },
      team: {
        en: "2-person team with Yan Yilang (Travis)",
        zh: "与 Yan Yilang（Travis）组成的双人团队",
      },
      engine: "Unity (2D)",
      timeframe: "2026",
      sections: [
        {
          heading: { en: "An emotion system you can see", zh: "看得见的情绪系统" },
          body: [
            {
              en: "The mood bar is the game. A high mood floods the scene with light and reveals more interactable objects—blue-outlined things you can touch, blue ghosts (friends and teachers) you can talk to. A low mood dims the world to near-black, leaving only a few objects visible.",
              zh: "情绪条就是这款游戏。心情高时，场景被光填满，更多可交互物件浮现——带蓝色描边、可以触碰，蓝色幽灵（朋友与老师）也能对话；心情低时，世界暗到近乎全黑，只剩寥寥几件物品可见。",
            },
            {
              en: "It's a deliberate risk/reward inversion: a lower mood grants more speed and attack but strips away vision and scope, while the goal is always to climb back toward the light. Red ghosts (bullies) push the mood down; blue ghosts pull it up. Each time you reach a new mood level, that gain becomes permanent.",
              zh: "这是一次刻意的风险/回报反转：心情越低，移动与攻击越强，却也失去视野与范围；而目标始终是重新爬向光明。红色幽灵（霸凌者）压低心情，蓝色幽灵拉高它；每升到新一档心情，这份提升就永久保留。",
            },
          ],
        },
        {
          heading: { en: "Telling the story through space", zh: "用空间讲故事" },
          body: [
            {
              en: "Glimmer opens on a threatening letter and a classroom swarmed by red ghosts—brightness crashing to zero as the screen distorts and fades to black. From there the player walks a long, dark hallway of bullies before finding the one unlocked classroom, a blue ghost, and a notebook that raises the light by a whole level.",
              zh: "Glimmer 以一封威胁信和被红色幽灵包围的教室开场——亮度骤降为零，画面扭曲、渐黑。之后玩家要走过一条又长又暗、满是霸凌者的走廊，才找到唯一没锁的教室、一只蓝色幽灵，以及一本让光提升整整一档的笔记本。",
            },
            {
              en: "Progress is narrative and spatial rather than menu-driven: a birthday-password locker, mementos that surface as memory fragments when the mood reaches Level 3, and a final door that only opens once enough blue ghosts—glimmers—stand behind you.",
              zh: "推进靠叙事与空间，而非菜单：用生日当密码的储物柜、心情升到第 3 档时浮现的记忆碎片，以及一扇只有当足够多蓝色幽灵——微光——站到你身后才会打开的门。",
            },
          ],
        },
        {
          heading: { en: "My role", zh: "我负责的部分" },
          body: [
            {
              en: "Glimmer was a two-person project. I wrote the game design doc and CRC cards, constructed the story, and built scenes 1–4 with their lighting; I handled player movement and animation, the emotion bar, UI, and sourced or created the art and sound. My teammate Travis focused on the systems programming—ghost tracking, the brightness system, cutscenes, and the dialogue function.",
              zh: "Glimmer 是双人项目。我负责设计文档与 CRC 卡、构建故事，并搭建场景 1–4 及其灯光；同时处理角色移动与动画、情绪条、UI，以及美术与音效的寻找/制作。队友 Travis 主要负责系统编程——幽灵追踪、亮度系统、过场动画与对话功能。",
            },
          ],
        },
      ],
      gallery: [],
    },
  },
  {
    id: "fishitting",
    title: "Fishitting",
    year: 2026,
    published: true,
    status: { en: "Game Jam", zh: "Game Jam" },
    tag: { en: "Arcade · Eco-Satire", zh: "街机 · 生态讽刺" },
    summary: {
      en: "A game-jam game about a fish leashed to a polluted seabed, scavenging scrap to power up its light. Fend off troublemaking fish—the game's called Fishitting for a reason—and the brighter the light grows, the bigger the crowd it draws, until their weight snaps your rope. The twist: freed at last, the fish surfaces only to die in the polluted water anyway.",
      zh: "一款 game jam 作品：一条被绳子拴在污染海底的鱼，收集废料给自己的灯升级。用「屎」把捣乱的坏鱼轰走（游戏叫 Fishitting 不是没原因的）——灯越亮，招来的鱼越多，直到鱼群的重量撞断绳子。反转：终于挣脱，鱼浮上海面，却还是死在了被污染的水里。",
    },
    tools: ["Unity", "2D", "Game jam"],
    chips: [
      { en: "Team", zh: "团队" },
      { en: "2D Action", zh: "2D 动作" },
      { en: "Satire", zh: "讽刺" },
    ],
    cover: "/gameplay/fishitting.jpg",
    clip: "/gameplay/fishitting.mp4",
    youtubeId: "wcRClv32Hik",
    links: { youtube: "https://youtu.be/wcRClv32Hik" },
    caseStudy: {
      lede: {
        en: "Fishitting looks like a scrappy survival loop—forage, collect, upgrade, brighten—right up until it isn't. The brighter your light burns, the more fish it summons, until the crowd snaps the anchor rope holding you down. Freedom, the surface, and then the pollution that was waiting there the whole time.",
        zh: "Fishitting 看起来只是个朴素的生存循环——觅食、收集、升级、变亮——直到它不再是。灯烧得越亮，招来的鱼越多，直到鱼群撞断了把你按在海底的锚绳。自由，海面，然后是一直等在那里的污染。",
      },
      role: { en: "Design & programming", zh: "策划 + 程序" },
      team: { en: "3-person game jam team", zh: "三人 game jam 团队" },
      engine: "Unity (2D)",
      timeframe: "2026",
      sections: [
        {
          heading: { en: "Light is the whole economy", zh: "灯，就是整个经济系统" },
          body: [
            {
              en: "You play a fish tied to the seabed by an anchor line. Forage to hold off hunger, then drag scrap—glass, batteries, metal—to your broken light and upgrade it. Every upgrade widens your vision and lengthens the rope, so brightness, sight, and how far you can roam all grow together.",
              zh: "你扮演一条被锚绳拴在海底的鱼。先觅食顶住饥饿，再把废料——玻璃、电池、金属——拖到破损的灯那里升级。每次升级都会扩大视野、放长绳子，于是亮度、视野和活动范围一起变大。",
            },
            {
              en: "Other fish don't make it easy: they barge in and knock your hard-won materials loose. Your answer is the ammunition the game is named after—hold to charge (you slow to a crawl), release to fire, and the troublemaker is blinded and driven off. Clearing fish feeds the light too.",
              zh: "别的鱼不会让你好过：它们会冲进来把你辛苦收集的材料撞飞。你的反击，就是这游戏名字的来源——按住蓄力（你会慢得像爬），松手发射，捣乱者被糊住视野、被赶走。清理掉鱼同样能喂养那盏灯。",
            },
          ],
        },
        {
          heading: { en: "The brightest light is the trap", zh: "最亮的光，就是陷阱" },
          body: [
            {
              en: "Brightness is the goal and the undoing. Push the light to its brightest and it stops being a tool—it becomes a beacon, pulling in more and more fish until the crowd's sheer weight breaks the rope that's held you down the whole game.",
              zh: "变亮既是目标，也是败因。把灯推到最亮，它就不再是工具——而成了灯塔，招来越来越多的鱼，直到鱼群的重量撞断那根拴了你一整局的绳子。",
            },
            {
              en: "And then the real point lands. The fish tears free, swims up toward the light at the surface it's been reaching for—and dies there anyway, in water too polluted to live in. The escape was never the ending; the ocean was.",
              zh: "然后真正的立意才落下。鱼挣脱、游向它一直渴望的海面之光——却还是死在了那里，死在污染到无法生存的水中。挣脱从来不是结局；大海才是。",
            },
          ],
        },
      ],
      gallery: [],
    },
  },
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
