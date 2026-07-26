// ============================================================
// GALLERY-DATA.JS — your graphic design posters.
//
// To add a real poster:
//   1. Drop the image file into assets/gallery/ (e.g. assets/gallery/poster-01.jpg)
//   2. Add an entry below with that path as `image`
//   3. Leave `image: null` for a placeholder tile (useful while you're still designing)
// ============================================================
const GALLERY_ITEMS = [
  { title: "Untitled Poster 01", tag: "lettering", image: null },
  { title: "Untitled Poster 02", tag: "editorial", image: null },
  { title: "Untitled Poster 03", tag: "concert", image: null },
  { title: "Untitled Poster 04", tag: "fan edit", image: null },
  { title: "Untitled Poster 05", tag: "typography", image: null },
  { title: "Untitled Poster 06", tag: "moodboard", image: null }
];

if (typeof module !== "undefined") { module.exports = GALLERY_ITEMS; }
