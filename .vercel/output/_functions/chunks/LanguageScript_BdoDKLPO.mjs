import { c as createComponent } from './astro-component_N9bgKs13.mjs';
import 'piccolore';
import { n as createRenderInstruction, h as addAttribute, r as renderTemplate, o as renderHead, p as renderSlot, m as maybeRenderHead } from './entrypoint_BZTi2FEJ.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, ogImage } = Astro2.props;
  const canonicalUrl = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site).toString() : void 0;
  const resolvedOgImage = ogImage ? Astro2.site ? new URL(ogImage, Astro2.site).toString() : ogImage : void 0;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website">${canonicalUrl && renderTemplate`<meta property="og:url"${addAttribute(canonicalUrl, "content")}>`}${resolvedOgImage && renderTemplate`<meta property="og:image"${addAttribute(resolvedOgImage, "content")}>`}<meta name="twitter:card"${addAttribute(resolvedOgImage ? "summary_large_image" : "summary", "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${resolvedOgImage && renderTemplate`<meta name="twitter:image"${addAttribute(resolvedOgImage, "content")}>`}<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/langbai/virtual-venus/src/layouts/Layout.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav> <div class="container nav-inner"> <a href="/" class="logo">David Bao</a> <div class="nav-controls"> <div class="nav-links"> <a href="/#projects" data-i18n="navProjects">Projects</a> <a href="/#about" data-i18n="navAbout">About</a> <a href="/#contact" data-i18n="navContact">Contact</a> </div> <div class="lang-switch"> <button class="lang-btn active" type="button" data-lang="en">EN</button> <button class="lang-btn" type="button" data-lang="zh">中</button> </div> </div> </div> </nav>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/NavBar.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteFooter;
  return renderTemplate`${maybeRenderHead()}<footer class="container"> <span data-i18n="footerText">Built by David Bao with Astro</span> </footer>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/SiteFooter.astro", void 0);

const $$LanguageScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LanguageScript;
  return renderTemplate`${renderScript($$result, "/Users/langbai/virtual-venus/src/components/portfolio/LanguageScript.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/LanguageScript.astro", void 0);

export { $$Layout as $, $$NavBar as a, $$SiteFooter as b, $$LanguageScript as c };
