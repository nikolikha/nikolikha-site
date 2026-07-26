// ============================================================
// SITE.JS — injects the nav + footer on every page from config.js,
// so the header/footer only need to be edited in one place.
// ============================================================

const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
  letterboxd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="12" r="5"/><circle cx="17" cy="12" r="5"/></svg>',
  goodreads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 4h9a3 3 0 0 1 3 3v13l-3-1.6L12 20l-3-1.6L6 20V4Z"/><path d="M9 8h6M9 11h6"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H21.6L15.6 9.9L22.7 21H17.2L12.9 14.9L8 21H5.3L11.7 13.6L4.9 3H10.5L14.4 8.6L18.9 3ZM17.9 19.3H19.4L9.8 4.6H8.2L17.9 19.3Z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M7 9.5C10.5 8.4 15 8.7 17.3 10.4M7.5 12.5C10.3 11.7 13.9 11.9 16 13.3M8 15.3C10.2 14.7 12.9 14.9 14.7 16" stroke-linecap="round"/></svg>',
  default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/></svg>'
};

function renderNav(activeHref){
  const items = SITE_CONFIG.nav.map(item => {
    if (item.more){
      const sub = item.more.map(m =>
        `<a href="${m.href}"${activeHref === m.href ? ' aria-current="page"' : ''}>${m.label}</a>`
      ).join("");
      return `<div class="nav-more">
        <a href="#" tabindex="0">${item.label}</a>
        <div class="nav-more-panel">${sub}</div>
      </div>`;
    }
    return `<a href="${item.href}"${activeHref === item.href ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join("");

  return `<nav class="site-nav"><div class="wrap">${items}</div></nav>`;
}

function renderFooter(){
  const socials = SITE_CONFIG.socials
    .filter(s => s.url)
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${SOCIAL_ICONS[s.icon] || SOCIAL_ICONS.default}${s.label}</a>`)
    .join("");

  return `<footer class="site-footer">
    <div class="socials">${socials}</div>
    <div>&copy; ${new Date().getFullYear()} ${SITE_CONFIG.name} &mdash; ${SITE_CONFIG.footerNote}</div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  const navMount = document.getElementById("site-nav");
  const footerMount = document.getElementById("site-footer");
  if (navMount) navMount.outerHTML = renderNav(page);
  if (footerMount) footerMount.outerHTML = renderFooter();

  // reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .15 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }
});
