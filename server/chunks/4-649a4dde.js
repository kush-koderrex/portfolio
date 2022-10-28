import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each, d as compute_slots } from './index-93f54841-a6e0bf82.js';
import dateformat from 'dateformat';
import { k as keywords, t as title, s as siteBaseUrl } from './meta-a90a5c6c-3a1eec77.js';

const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});

const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M7 17V13.5V10"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M7 7.01L7.01 6.99889"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M7 9L12 12.5L17 9"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}"></path></svg>`;
});

const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"100%"}" height="${"100%"}" fill="${"currentColor"}" class="${"bi bi-youtube"}" viewBox="${"0 0 16 16"}"><path d="${"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"}"></path></svg>`;
});

const css$3$1 = {
  code: "#logo.svelte-5moaer.svelte-5moaer.svelte-5moaer{width:auto;height:100%}#logo.svelte-5moaer #name path.svelte-5moaer.svelte-5moaer{fill:inherit;stroke:inherit}#logo.svelte-5moaer #icon.svelte-5moaer.svelte-5moaer{transition:all 0.2s ease-in-out;fill:var(--text-light-color);stroke:var(--text-light-color)}#logo.svelte-5moaer #icon #darker.svelte-5moaer.svelte-5moaer{transition:all 0.2s ease-in-out;fill:var(--text-color);stroke:var(--text-color)}#logo.svelte-5moaer #icon path.svelte-5moaer.svelte-5moaer{fill:inherit;stroke:inherit}#logo.svelte-5moaer:hover #icon.svelte-5moaer.svelte-5moaer{fill:url(#paint0_linear);stroke:var(--primary-light-color)}#logo.svelte-5moaer:hover #icon #darker.svelte-5moaer.svelte-5moaer{fill:url(#paint3_linear);stroke:var(--primary-color)}@keyframes svelte-5moaer-animate-svg-fill{0%{fill:transparent}100%{fill:inherit}}@keyframes svelte-5moaer-animate-svg-stroke{0%{stroke-dashoffset:550;stroke-dasharray:550}99.999%{stroke-dasharray:550}100%{stroke-dashoffset:0}}@keyframes svelte-5moaer-animate-svg-stroke-long{0%{stroke-dashoffset:700;stroke-dasharray:700}99.999%{stroke-dasharray:700}100%{stroke-dashoffset:0;stroke-dasharray:700}}@media screen and (prefers-reduced-motion: no-preference){#logo.animated.svelte-5moaer #icon.svelte-5moaer>path.svelte-5moaer{animation:svelte-5moaer-animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4s both, svelte-5moaer-animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both}#logo.animated.svelte-5moaer #icon #darker.svelte-5moaer>path.svelte-5moaer{animation:svelte-5moaer-animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both, svelte-5moaer-animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animated = true } = $$props;
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$3$1);
  return `<svg id="${"logo"}" width="${"1006"}" height="${"169"}" viewBox="${"0 0 1006 169"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${["svelte-5moaer", animated ? "animated" : ""].join(" ").trim()}"><g id="${"icon"}" class="${"svelte-5moaer"}"><path d="${"M148.112 150.986C159.606 155.763 172.529 155.785 184.038 151.047C195.548 146.309 204.702 137.199 209.485 125.721L254.375 18.0134C242.882 13.2362 229.959 13.2142 218.449 17.9523C206.939 22.6904 197.786 31.8003 193.002 43.2782L148.112 150.986Z"}" fill="${"url(#paint0_linear)"}" class="${"svelte-5moaer"}"></path><path d="${"M73.8789 150.988C85.3724 155.766 98.2954 155.788 109.805 151.05C121.315 146.311 130.468 137.201 135.252 125.724L180.142 18.0162C168.649 13.239 155.726 13.217 144.216 17.9551C132.706 22.6931 123.553 31.8031 118.769 43.281L73.8789 150.988Z"}" fill="${"url(#paint1_linear)"}" class="${"svelte-5moaer"}"></path><g id="${"darker"}" class="${"svelte-5moaer"}"><path d="${"M9.18199 130.636C11.6709 124.669 13.7057 118.541 15.6676 112.396C16.6319 109.272 18.2278 106.38 20.3567 103.897C22.4855 101.415 25.1019 99.3947 28.044 97.9628C30.9861 96.5308 34.1912 95.7171 37.4609 95.572C40.7306 95.427 43.9953 95.9537 47.0529 97.1196C50.1106 98.2855 52.896 100.066 55.2369 102.35C57.5778 104.634 59.4242 107.374 60.6619 110.4C61.8996 113.426 62.5023 116.673 62.4326 119.941C62.3628 123.208 61.6222 126.427 60.2566 129.397C59.3419 131.465 58.1411 133.395 56.6895 135.129C50.4653 143.614 41.5646 149.762 31.4186 152.584C21.2726 155.407 10.471 154.74 0.750626 150.69L9.18199 130.636Z"}" fill="${"url(#paint2_linear)"}" class="${"svelte-5moaer"}"></path><path d="${"M97.0919 38.466C94.6031 44.4327 92.5682 50.5615 90.6063 56.7064C89.642 59.8298 88.0461 62.7223 85.9173 65.2049C83.7884 67.6875 81.172 69.7073 78.2299 71.1393C75.2878 72.5713 72.0827 73.385 68.813 73.53C65.5433 73.675 62.2786 73.1483 59.221 71.9825C56.1634 70.8166 53.3779 69.0364 51.037 66.752C48.6962 64.4677 46.8497 61.7279 45.612 58.7021C44.3743 55.6764 43.7716 52.4291 43.8414 49.1614C43.9111 45.8937 44.6517 42.675 46.0173 39.7046C46.9321 37.6368 48.1328 35.7073 49.5845 33.9726C55.8086 25.4878 64.7093 19.3399 74.8553 16.5176C85.0013 13.6953 95.8029 14.3625 105.523 18.412L97.0919 38.466Z"}" fill="${"url(#paint3_linear)"}" class="${"svelte-5moaer"}"></path></g></g><defs><linearGradient id="${"paint0_linear"}" x1="${"169.78"}" y1="${"159.992"}" x2="${"232.561"}" y2="${"8.94658"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#66B3B3"}"></stop><stop offset="${"1"}" stop-color="${"#95CACA"}"></stop></linearGradient><linearGradient id="${"paint1_linear"}" x1="${"95.547"}" y1="${"159.995"}" x2="${"158.328"}" y2="${"8.94937"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#66B3B3"}"></stop><stop offset="${"1"}" stop-color="${"#95CACA"}"></stop></linearGradient><linearGradient id="${"paint2_linear"}" x1="${"52.6972"}" y1="${"105.259"}" x2="${"14.1123"}" y2="${"154.478"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#0CA4A5"}"></stop><stop offset="${"1"}" stop-color="${"#097677"}"></stop></linearGradient><linearGradient id="${"paint3_linear"}" x1="${"53.5767"}" y1="${"63.8427"}" x2="${"92.1617"}" y2="${"14.6241"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#0CA4A5"}"></stop><stop offset="${"1"}" stop-color="${"#097677"}"></stop></linearGradient></defs><text fill="${"#ffffff"}" font-size="${"110"}" font-family="${"Verdana"}" x="${"270"}" y="${"120"}">Kush Kumar</text></svg>`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const css$2$1 = {
  code: ".socials.svelte-1xbtv6l.svelte-1xbtv6l{display:flex;align-items:center;gap:20px}.socials.svelte-1xbtv6l a.svelte-1xbtv6l{width:24px;color:var(--text-color);fill:var(--text-color)}.socials.svelte-1xbtv6l a.svelte-1xbtv6l:hover{color:var(--link-highlight-color);fill:var(--link-highlight-color)}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2$1);
  return `<div class="${"socials svelte-1xbtv6l"}">
  <a href="${"https://twitter.com/kush36408286"}" target="${"_blank"}" rel="${"noopener"}" title="${"Say Hi on Twitter"}" class="${"svelte-1xbtv6l"}">${validate_component(Twitter, "TwitterIcon").$$render($$result, {}, {}, {})}</a>
  <a href="${"https://github.com/kush-koderrex"}" target="${"_blank"}" rel="${"noopener"}" title="${"See my GitHub profile"}" class="${"svelte-1xbtv6l"}">${validate_component(Github, "GitHubIcon").$$render($$result, {}, {}, {})}</a>
  <a href="${"https://www.linkedin.com/in/kush-kumar-139084183/"}" target="${"_blank"}" rel="${"noopener"}" title="${"Connect on LinkedIn"}" class="${"svelte-1xbtv6l"}">${validate_component(Linkedin, "LinkedInIcon").$$render($$result, {}, {}, {})}</a>
  <a href="${"mailto:kushkumar89792666@gmail.com"}" target="${"_blank"}" rel="${"noopener"}" title="${"Send an email to matt@fantinel.dev"}" class="${"svelte-1xbtv6l"}">${validate_component(Email, "EmailIcon").$$render($$result, {}, {}, {})}</a>
  <a href="${"https://www.youtube.com/channel/UC6ATR2JWLfIlMMWD5rUQvEA"}" target="${"_blank"}" rel="${"noopener"}" title="${"Subscribe to my Youtube Channel"}" class="${"svelte-1xbtv6l"}">${validate_component(Youtube, "Youtube").$$render($$result, {}, {}, {})}</a>
  
</div>`;
});
const css$1$1 = {
  code: "header.svelte-vmlxu5.svelte-vmlxu5{position:relative;padding:30px 0}header.svelte-vmlxu5 .container.svelte-vmlxu5{display:flex;align-items:center;justify-content:space-between}@media(max-width: 576px){header.svelte-vmlxu5 .container.svelte-vmlxu5{justify-content:center}}header.svelte-vmlxu5 .left.svelte-vmlxu5{display:flex;align-items:center;gap:30px}@media(max-width: 576px){header.svelte-vmlxu5 .left.svelte-vmlxu5{flex-direction:column;justify-content:center;gap:15px}}header.svelte-vmlxu5 .left a.svelte-vmlxu5{color:var(--text-color)}header.svelte-vmlxu5 .left .links.svelte-vmlxu5{display:flex;align-items:center;gap:30px}header.svelte-vmlxu5 .logo.svelte-vmlxu5{height:44px}@media(max-width: 576px){header.svelte-vmlxu5 .right.svelte-vmlxu5{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animated = true } = $$props;
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$1$1);
  return `<header class="${"svelte-vmlxu5"}"><nav class="${"container svelte-vmlxu5"}"><div class="${"left svelte-vmlxu5"}"><a class="${"logo svelte-vmlxu5"}" href="${"/"}" alt="${"Site logo"}">${validate_component(Logo, "Logo").$$render($$result, { animated }, {}, {})}</a>
      <div class="${"links svelte-vmlxu5"}">
        </div></div>
		<div class="${"right svelte-vmlxu5"}">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></nav>
</header>`;
});
const Footer_wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"120"}" viewBox="${"0 0 1440 120"}" fill="${"none"}" style="${"transform: scale(-1,-1)"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"xMidYMid slice"}" class="${"footer__wave"}"><path d="${"M0 0L48 8.875C96 17.9167 192 35.4167 288 53.3333C384 71.25 480 88.75 576 82.2083C672 75.4167 768 44.5833 864 26.6667C960 8.75 1056 4.58333 1152 11.125C1248 17.9167 1344 35.4167 1392 44.4583L1440 53.3333V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"}" fill="${"var(--body-background-color)"}"></path></svg>`;
});
const css$4 = {
  code: "footer.svelte-1yo7hq0.svelte-1yo7hq0{height:340px;width:100%;background:var(--footer-background);display:grid;grid-template-rows:120px 1fr}footer.svelte-1yo7hq0 .content.svelte-1yo7hq0{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;font-weight:600;text-align:center}footer.svelte-1yo7hq0 .content .credits.svelte-1yo7hq0{font-weight:400;font-size:90%;color:var(--text-light-color)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentYear = new Date().getFullYear();
  $$result.css.add(css$4);
  return `<footer class="${"svelte-1yo7hq0"}"><div class="${"wave"}">${validate_component(Footer_wave, "FooterWave").$$render($$result, {}, {}, {})}</div>
  <div class="${"content svelte-1yo7hq0"}"><div class="${"copyright"}">\xA9 ${escape(currentYear)} Kush Kumar. Made in India.
    </div>
    <div class="${"credits svelte-1yo7hq0"}">Powered by <a href="${"https://kit.svelte.dev/"}" target="${"_blank"}" rel="${"noopener"}">SvelteKit</a>. 
      Icons by <a href="${"https://iconoir.com/"}" target="${"_blank"}" rel="${"noopener"}">Iconoir</a>.
    </div>
    <div class="${"socials"}">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div>
</footer>`;
});

