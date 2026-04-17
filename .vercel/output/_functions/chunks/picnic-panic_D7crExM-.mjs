import { c as createComponent } from './astro-component_N9bgKs13.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BZTi2FEJ.mjs';
import { $ as $$Layout, a as $$NavBar, b as $$SiteFooter, c as $$LanguageScript } from './LanguageScript_BdoDKLPO.mjs';

const $$PicnicPanic = createComponent(($$result, $$props, $$slots) => {
  const images = Array.from({ length: 5 }, (_, i) => ({
    src: `/projects/picnic-panic/${String(i + 1).padStart(2, "0")}.png`,
    n: i + 1
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Picnic Panic! | David Bao", "description": "Picnic Panic! — ant-inspired board game design slides from portfolio." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<main class="container project-detail"> <p class="project-detail-back"> <a href="/#projects" data-i18n="galleryBack">← Back to projects</a> </p> <h1 class="section-title" data-i18n="galleryPicnicHeading">Picnic Panic!</h1> <p class="project-detail-lede" data-i18n="galleryPicnicLede">
Slides exported from my portfolio PDF in order (original pages 9–13).
</p> <div class="gallery-stack"> ${images.map((img) => renderTemplate`<figure class="gallery-figure"> <img${addAttribute(img.src, "src")}${addAttribute(`Picnic Panic portfolio page ${img.n}`, "alt")} loading="lazy" decoding="async" width="1280" height="720"> </figure>`)} </div> </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, {})} ${renderComponent($$result2, "LanguageScript", $$LanguageScript, {})} ` })}`;
}, "/Users/langbai/virtual-venus/src/pages/projects/picnic-panic.astro", void 0);

const $$file = "/Users/langbai/virtual-venus/src/pages/projects/picnic-panic.astro";
const $$url = "/projects/picnic-panic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PicnicPanic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
