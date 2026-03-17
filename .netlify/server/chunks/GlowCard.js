import { a as attr_class, g as attr_style, d as stringify } from "./index.js";
function GlowCard($$renderer, $$props) {
  let { children } = $$props;
  let glowX = 50;
  let glowY = 50;
  let isHovered = false;
  $$renderer.push(`<div${attr_class("glow-card", void 0, { "is-hovered": isHovered })}${attr_style(`--glow-x: ${stringify(glowX)}px; --glow-y: ${stringify(glowY)}px;`)} role="region" aria-label="Interactive card">`);
  if (children) {
    $$renderer.push("<!--[0-->");
    children($$renderer);
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  GlowCard as G
};
