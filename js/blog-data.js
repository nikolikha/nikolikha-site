// ============================================================
// BLOG-DATA.JS — your blog posts.
// Add a new entry to the TOP of the array for each new post.
// `body` supports basic HTML (paragraphs, <strong>, <em>, <br>).
// ============================================================
const BLOG_POSTS = [
  {
    date: "July 26, 2026",
    title: "welcome to the archive",
    excerpt: "first post! a quick tour of what's here and why I built it this way.",
    body: `<p>Hi — welcome. This corner of the internet is where I'm keeping the fan
    content, the graphic design posters, and the running log of everything I read
    and watch, scored with a rating system I built for myself.</p>`
  }
];

if (typeof module !== "undefined") { module.exports = BLOG_POSTS; }
