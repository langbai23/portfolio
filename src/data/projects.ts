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
  archived?: boolean; // older work: collapsed under "Earlier work" on the home page
  status: Localized; // small pill, e.g. "Released"
  tag: Localized; // genre / discipline line
  summary: Localized; // card description
  tools: string[];
  chips: Localized[];
  cover: string; // poster image (shown before the video loads / when there's no video)
  clip?: string; // self-hosted muted looping gameplay clip (mp4); autoplays inline — takes priority over youtubeId
  youtubeId?: string; // if set (and no clip), the card/detail media becomes a click-to-play YouTube player
  links?: { youtube?: string; github?: string; itch?: string; play?: string }; // itch = public itch.io page
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
      en: "A 2D narrative puzzle about school bullying, where a girl's vision brightens or dims with her mood. Notes, mementos, and blue-ghost friends restore her spirit, turning an emotion-driven brightness system into the core mechanic and the story itself.",
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
    youtubeId: "3up0J3ibvLk",
    links: { youtube: "https://www.youtube.com/watch?v=3up0J3ibvLk", itch: "https://baoy.itch.io/glimmer" },
    caseStudy: {
      lede: {
        en: "“At that moment, my world was filled with many glimmers.” Glimmer makes emotional recovery playable: the more you're hurt, the darker and narrower your vision, until friends, notes, and small kindnesses light the world back up, one object at a time.",
        zh: "「那一刻，我的世界充满了点点微光。」Glimmer 把情绪的自愈变成可玩的系统：受伤越深，视野越暗越窄——直到朋友、字条与微小的善意，一件件把世界重新照亮。",
      },
      role: {
        en: "Co-designer & developer (2-person team): game design doc & narrative, level building (scenes 1-4), player animation, UI, and art & sound integration.",
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
              en: "The mood bar is the game. A high mood floods the scene with light and reveals more interactable objects: blue-outlined things you can touch, blue ghosts (friends and teachers) you can talk to. A low mood dims the world to near-black, leaving only a few objects visible.",
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
              en: "Glimmer opens on a threatening letter and a classroom swarmed by red ghosts, brightness crashing to zero as the screen distorts and fades to black. From there the player walks a long, dark hallway of bullies before finding the one unlocked classroom, a blue ghost, and a notebook that raises the light by a whole level.",
              zh: "Glimmer 以一封威胁信和被红色幽灵包围的教室开场——亮度骤降为零，画面扭曲、渐黑。之后玩家要走过一条又长又暗、满是霸凌者的走廊，才找到唯一没锁的教室、一只蓝色幽灵，以及一本让光提升整整一档的笔记本。",
            },
            {
              en: "Progress is narrative and spatial rather than menu-driven: a birthday-password locker, mementos that surface as memory fragments when the mood reaches Level 3, and a final door that only opens once enough blue ghosts, the glimmers, stand behind you.",
              zh: "推进靠叙事与空间，而非菜单：用生日当密码的储物柜、心情升到第 3 档时浮现的记忆碎片，以及一扇只有当足够多蓝色幽灵——微光——站到你身后才会打开的门。",
            },
          ],
        },
        {
          heading: { en: "My role", zh: "我负责的部分" },
          body: [
            {
              en: "Glimmer was a two-person project. I wrote the game design doc and CRC cards, constructed the story, and built scenes 1-4 with their lighting; I handled player movement and animation, the emotion bar, UI, and sourced or created the art and sound. My teammate Travis focused on the systems programming: ghost tracking, the brightness system, cutscenes, and the dialogue function.",
              zh: "Glimmer 是双人项目。我负责设计文档与 CRC 卡、构建故事，并搭建场景 1–4 及其灯光；同时处理角色移动与动画、情绪条、UI，以及美术与音效的寻找/制作。队友 Travis 主要负责系统编程——幽灵追踪、亮度系统、过场动画与对话功能。",
            },
          ],
        },
      ],
      gallery: [],
    },
  },
  {
    id: "roomnumbers",
    title: "Room Numbers",
    year: 2026,
    published: true,
    status: { en: "Unity 3D", zh: "Unity 3D" },
    tag: { en: "First-person \u00b7 Puzzle", zh: "\u7b2c\u4e00\u4eba\u79f0 \u00b7 \u89e3\u8c1c" },
    summary: {
      en: "A first-person puzzle game about a night shift in a facility running on backup power. The generator carries only two circuits at a time, so lighting the room you need means cutting the light somewhere else, and every door code is a number you can only read while its room is lit.",
      zh: "\u4e00\u6b3e\u5173\u4e8e\u201c\u591c\u73ed\u201d\u7684\u7b2c\u4e00\u4eba\u79f0\u89e3\u8c1c\u6e38\u620f\uff1a\u8bbe\u65bd\u4e3b\u7535\u8def\u6545\u969c\uff0c\u53ea\u5269\u5907\u7528\u53d1\u7535\u673a\uff0c\u800c\u5b83\u4e00\u6b21\u53ea\u5e26\u5f97\u52a8\u4e24\u6761\u7ebf\u8def\u3002\u60f3\u70b9\u4eae\u9700\u8981\u7684\u623f\u95f4\uff0c\u5c31\u5f97\u6389\u6389\u53e6\u4e00\u95f4\u7684\u706f\uff1b\u800c\u6bcf\u4e00\u9053\u95e8\u7684\u5bc6\u7801\uff0c\u90fd\u662f\u53ea\u6709\u623f\u95f4\u901a\u7535\u65f6\u624d\u770b\u5f97\u89c1\u7684\u6570\u5b57\u3002",
    },
    tools: ["Unity 6", "C#", "URP", "3D", "Blender"],
    chips: [
      { en: "Solo Dev", zh: "\u72ec\u7acb\u5f00\u53d1" },
      { en: "Course Project", zh: "\u8bfe\u7a0b\u4f5c\u4e1a" },
      { en: "Systems", zh: "\u7cfb\u7edf" },
    ],
    cover: "/gameplay/roomnumbers.jpg",
    clip: "/gameplay/roomnumbers.mp4",
    youtubeId: "sJAe14ToTNk",
    links: { youtube: "https://www.youtube.com/watch?v=sJAe14ToTNk", itch: "https://baoy.itch.io/room-numbers" },
    caseStudy: {
      lede: {
        en: "Eight rooms, four-digit keypads, and a backup generator that can only carry two circuits. The number you need for a code is painted in a room that has to be lit before you can read it, so the puzzle is never \u201cfind the code\u201d. It is \u201cdecide what to leave in the dark\u201d.",
        zh: "\u516b\u4e2a\u623f\u95f4\u3001\u56db\u4f4d\u6570\u5bc6\u7801\u952e\u76d8\uff0c\u4ee5\u53ca\u4e00\u53f0\u4e00\u6b21\u53ea\u80fd\u5e26\u4e24\u6761\u7ebf\u8def\u7684\u5907\u7528\u53d1\u7535\u673a\u3002\u5bc6\u7801\u91cc\u7684\u6570\u5b57\u5199\u5728\u623f\u95f4\u91cc\uff0c\u800c\u623f\u95f4\u5f97\u5148\u4eae\u8d77\u6765\u4f60\u624d\u8bfb\u5f97\u5230\u3002\u6240\u4ee5\u8fd9\u4e2a\u8c1c\u9898\u4ece\u6765\u4e0d\u662f\u201c\u627e\u5bc6\u7801\u201d\uff0c\u800c\u662f\u201c\u51b3\u5b9a\u628a\u4ec0\u4e48\u7559\u5728\u9ed1\u6697\u91cc\u201d\u3002",
      },
      role: {
        en: "Solo project: design, C# gameplay code, level layout, Blender models, lighting, UI, and audio.",
        zh: "\u72ec\u7acb\u9879\u76ee\u2014\u2014\u8bbe\u8ba1\u3001C# \u73a9\u6cd5\u4ee3\u7801\u3001\u5173\u5361\u5e03\u5c40\u3001Blender \u6a21\u578b\u3001\u706f\u5149\u3001UI \u4e0e\u97f3\u6548\u3002",
      },
      team: { en: "Solo", zh: "\u72ec\u7acb\u5b8c\u6210" },
      engine: "Unity 6 (URP, 3D)",
      timeframe: "2026 \u00b7 USC CTIN 389",
      sections: [
        {
          heading: { en: "Power is the real key", zh: "\u7535\u529b\u624d\u662f\u771f\u6b63\u7684\u94a5\u5319" },
          body: [
            {
              en: "Every locked door wants four digits, and every digit lives on a screen or a sign inside a room. The main feed is down, so those rooms only read out when the backup generator is feeding them, and the generator tops out at two circuits. Reading a code is therefore a routing problem: pull power off a corridor you have already crossed, push it into the room you still need, and walk back through the dark you just made.",
              zh: "\u6bcf\u4e00\u9053\u9501\u4f4f\u7684\u95e8\u90fd\u8981\u56db\u4f4d\u6570\uff0c\u800c\u6bcf\u4e00\u4f4d\u6570\u5b57\u90fd\u957f\u5728\u67d0\u4e2a\u623f\u95f4\u7684\u5c4f\u5e55\u6216\u724c\u5b50\u4e0a\u3002\u4e3b\u7535\u8def\u65ad\u4e86\uff0c\u90a3\u4e9b\u623f\u95f4\u53ea\u6709\u5907\u7528\u53d1\u7535\u673a\u4f9b\u7535\u65f6\u624d\u4f1a\u663e\u793a\uff0c\u800c\u53d1\u7535\u673a\u5c01\u9876\u5728\u4e24\u6761\u7ebf\u8def\u3002\u4e8e\u662f\u201c\u8bfb\u5230\u5bc6\u7801\u201d\u53d8\u6210\u4e86\u4e00\u9053\u8c03\u5ea6\u9898\uff1a\u628a\u7535\u4ece\u5df2\u7ecf\u8d70\u8fc7\u7684\u8d70\u5eca\u62bd\u8d70\uff0c\u9001\u8fdb\u8fd8\u9700\u8981\u7684\u623f\u95f4\uff0c\u7136\u540e\u518d\u7a7f\u56de\u4f60\u521a\u4eb2\u624b\u9020\u51fa\u6765\u7684\u9ed1\u6697\u3002",
            },
            {
              en: "The two-circuit limit is not posted anywhere at the start. The panel just says BACKUP GEN, and the first time a player throws a third breaker it buzzes, flashes OVERLOAD, and drops everything. Only then does the label change to read 2 CIRCUITS MAX. The failure teaches the rule, and the sign afterwards is only there so the lesson sticks.",
              zh: "\u4e00\u5f00\u59cb\uff0c\u201c\u4e24\u6761\u7ebf\u8def\u201d\u8fd9\u4e2a\u9650\u5236\u5e76\u6ca1\u6709\u5199\u5728\u4efb\u4f55\u5730\u65b9\u3002\u9762\u677f\u4e0a\u53ea\u5199\u7740 BACKUP GEN\uff1b\u73a9\u5bb6\u7b2c\u4e00\u6b21\u63a8\u4e0b\u7b2c\u4e09\u4e2a\u95f8\u5200\u65f6\uff0c\u7535\u5b50\u566a\u4e00\u58f0\u3001\u95ea\u51fa OVERLOAD\uff0c\u5168\u90e8\u8df3\u95f8\u3002\u4e5f\u662f\u5728\u90a3\u4e00\u523b\uff0c\u6807\u7b7e\u624d\u53d8\u6210 2 CIRCUITS MAX\u3002\u89c4\u5219\u662f\u5931\u8d25\u6559\u4f1a\u7684\uff0c\u540e\u6765\u90a3\u884c\u5b57\u53ea\u8d1f\u8d23\u8ba9\u5b83\u8bb0\u5f97\u4f4f\u3002",
            },
          ],
        },
        {
          heading: { en: "One way forward", zh: "\u53ea\u80fd\u5411\u524d" },
          body: [
            {
              en: "Doors drop behind the player and refuse their own code afterwards, so the facility never lets you undo a leg of the route. That constraint is what makes the power choices matter: if the answer were still reachable behind you, cutting a circuit would cost nothing.",
              zh: "\u95e8\u4f1a\u5728\u73a9\u5bb6\u8eab\u540e\u843d\u4e0b\uff0c\u4e4b\u540e\u8fde\u81ea\u5df1\u7684\u5bc6\u7801\u4e5f\u4e0d\u518d\u63a5\u53d7\u2014\u2014\u8fd9\u5ea7\u8bbe\u65bd\u4e0d\u5141\u8bb8\u4f60\u56de\u5934\u91cd\u8d70\u4e00\u6bb5\u8def\u3002\u6b63\u662f\u8fd9\u4e2a\u9650\u5236\u8ba9\u4f9b\u7535\u7684\u53d6\u820d\u771f\u7684\u6709\u5206\u91cf\uff1a\u5982\u679c\u7b54\u6848\u968f\u65f6\u80fd\u56de\u5934\u53bb\u62ff\uff0c\u5173\u6389\u4e00\u6761\u7ebf\u8def\u5c31\u4e0d\u9700\u8981\u4ee3\u4ef7\u4e86\u3002",
            },
            {
              en: "Not every number is something you can see. One code arrives over an intercom as a run of beeps, with a long tone standing in for zero, so a room with no working screen still has an answer in it. The run ends on an elapsed-time readout and a NIGHT SHIFT OVER card, which turns a short course exercise into something players compare runs on.",
              zh: "\u5e76\u4e0d\u662f\u6bcf\u4e2a\u6570\u5b57\u90fd\u770b\u5f97\u89c1\u3002\u6709\u4e00\u7ec4\u5bc6\u7801\u662f\u4ece\u5bf9\u8bb2\u673a\u91cc\u4ee5\u4e00\u4e32\u8702\u9e23\u4f20\u51fa\u6765\u7684\uff0c\u957f\u97f3\u4ee3\u8868 0\uff1b\u6240\u4ee5\u4e00\u4e2a\u6ca1\u6709\u53ef\u7528\u5c4f\u5e55\u7684\u623f\u95f4\uff0c\u91cc\u9762\u4f9d\u7136\u85cf\u7740\u7b54\u6848\u3002\u6d41\u7a0b\u7ed3\u675f\u5728\u4e00\u4e2a\u8ba1\u65f6\u8bfb\u6570\u548c\u4e00\u5f20 NIGHT SHIFT OVER \u7684\u5b57\u5e55\u4e0a\uff0c\u628a\u4e00\u4e2a\u77ed\u5c0f\u7684\u8bfe\u7a0b\u7ec3\u4e60\u53d8\u6210\u4e86\u53ef\u4ee5\u6bd4\u6210\u7ee9\u7684\u4e1c\u897f\u3002",
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
      en: "A Unity 3D narrative game about a criminal choosing a path toward heaven or hell, exploring moral choice through exploration and story beats.",
      zh: "一款 Unity 3D 叙事向作品：一名罪犯在通往天堂或地狱的路径之间做出选择，通过探索与剧情节点呈现道德抉择。",
    },
    tools: ["Unity", "3D", "Story-driven"],
    chips: [
      { en: "Team of 2", zh: "双人团队" },
      { en: "Choice", zh: "抉择" },
      { en: "3D", zh: "3D" },
    ],
    cover: "/gameplay/traveler.jpg",
    clip: "/gameplay/traveler.mp4",
    youtubeId: "D8GdOhjwdcM",
    links: { youtube: "https://www.youtube.com/watch?v=D8GdOhjwdcM", itch: "https://baoy.itch.io/traveler" },
    caseStudy: {
      // TODO(David): replace lede with your own positioning line, then add
      // sections: 你负责什么 / 1-2 个设计决策深挖 / 截图 gallery。
      lede: {
        en: "A criminal walks the line between heaven and hell. Traveler explores how moral choice can be carried by exploration and story beats rather than menus and dialogue boxes.",
        zh: "一名罪犯行走在天堂与地狱的分界线上。Traveler 探索如何让道德抉择由探索与剧情节点承载，而不是靠菜单和对话框。",
      },
      role: {
        en: "Co-designer (2-person team): narrative, level design, and scene building.",
        zh: "共同设计（双人团队）——叙事、关卡设计与场景搭建。",
      },
      team: {
        en: "2-person team with Yan Yilang (Travis)",
        zh: "与 Yan Yilang（Travis）组成的双人团队",
      },
      engine: "Unity (3D)",
      timeframe: "2026",
      sections: [],
      gallery: [],
      inProgress: true,
    },
  },
  {
    id: "bolasta",
    title: "Bolasta",
    year: 2026,
    published: true,
    status: { en: "In development", zh: "开发中" },
    tag: { en: "Tactics · Systems Design · In development", zh: "战棋 · 系统设计 · 开发中" },
    summary: {
      en: "A turn based grid tactics game built around one irreversible choice. A Devourer blocks the corridor and opens its mouth: feed it one of your two skills or you do not pass. The greyed icon stays in your bar for the rest of the run, the second half is still winnable but twice as long and three times as costly, and the last fight is the Devourer using what it ate against you.",
      zh: "回合制方格战棋，整局围绕一个不可撤销的选择。吞噬者堵在走廊里张开嘴：不献祭两个技能中的一个，就过不去。灰掉的图标会在技能栏上留到通关；后半程仍然能赢，但要多花一倍回合、多掉三倍血。最后一战，吞噬者用它吃掉的那个技能打你。",
    },
    tools: ["Unity 6", "C#", "URP", "Turn-based combat", "Systems design"],
    chips: [
      { en: "Solo", zh: "独立" },
      { en: "Grid tactics", zh: "方格战棋" },
      { en: "Wordless UI", zh: "无文字 UI" },
    ],
    cover: "/gameplay/bolasta.jpg",
    clip: "/gameplay/bolasta.mp4",
    links: { itch: "https://baoy.itch.io/bolasta" },
    caseStudy: {
      lede: {
        en: "The whole design answers to one sentence: the player wins, but regrets it, and knows the choice was their own. Everything else in the build exists to make that regret arrive on schedule and be impossible to pin on anyone else.",
        zh: "整个设计只向一句话负责：玩家赢了，但后悔，而且知道是自己亲手选的。其余一切都是为了让这份后悔准时到达，并且赖不到第二个人头上。",
      },
      role: { en: "Solo: design, systems, implementation", zh: "独立——设计、系统、实现" },
      engine: "Unity 6000.6.0f1",
      timeframe: "2026",
      sections: [
        {
          heading: { en: "Teach the habit, then take it", zh: "先养成习惯，再拿走" },
          body: [
            {
              en: "The player gets a basic attack and two skills: Shockwave hits a group, Pierce hits one target hard. The first arena runs three waves that alternate between them on purpose, a swarm wave then an armored wave then both at once, until reaching for the right skill stops being a decision and becomes a reflex.",
              zh: "玩家有一个普攻和两个技能：震荡打一群，贯穿打单体。第一个竞技场的三波敌人是故意交替的——先虫群，再肉盾，然后两者同时上。目的是让「拿对技能」从一个决策变成一个反射。",
            },
            {
              en: "Then the corridor. The Devourer is immune to damage, so there is no clever way past it and no way to keep both. Sacrificing a skill leaves its icon on the bar, greyed out, permanently. It is not a slot that frees up, and it is never handed back.",
              zh: "然后是走廊。吞噬者免疫伤害，所以没有聪明的绕过方式，也没有两个都保住的办法。献祭掉的技能会以灰图标的形式永久留在技能栏上。那不是一个空出来的位置，而且永远不会还给你。",
            },
          ],
        },
        {
          heading: { en: "Make the regret countable", zh: "把后悔变成可以数的东西" },
          body: [
            {
              en: "Regret is easy to put in a pitch and hard to put in a build. The second arena solves it with arithmetic: each route meets one wave that its remaining skill is wrong for, and that wave is tuned to take roughly twice the turns it would have cost with the skill that was fed to the Devourer.",
              zh: "「后悔」写在策划案里很容易，做进构建里很难。第二个竞技场用算术解决：每条路线都会碰到一波「手里这个技能恰好不对」的敌人，而那一波被调成大约要多花一倍的回合——正是献祭掉的那个技能本可以省下的。",
            },
            {
              en: "The target ratio is roughly double the turns and triple the damage taken, while staying winnable either way. Both routes are tuned to end in single digit health out of fifty without a death: close enough to losing to feel it, never close enough to excuse it.",
              zh: "目标比例是大约两倍回合、三倍掉血，同时两条路都保证能赢。两条路线都调成 50 血打到只剩个位数、且不出现阵亡——离输近到足以感受到，又远到不能拿来当借口。",
            },
          ],
        },
        {
          heading: { en: "Constraints that did the design work", zh: "真正在做设计的是约束" },
          body: [
            {
              en: "Three rules held for the whole build. No randomness anywhere: fixed damage, guaranteed hits, no crits, fully deterministic enemies, so an ugly wave is never luck. No explanatory text in the game: rules are carried by highlight, colour, icon and animation, and the corridor choice shows no words and no digits at all. No bought art: every unit is a primitive, and the eleven PNGs in the project are portraits and skill icons rendered offline from the project's own geometry.",
              zh: "整个构建守住三条规则。一、没有随机：伤害固定、命中必中、没有暴击、敌人行为完全确定，所以打得难看永远不能怪运气。二、游戏内不出现解释性文字：规则靠高亮、颜色、图标和动画自解释，走廊那个选择连数字都没有。三、不买美术：所有单位都是原始几何体，工程里十一张 PNG 全是用工程自有模型离线渲染的头像和技能图标。",
            },
            {
              en: "The no-text rule was the sharpest of the three. It forced the corridor to communicate an irreversible trade using nothing but a mouth, two icons, and what happens afterwards. That constraint is the reason the moment reads at all.",
              zh: "三条里最锋利的是无文字。它逼着走廊只能用一张嘴、两个图标，以及「选完之后发生了什么」来说清一笔不可逆的交易。也正是这条约束让这个瞬间立得住。",
            },
          ],
        },
        {
          heading: { en: "Where it goes next", zh: "接下来往哪走" },
          body: [
            {
              en: "What exists now is a vertical slice: two arenas, one corridor, one sacrifice. It is enough to prove the beat lands, and short enough that the whole shape stays visible in a single sitting.",
              zh: "现在做出来的是一个纵切片：两个竞技场、一条走廊、一次献祭。足够证明这个节拍成立，也短到能让人一次坐下就看清整个形状。",
            },
            {
              en: "The structure generalises cleanly. Every skill added is one more route through the corridor, and every route is one more wave the player is now wrong for. The interesting version of this game is the one where the Devourer has eaten something different each run, and the build that exists is the smallest thing that could test whether that version is worth making.",
              zh: "这套结构可以干净地扩展。每多一个技能，就多一条穿过走廊的路线；每多一条路线，就多一波「玩家此刻恰好不对」的敌人。这个游戏真正有意思的版本，是吞噬者每一局吃掉的东西都不一样的那个——而现有的构建，正是用来验证那个版本值不值得做的最小实验。",
            },
          ],
        },
      ],
      gallery: [
        { src: "/projects/bolasta/01.png", alt: "Bolasta title screen" },
        { src: "/projects/bolasta/02.png", alt: "Arena A, the first wave of swarm enemies on the grid" },
        { src: "/projects/bolasta/03.png", alt: "The corridor choice: the Devourer opens its mouth beside the two skill icons" },
        { src: "/projects/bolasta/04.png", alt: "The Devourer attacks with the sacrificed skill, its icon crossed out on the bar" },
        { src: "/projects/bolasta/05.png", alt: "Bolasta ending screen" },
      ],
    },
  },
  {
    id: "fishitting",
    title: "Fishitting",
    year: 2026,
    published: true,
    archived: true,
    status: { en: "Game Jam", zh: "Game Jam" },
    tag: { en: "Arcade · Eco-Satire", zh: "街机 · 生态讽刺" },
    summary: {
      en: "A game-jam game about a fish leashed to a polluted seabed, scavenging scrap to power up its light. Fend off troublemaking fish (the game's called Fishitting for a reason), and the brighter the light grows, the bigger the crowd it draws, until their weight snaps your rope. The twist: freed at last, the fish surfaces only to die in the polluted water anyway.",
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
    youtubeId: "b57m5XBikCQ",
    links: { youtube: "https://www.youtube.com/watch?v=b57m5XBikCQ", itch: "https://baoy.itch.io/fishitting" },
    caseStudy: {
      lede: {
        en: "Fishitting looks like a scrappy survival loop (forage, collect, upgrade, brighten) right up until it isn't. The brighter your light burns, the more fish it summons, until the crowd snaps the anchor rope holding you down. Freedom, the surface, and then the pollution that was waiting there the whole time.",
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
              en: "You play a fish tied to the seabed by an anchor line. Forage to hold off hunger, then drag scrap (glass, batteries, metal) to your broken light and upgrade it. Every upgrade widens your vision and lengthens the rope, so brightness, sight, and how far you can roam all grow together.",
              zh: "你扮演一条被锚绳拴在海底的鱼。先觅食顶住饥饿，再把废料——玻璃、电池、金属——拖到破损的灯那里升级。每次升级都会扩大视野、放长绳子，于是亮度、视野和活动范围一起变大。",
            },
            {
              en: "Other fish don't make it easy: they barge in and knock your hard-won materials loose. Your answer is the ammunition the game is named after: hold to charge (you slow to a crawl), release to fire, and the troublemaker is blinded and driven off. Clearing fish feeds the light too.",
              zh: "别的鱼不会让你好过：它们会冲进来把你辛苦收集的材料撞飞。你的反击，就是这游戏名字的来源——按住蓄力（你会慢得像爬），松手发射，捣乱者被糊住视野、被赶走。清理掉鱼同样能喂养那盏灯。",
            },
          ],
        },
        {
          heading: { en: "The brightest light is the trap", zh: "最亮的光，就是陷阱" },
          body: [
            {
              en: "Brightness is the goal and the undoing. Push the light to its brightest and it stops being a tool. It becomes a beacon, pulling in more and more fish until the crowd's sheer weight breaks the rope that's held you down the whole game.",
              zh: "变亮既是目标，也是败因。把灯推到最亮，它就不再是工具——而成了灯塔，招来越来越多的鱼，直到鱼群的重量撞断那根拴了你一整局的绳子。",
            },
            {
              en: "And then the real point lands. The fish tears free, swims up toward the light at the surface it's been reaching for, and dies there anyway, in water too polluted to live in. The escape was never the ending; the ocean was.",
              zh: "然后真正的立意才落下。鱼挣脱、游向它一直渴望的海面之光——却还是死在了那里，死在污染到无法生存的水中。挣脱从来不是结局；大海才是。",
            },
          ],
        },
      ],
      gallery: [],
    },
  },
  {
    id: "after-theyre-gone",
    title: "After They're Gone",
    year: 2025,
    published: true,
    archived: true,
    status: { en: "Unity 3D", zh: "Unity 3D" },
    tag: { en: "Environmental Storytelling", zh: "环境叙事" },
    summary: {
      en: "A 3D Unity game about robots salvaging a world without humans: a dystopian city where sanitation falls entirely to machines, told through exploration and environmental storytelling.",
      zh: "一款 3D Unity 游戏，讲述在人类消失后的世界里，机器人拾荒与清理的故事：一座反乌托邦城市中，环卫工作完全交给机器，通过探索与环境叙事呈现世界。",
    },
    tools: ["Unity", "3D", "Environment storytelling"],
    chips: [
      { en: "Solo", zh: "独立" },
      { en: "Exploration", zh: "探索" },
      { en: "Worldbuilding", zh: "世界观" },
    ],
    cover: "/gameplay/after.jpg",
    clip: "/gameplay/after.mp4",
    youtubeId: "Tu06C7uhwh0",
    links: { youtube: "https://www.youtube.com/watch?v=Tu06C7uhwh0", itch: "https://baoy.itch.io/after-theyre-gone" },
    caseStudy: {
      // TODO(David): add sections + gallery screenshots.
      lede: {
        en: "What stories does a city tell when no one is left to tell them? After They're Gone hands the world to its robots and lets the environment do the talking.",
        zh: "当无人讲述时，一座城市还能讲出什么故事？After They're Gone 把世界交给机器人，让环境自己开口说话。",
      },
      role: { en: "Solo developer: design, environment, implementation", zh: "独立开发——设计、场景、实现" },
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
    archived: true,
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
    clip: "/gameplay/overtale.mp4",
    youtubeId: "r45eLuVUnGU",
    links: { youtube: "https://www.youtube.com/watch?v=r45eLuVUnGU", itch: "https://baoy.itch.io/overtale" },
    caseStudy: {
      // TODO(David): add sections + gallery screenshots.
      lede: {
        en: "A compact 2D platform shooter built around readable combat: every jump, shot, and hit should be legible at a glance.",
        zh: "一款紧凑的 2D 平台射击游戏，核心是可读的战斗：每一次跳跃、射击与命中都应一眼可读。",
      },
      role: { en: "Solo developer: design, code, pixel art", zh: "独立开发——设计、代码、像素美术" },
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
      en: "A friendly AI companion concept explored through user research, personas, journey mapping, information architecture, wireframes, and interface design, framed around real-world conversations about misinformation and AI anxiety.",
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
        en: "Slides exported from my portfolio PDF in order (original pages 2-8).",
        zh: "以下为作品集 PDF 中的页面顺序导出（原 PDF 第 2–8 页）。",
      },
      role: { en: "Solo: research, IA, wireframes, UI", zh: "独立——调研、信息架构、线框、界面" },
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
      en: "An ant-inspired cooperative board game: escape the storm, gather food, and survive backyard hazards, built around movement, combat, items, rivals, and clear win/lose conditions.",
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
        en: "Slides exported from my portfolio PDF in order (original pages 9-13).",
        zh: "以下为作品集 PDF 中的页面顺序导出（原 PDF 第 9–13 页）。",
      },
      role: { en: "Designer: rules, balance, playtesting", zh: "设计师——规则、平衡、试玩迭代" },
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
