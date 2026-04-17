import { c as createComponent } from './astro-component_N9bgKs13.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, l as renderComponent } from './entrypoint_BZTi2FEJ.mjs';
import { $ as $$Layout, a as $$NavBar, b as $$SiteFooter, c as $$LanguageScript } from './LanguageScript_BdoDKLPO.mjs';
import 'clsx';
import { $ as $$ProjectCard } from './ProjectCard_CEeJAgQB.mjs';
import { A as ALL_PROJECTS, H as HOME_PROJECT_COUNT } from './projects_BpL8JPtW.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero"> <div class="hero-grid"> <div> <span class="eyebrow" data-i18n="heroEyebrow">Game Developer · USC</span> <h1>David Bao</h1> <p class="hero-tagline" data-i18n="heroTagline">
Storytelling & system design · Game development · USC undergrad
</p> <ul class="hero-skill-pills" aria-label="Tools & technologies"> <li class="pill-tag">Unity</li> <li class="pill-tag">Unreal</li> <li class="pill-tag">C++</li> <li class="pill-tag">Java</li> <li class="pill-tag">Figma</li> </ul> <div class="button-row"> <a class="button primary" href="/#projects" data-i18n="heroPrimaryBtn">View Projects</a> <a class="button" href="/#contact" data-i18n="heroSecondaryBtn">Contact Me</a> </div> </div> <div class="hero-card"> <h3 data-i18n="heroCardTitle">Lately</h3> <p data-i18n="heroCardText">
I'm most excited when narrative and systems reinforce each other—rules and loops that carry emotion
        and story. Lately I'm exploring that in Unity through small prototypes, and I'd love to connect with
        others who care about both.
</p> </div> </div> </section>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/HeroSection.astro", void 0);

const $$ProjectsSection = createComponent(($$result, $$props, $$slots) => {
  const homeProjects = ALL_PROJECTS.slice(0, HOME_PROJECT_COUNT);
  return renderTemplate`${maybeRenderHead()}<section id="projects"> <span class="section-eyebrow" data-i18n="projectsEyebrow">Portfolio</span> <h2 class="section-title" data-i18n="projectsTitle">Projects</h2> <p class="section-subtitle" data-i18n="projectsSubtitle">
Design research, tabletop systems, and Unity games—selected work from my portfolio.
</p> <div class="project-grid"> ${homeProjects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> <div class="projects-view-all"> <a href="/projects/all" class="button primary" data-i18n="viewAllProjects">View all projects</a> </div> </section>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/ProjectsSection.astro", void 0);

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const projectCount = ALL_PROJECTS.length;
  return renderTemplate`${maybeRenderHead()}<section id="about"> <span class="section-eyebrow" data-i18n="aboutEyebrow">About</span> <h2 class="section-title" data-i18n="aboutTitle">About</h2> <div class="about-box"> <div class="about-layout"> <figure class="about-photo-wrap"> <img class="about-photo" src="/about-photo.png" alt="David Bao at Ubisoft Shanghai" width="640" height="800" loading="lazy" decoding="async" data-i18n-alt="aboutPhotoAlt"> </figure> <div class="about-main"> <div class="about-copy"> <p data-i18n="aboutP1">
I'm a freshman at USC studying game design. I'm most passionate about storytelling and system
            design—emotion and meaning, expressed through rules, loops, and feedback players can actually feel.
</p> <p data-i18n="aboutP2">
I care most when mechanics and narrative pull the same direction: clear systems, and story beats
            that land because the design earns them—not just the script.
</p> <p data-i18n="aboutP3">
Lately that's Unity: small prototypes where I test narrative and systems in the same build and
            iterate fast.
</p> <p data-i18n="aboutP4">
I'm always learning from games that marry story with systems—and I'd love to meet others who care
            about that mix too.
</p> </div> <div class="stats-grid"> <article class="stat-card"> <div class="stat-value">${projectCount}</div> <div class="stat-label" data-i18n="aboutStatGamesLabel">Projects Built</div> </article> <article class="stat-card"> <div class="stat-value" data-i18n="aboutStatJamValue">1</div> <div class="stat-label" data-i18n="aboutStatJamLabel">Game Jam</div> </article> <article class="stat-card"> <div class="stat-value" data-i18n="aboutStatYearsValue">3+</div> <div class="stat-label" data-i18n="aboutStatYearsLabel">Years Learning</div> </article> <article class="stat-card"> <div class="stat-value" data-i18n="aboutStatIdeasValue">±∞</div> <div class="stat-label" data-i18n="aboutStatIdeasLabel">Ideas in Progress</div> </article> </div> <h3 class="skills-title" data-i18n="skillsTitle">Tools & Skills</h3> <div class="skills-list"> <span class="pill-tag">Unity</span> <span class="pill-tag">Unreal</span> <span class="pill-tag">C++</span> <span class="pill-tag">Java</span> <span class="pill-tag">Figma</span> </div> </div> </div> </div> </section>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/AboutSection.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact"> <div class="contact-box"> <h2 class="section-title" data-i18n="contactTitle">Let's Connect</h2> <p class="section-subtitle" style="margin: 0 auto 22px;" data-i18n="contactSubtitle">
You can reach me by email or connect with me on LinkedIn.
</p> <div class="contact-actions"> <a class="button primary" href="mailto:yubao9527@gmail.com">yubao9527@gmail.com</a> <a class="button" href="https://www.linkedin.com/in/yu-bao-63066237b/" target="_blank" rel="noreferrer"> <span data-i18n="contactLinkedInLabel">LinkedIn</span> </a> <a class="button" href="tel:+12134490511"> <span data-i18n="contactPhoneLabel">Phone: 2134490511</span> </a> </div> </div> </section>`;
}, "/Users/langbai/virtual-venus/src/components/portfolio/ContactSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "David Bao | Game Design Portfolio", "description": "David Bao's bilingual game design portfolio built with Astro.", "ogImage": "/og-image.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<main class="container"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "AboutSection", $$AboutSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, {})} ${renderComponent($$result2, "LanguageScript", $$LanguageScript, {})} ` })}`;
}, "/Users/langbai/virtual-venus/src/pages/index.astro", void 0);

const $$file = "/Users/langbai/virtual-venus/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
