import { c as createComponent } from './astro-component_N9bgKs13.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BZTi2FEJ.mjs';
import { $ as $$Layout, a as $$NavBar, b as $$SiteFooter, c as $$LanguageScript } from './LanguageScript_BdoDKLPO.mjs';

const $$Cami = createComponent(($$result, $$props, $$slots) => {
  const images = Array.from({ length: 7 }, (_, i) => ({
    src: `/projects/cami/${String(i + 1).padStart(2, "0")}.png`,
    n: i + 1
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CAMI | David Bao", "description": "CAMI — friendly AI companion UX/UI case study slides from portfolio." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<main class="container project-detail"> <p class="project-detail-back"> <a href="/#projects" data-i18n="galleryBack">← Back to projects</a> </p> <h1 class="section-title" data-i18n="galleryCamiHeading">CAMI</h1> <p class="project-detail-lede" data-i18n="galleryCamiLede">
Slides exported from my portfolio PDF in order (original pages 2–8).
</p> <div class="gallery-stack"> ${images.map((img) => renderTemplate`<figure class="gallery-figure"> <img${addAttribute(img.src, "src")}${addAttribute(`CAMI portfolio page ${img.n}`, "alt")} loading="lazy" decoding="async" width="1280" height="720"> </figure>`)} </div> </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, {})} ${renderComponent($$result2, "LanguageScript", $$LanguageScript, {})} ` })}`;
}, "/Users/langbai/virtual-venus/src/pages/projects/cami.astro", void 0);

const $$file = "/Users/langbai/virtual-venus/src/pages/projects/cami.astro";
const $$url = "/projects/cami";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cami,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
