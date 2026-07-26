// ============================================================
// RATING-STORE.JS — saves rated entries to the browser's
// localStorage so the log persists between visits (no backend
// needed, works on GitHub Pages as-is).
// ============================================================

const RatingStore = (() => {
  const KEY = "nikolikha_ratings_v1";

  function getAll(){
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e){
      console.error("Could not read ratings from storage:", e);
      return [];
    }
  }

  function saveAll(entries){
    try {
      localStorage.setItem(KEY, JSON.stringify(entries));
      return true;
    } catch (e){
      console.error("Could not save ratings to storage:", e);
      return false;
    }
  }

  function getAllEntries(){
    return getAll();
  }

  // system: "movie" | "book" | "nfMovie" | "nfBook"
  function getEntries(system){
    return getAll().filter(e => e.system === system);
  }

  function addEntry(entry){
    const entries = getAll();
    entry.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    entry.createdAt = new Date().toISOString();
    entries.push(entry);
    saveAll(entries);
    return entry;
  }

  function deleteEntry(id){
    const entries = getAll().filter(e => e.id !== id);
    saveAll(entries);
  }

  return { getAllEntries, getEntries, addEntry, deleteEntry };
})();

if (typeof module !== "undefined") { module.exports = RatingStore; }
