// ============================================================
// SITE CONFIG — edit this file to make the site yours.
// Nothing else needs to change for basic customization.
// ============================================================
const SITE_CONFIG = {
  name: "nikolikha",
  tagline: "personal archive & fan corner",
  footerNote: "made with too many feelings",

  // Shown in the footer. Add/remove as needed — set url to "" to hide one.
  socials: [
    { label: "Goodreads", url: "https://www.goodreads.com/user/show/27063344-nikolikha", icon: "goodreads" },
    { label: "Instagram", url: "https://instagram.com/nikolikha", icon: "instagram" },
    { label: "Letterboxd", url: "https://letterboxd.com/nikolikha/", icon: "letterboxd" },
    { label: "Twitter / X", url: "https://x.com/was_nikolikha", icon: "twitter" },
    { label: "Spotify", url: "https://open.spotify.com/user/annabethclaryeaton", icon: "spotify" }
  ],

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Profile", href: "profile.html" },
    {
      label: "More",
      more: [
        { label: "Music", href: "music.html" },
        { label: "Books", href: "books.html" },
        { label: "Movies", href: "movies.html" }
      ]
    }
  ]
};

if (typeof module !== "undefined") { module.exports = SITE_CONFIG; }
