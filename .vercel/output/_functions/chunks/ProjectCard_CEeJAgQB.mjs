import { m as maybeRenderHead, h as addAttribute, s as spreadAttributes, r as renderTemplate } from './entrypoint_BZTi2FEJ.mjs';
import { c as createComponent } from './astro-component_N9bgKs13.mjs';
import 'clsx';

const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const vid = project.video;
  return renderTemplate`${maybeRenderHead()}<article class="project-card reveal-item"> <a${addAttribute(["project-media", "project-media-link", { "is-video": !!vid }], "class:list")}${addAttribute(project.href, "href")}${spreadAttributes(project.external ? { target: "_blank", rel: "noreferrer" } : {})}${spreadAttributes(vid ? {
    "data-preview-video-id": vid.videoId,
    "data-preview-title": vid.previewTitle,
    "data-preview-mode": vid.mode,
    ...vid.start ? { "data-preview-start": vid.start } : {},
    ...vid.end ? { "data-preview-end": vid.end } : {},
    ...vid.segments ? { "data-preview-segments": vid.segments } : {}
  } : {})}> <img${addAttribute([{ "preview-poster": !!vid }], "class:list")}${addAttribute(project.cover, "src")} alt="" loading="lazy" decoding="async" width="1280" height="720"> ${vid && renderTemplate`<div class="preview-slot" data-preview-slot></div>`} </a> ${project.id === "cami" && renderTemplate`<div class="project-content"> <div class="project-meta"> <span class="status-pill" data-i18n="project1Status">
UX · UI
</span> <span class="project-year">${project.year}</span> </div> <span class="project-tag" data-i18n="project1Tag">
Interaction Design
</span> <h3 data-i18n="project1Title">CAMI</h3> <p data-i18n="project1Desc">
A friendly AI companion concept explored through user research, personas, journey mapping, information architecture, wireframes, and interface design—framed around real-world conversations about misinformation, misconceptions, and AI anxiety.
</p> <div class="tools" data-i18n="project1Tools">
Figma · UX research · UI design
</div> <div class="meta-chips"> <span class="meta-chip" data-i18n="project1ChipRole">
Solo
</span> <span class="meta-chip" data-i18n="project1ChipFocus">
AI literacy
</span> <span class="meta-chip" data-i18n="project1ChipType">
Product
</span> </div> </div>`} ${project.id === "picnic" && renderTemplate`<div class="project-content"> <div class="project-meta"> <span class="status-pill" data-i18n="project2Status">
Tabletop
</span> <span class="project-year">${project.year}</span> </div> <span class="project-tag" data-i18n="project2Tag">
Board Game
</span> <h3 data-i18n="project2Title">Picnic Panic!</h3> <p data-i18n="project2Desc">
An ant-inspired cooperative board game: escape the storm, gather food, and survive backyard hazards—built around movement, combat, items, rivals, and clear win/lose conditions.
</p> <div class="tools" data-i18n="project2Tools">
Game design · Rules · Playtesting
</div> <div class="meta-chips"> <span class="meta-chip" data-i18n="project2ChipRole">
Designer
</span> <span class="meta-chip" data-i18n="project2ChipFocus">
Co-op
</span> <span class="meta-chip" data-i18n="project2ChipType">
Prototype
</span> </div> </div>`} ${project.id === "overtale" && renderTemplate`<div class="project-content"> <div class="project-meta"> <span class="status-pill" data-i18n="project3Status">
Released
</span> <span class="project-year">${project.year}</span> </div> <span class="project-tag" data-i18n="project3Tag">
2D · Pixel · Shooter
</span> <h3 data-i18n="project3Title">Overtale</h3> <p data-i18n="project3Desc">
Overtale is a 2D pixel-art platform shooter made in Unity (2024): move, jump, and shoot through compact levels built around readable combat and flow.
</p> <div class="tools" data-i18n="project3Tools">
Unity · C# · Pixel art · 2D platform shooter
</div> <div class="meta-chips"> <span class="meta-chip" data-i18n="project3ChipRole">
Solo Dev
</span> <span class="meta-chip">Unity</span> <span class="meta-chip" data-i18n="project3ChipType">
2D
</span> </div> </div>`} ${project.id === "traveler" && renderTemplate`<div class="project-content"> <div class="project-meta"> <span class="status-pill" data-i18n="project4Status">
Unity 3D
</span> <span class="project-year">${project.year}</span> </div> <span class="project-tag" data-i18n="project4Tag">
Narrative
</span> <h3 data-i18n="project4Title">Traveler</h3> <p data-i18n="project4Desc">
Traveler is a Unity 3D narrative game about a criminal choosing a path toward heaven or hell—exploring moral choice through exploration and story beats.
</p> <div class="tools" data-i18n="project4Tools">
Unity · 3D · Story-driven
</div> <div class="meta-chips"> <span class="meta-chip" data-i18n="project4ChipRole">
Solo Dev
</span> <span class="meta-chip" data-i18n="project4ChipFocus">
Choice
</span> <span class="meta-chip" data-i18n="project4ChipType">
3D
</span> </div> </div>`} ${project.id === "after" && renderTemplate`<div class="project-content"> <div class="project-meta"> <span class="status-pill" data-i18n="project5Status">
Unity 3D
</span> <span class="project-year">${project.year}</span> </div> <span class="project-tag" data-i18n="project5Tag">
3D
</span> <h3 data-i18n="project5Title">After They're Gone</h3> <p data-i18n="project5Desc">
After They're Gone is a 3D Unity game about robots salvaging a world without humans—a dystopian city where sanitation falls entirely to machines, told through exploration and environmental storytelling.
</p> <div class="tools" data-i18n="project5Tools">
Unity · 3D · Environment storytelling
</div> <div class="meta-chips"> <span class="meta-chip" data-i18n="project5ChipRole">
Solo
</span> <span class="meta-chip" data-i18n="project5ChipFocus">
Exploration
</span> <span class="meta-chip" data-i18n="project5ChipType">
Robots
</span> </div> </div>`} </article>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
