import { c as createComponent } from './astro-component_N9bgKs13.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_BZTi2FEJ.mjs';
import { $ as $$Layout, a as $$NavBar, b as $$SiteFooter, c as $$LanguageScript } from './LanguageScript_BdoDKLPO.mjs';
import { $ as $$ProjectCard } from './ProjectCard_CEeJAgQB.mjs';
import { A as ALL_PROJECTS } from './projects_BpL8JPtW.mjs';

const $$All = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All projects | David Bao", "description": "Full project list: games, UX/UI, and tabletop design—newest first." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<main class="container projects-all-page"> <section class="projects-all" aria-labelledby="projects-all-heading"> <h1 id="projects-all-heading" class="section-title" data-i18n="projectsAllTitle">All projects</h1> <p class="section-subtitle" data-i18n="projectsAllSubtitle">
Everything in chronological order, newest to oldest.
</p> <div class="project-grid"> ${ALL_PROJECTS.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </section> </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, {})} ${renderComponent($$result2, "LanguageScript", $$LanguageScript, {})} ` })}`;
}, "/Users/langbai/virtual-venus/src/pages/projects/all.astro", void 0);

const $$file = "/Users/langbai/virtual-venus/src/pages/projects/all.astro";
const $$url = "/projects/all";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$All,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
