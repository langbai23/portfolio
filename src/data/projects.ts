/**
 * Newest → oldest. i18nPrefix maps to LanguageScript keys (project1…project5).
 */
export type ProjectId = "traveler" | "after" | "overtale" | "cami" | "picnic";

export type ProjectEntry = {
  id: ProjectId;
  year: number;
  i18nPrefix: "project1" | "project2" | "project3" | "project4" | "project5";
  cover: string;
  href: string;
  external?: boolean;
  video?: {
    videoId: string;
    previewTitle: string;
    mode: string;
    start?: string;
    end?: string;
    segments?: string;
  };
};

export const ALL_PROJECTS: ProjectEntry[] = [
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
      segments: "32-39,53-56,117-125",
    },
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
      end: "30",
    },
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
      end: "60",
    },
  },
  {
    id: "cami",
    year: 2024,
    i18nPrefix: "project1",
    cover: "/projects/cami/01.png",
    href: "/projects/cami",
  },
  {
    id: "picnic",
    year: 2024,
    i18nPrefix: "project2",
    cover: "/projects/picnic-panic/01.png",
    href: "/projects/picnic-panic",
  },
];

export const HOME_PROJECT_COUNT = 4;
