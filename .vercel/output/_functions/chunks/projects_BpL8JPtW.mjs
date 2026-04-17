const ALL_PROJECTS = [
  {
    id: "traveler",
    year: 2026,
    i18nPrefix: "project4",
    cover: "/project-puzzle.svg",
    href: "https://www.youtube.com/watch?v=rh9rtkyCN-U",
    external: true,
    video: {
      videoId: "rh9rtkyCN-U",
      previewTitle: "Traveler preview video",
      mode: "autoplay",
      segments: "32-39,53-56,117-125"
    }
  },
  {
    id: "after",
    year: 2025,
    i18nPrefix: "project5",
    cover: "/project-showcase.svg",
    href: "https://www.youtube.com/watch?v=zuhjDCuK5eU",
    external: true,
    video: {
      videoId: "zuhjDCuK5eU",
      previewTitle: "After They're Gone preview video",
      mode: "autoplay",
      start: "6",
      end: "30"
    }
  },
  {
    id: "overtale",
    year: 2024,
    i18nPrefix: "project3",
    cover: "/project-platformer.svg",
    href: "https://www.youtube.com/watch?v=QkLvMYWeGDo&t=1s",
    external: true,
    video: {
      videoId: "QkLvMYWeGDo",
      previewTitle: "Overtale preview video",
      mode: "autoplay",
      start: "45",
      end: "60"
    }
  },
  {
    id: "cami",
    year: 2024,
    i18nPrefix: "project1",
    cover: "/projects/cami/01.png",
    href: "/projects/cami"
  },
  {
    id: "picnic",
    year: 2024,
    i18nPrefix: "project2",
    cover: "/projects/picnic-panic/01.png",
    href: "/projects/picnic-panic"
  }
];
const HOME_PROJECT_COUNT = 4;

export { ALL_PROJECTS as A, HOME_PROJECT_COUNT as H };