const css$3 = {
  code: "picture.svelte-1gy5t1o.svelte-1gy5t1o{position:relative;width:100%;height:100%}picture.svelte-1gy5t1o img.svelte-1gy5t1o{width:100%;height:100%}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alt } = $$props;
  let { path = null } = $$props;
  let { filename } = $$props;
  let { figcaption = null } = $$props;
  let imageSrc;
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.figcaption === void 0 && $$bindings.figcaption && figcaption !== void 0)
    $$bindings.figcaption(figcaption);
  $$result.css.add(css$3);
  imageSrc = `/optimized-images/${path ? path + "/" : ""}${filename}`;
  return `<picture class="${"svelte-1gy5t1o"}"><source srcset="${escape(imageSrc, true) + ".avif"}" type="${"image/avif"}">
	<source srcset="${escape(imageSrc, true) + ".webp"}" type="${"image/webp"}">
	<img src="${escape(imageSrc, true) + ".png"}"${add_attribute("alt", alt, 0)} loading="${"lazy"}" decoding="${"async"}" class="${"svelte-1gy5t1o"}">
  ${figcaption ? `
    <figcaption><!-- HTML_TAG_START -->${figcaption}<!-- HTML_TAG_END --></figcaption>` : ``}
</picture>`;
});

const css$1 = {
  code: ".tag.svelte-1gq1fza{display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 15px;border-radius:10px;font-weight:500;font-size:0.85rem;width:fit-content;white-space:nowrap}.tag.primary.svelte-1gq1fza{background-color:var(--primary-lightest-color);color:var(--primary-color)}.tag.secondary.svelte-1gq1fza{background-color:var(--secondary-lightest-color);color:var(--secondary-color)}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<div class="${"tag " + escape(color, true) + " svelte-1gq1fza"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { url = null } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `${url ? `<a class="${"card clickable"}"${add_attribute("href", url, 0)} sveltekit:prefetch>${$$slots.image ? `${slots.image ? slots.image({}) : ``}` : ``}
		<div class="${"body"}"><div class="${"content"}">${slots.content ? slots.content({}) : ``}</div>
			${$$slots.footer ? `<div class="${"footer"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}</div></a>` : `<div class="${"card"}">${$$slots.image ? `${slots.image ? slots.image({}) : ``}` : ``}
		<div class="${"body"}"><div class="${"content"}">${slots.content ? slots.content({}) : ``}</div>
			${$$slots.footer ? `<div class="${"footer"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}</div></div>`}`;
});
const Blog_post_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { showImage = true } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.showImage === void 0 && $$bindings.showImage && showImage !== void 0)
    $$bindings.showImage(showImage);
  return `${post ? `${validate_component(Card, "Card").$$render($$result, { url: "/" + post.slug }, {}, {
    footer: () => {
      return `<div slot="${"footer"}">${post.tags ? `<div class="${"tags"}">${each(post.tags.slice(0, 2), (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div slot="${"content"}"><div class="${"title"}">${escape(post.title)}</div>
			<div class="${"note"}">${escape(post.readingTime)}</div>
			<div class="${"text"}">${escape(post.excerpt)}</div></div>`;
    },
    image: () => {
      return `<div slot="${"image"}">${showImage ? `${validate_component(Image, "Image").$$render($$result, {
        path: "posts/" + post.slug,
        filename: "cover",
        alt: "Cover Image"
      }, {}, {})}` : ``}</div>`;
    }
  })}` : ``}`;
});
const css$2 = {
  code: ".section-container.svelte-746x6z.svelte-746x6z{display:flex;align-items:center;justify-content:space-between;gap:40px;padding:50px 0}.section-container.svelte-746x6z .title-area.svelte-746x6z{flex:2;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:15px}.section-container.svelte-746x6z .title-area .text.svelte-746x6z{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}.section-container.svelte-746x6z .title-area .button.svelte-746x6z{min-width:180px;max-width:100%;width:auto}.section-container.svelte-746x6z .content-area.svelte-746x6z{flex:5;display:flex;flex-direction:column;justify-content:center;align-items:center}@media(min-width: 577px){.section-container.left.svelte-746x6z .title-area.svelte-746x6z{order:1}.section-container.left.svelte-746x6z .content-area.svelte-746x6z{order:2}.section-container.right.svelte-746x6z .title-area.svelte-746x6z{order:2}.section-container.right.svelte-746x6z .content-area.svelte-746x6z{order:1}.section-container.top.svelte-746x6z.svelte-746x6z{flex-direction:column}.section-container.top.svelte-746x6z .title-area.svelte-746x6z{order:1;max-width:600px}.section-container.top.svelte-746x6z .content-area.svelte-746x6z{order:2;width:100%}}@media(max-width: 576px){.section-container.svelte-746x6z.svelte-746x6z{flex-direction:column}}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { description = null } = $$props;
  let { buttonText = null } = $$props;
  let { buttonUrl = null } = $$props;
  let { target = null } = $$props;
  let { buttonColor = "primary" } = $$props;
  let { align = "left" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.buttonUrl === void 0 && $$bindings.buttonUrl && buttonUrl !== void 0)
    $$bindings.buttonUrl(buttonUrl);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.buttonColor === void 0 && $$bindings.buttonColor && buttonColor !== void 0)
    $$bindings.buttonColor(buttonColor);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css$2);
  return `<div class="${"section-container " + escape(align, true) + " svelte-746x6z"}"><div class="${"title-area svelte-746x6z"}">${title || description ? `<div class="${"text svelte-746x6z"}">${title ? `<h2>${escape(title)}</h2>` : ``}
				${description ? `<p>${escape(description)}</p>` : ``}</div>` : ``}
		${buttonText && buttonUrl ? `<a class="${"button " + escape(buttonColor, true) + " svelte-746x6z"}"${add_attribute("href", buttonUrl, 0)}${add_attribute("target", target, 0)}>${escape(buttonText)}</a>` : ``}</div>
	<div class="${"content-area svelte-746x6z"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});

const css = {
  code: ".grid-container.svelte-rrhmkd{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px}@media(max-width: 576px){.grid-container.svelte-rrhmkd{grid-template-columns:1fr}}",
  map: null
};
const _3x3_grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"grid-container svelte-rrhmkd"}">${slots.default ? slots.default({}) : ``}</div>`;
});
async function load({ fetch, url }) {
  const jsonUrl = url.pathname.replace(/\/\s*$/, "") + ".json";
  const res = await fetch(jsonUrl);
  if (res.ok) {
    return { props: { post: await res.json() } };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${jsonUrl}`)
  };
}
const _layout_blog_article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${$$result.head += `<meta name="${"keywords"}"${add_attribute("content", post.tags.concat(keywords).join(", "), 0)} data-svelte="svelte-xwf28p"><meta name="${"description"}"${add_attribute("content", post.excerpt, 0)} data-svelte="svelte-xwf28p"><meta property="${"og:description"}"${add_attribute("content", post.excerpt, 0)} data-svelte="svelte-xwf28p"><meta name="${"twitter:description"}"${add_attribute("content", post.excerpt, 0)} data-svelte="svelte-xwf28p">${$$result.title = `<title>${escape(post.title)} - ${escape(title)}</title>`, ""}<meta property="${"og:title"}" content="${escape(post.title, true) + " - " + escape(title, true)}" data-svelte="svelte-xwf28p"><meta name="${"twitter:title"}" content="${escape(post.title, true) + " - " + escape(title, true)}" data-svelte="svelte-xwf28p"><meta property="${"og:image"}" content="${escape(siteBaseUrl, true) + "/images/posts/" + escape(post.slug, true) + "/cover.jpg"}" data-svelte="svelte-xwf28p"><meta name="${"twitter:image"}" content="${escape(siteBaseUrl, true) + "/images/posts/" + escape(post.slug, true) + "/cover.jpg"}" data-svelte="svelte-xwf28p">`, ""}


<div class="${"markdown-layout"}">${validate_component(Header, "Header").$$render($$result, { animated: false }, {}, {})}
	<main><article id="${"markdown-content"}"><div class="${"header"}"><h1>${escape(post.title)}</h1>
				<div class="${"note"}">Published on ${escape(dateformat(post.date, "UTC:dd mmmm yyyy"))}</div>
				<div class="${"note"}">${escape(post.readingTime)}</div>
				<div class="${"tags"}">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div></div>
			<div class="${"cover-image"}">${validate_component(Image, "Image").$$render($$result, {
    path: "posts/" + post.slug,
    filename: "cover",
    alt: "Cover Image"
  }, {}, {})}</div>
			<div class="${"content"}">${slots.default ? slots.default({}) : ``}</div></article>
		${post.relatedPosts && post.relatedPosts.length > 0 ? `<div class="${"related-posts container"}">${validate_component(Section, "Section").$$render($$result, {
    title: "Related posts",
    description: "Have some time? Feel free to read some other posts by me.",
    align: "top"
  }, {}, {
    default: () => {
      return `${validate_component(_3x3_grid, "ThreeByThreeGrid").$$render($$result, {}, {}, {
        default: () => {
          return `${each(post.relatedPosts, (rel) => {
            return `${validate_component(Blog_post_card, "BlogPostCard").$$render($$result, { post: rel }, {}, {})}`;
          })}`;
        }
      })}`;
    }
  })}</div>` : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

var __layoutBlogArticle_svelte = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _layout_blog_article,
  load: load
});

const index = 4;
const file = 'immutable/pages/_slug_/__layout-blog-article.svelte-eb070641.js';
const imports = ["immutable/pages/_slug_/__layout-blog-article.svelte-eb070641.js","immutable/chunks/index-2b41e3ee.js","immutable/chunks/footer-f03810be.js","immutable/chunks/github-84e8b2df.js","immutable/chunks/email-8305dc40.js","immutable/chunks/youtube-76a4bf8f.js","immutable/chunks/image-2ee53b2e.js","immutable/chunks/section-87fb0083.js","immutable/chunks/meta-a90a5c6c.js"];
const stylesheets = ["immutable/assets/app-c6ee87d6.css","immutable/assets/3x3-grid-c71ee51f.css","immutable/assets/footer-c93c61a0.css","immutable/assets/image-d661376f.css","immutable/assets/section-c62ff239.css"];

export { file, imports, index, __layoutBlogArticle_svelte as module, stylesheets };
//# sourceMappingURL=4-649a4dde.js.map
