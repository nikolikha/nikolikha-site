// ============================================================
// RATING-TOOL.JS — renders the questionnaire for a given rating
// system and computes the score live, mirroring the weighted
// logic from the original Book_Movie_Rater.xlsx:
//   question score = value(answer) * weight * 100
//   category score = sum of its question scores
//   overall        = sum of category scores        (out of 100)
//   /10 rating      = round(overall / 10, 1)
//   star rating     = mround(overall / 20, 0.5)     (out of 5)
//   letter grade    = same thresholds as the sheet's IFS formula
// ============================================================

const RatingTool = (() => {

  const SWATCH_CYCLE = ["var(--peach-deep)", "var(--peach)", "var(--sage)", "var(--blush)"];

  function letterGrade(overall){
    if (overall >= 95) return { grade: "A+", label: "Masterpiece", emoji: "🏆" };
    if (overall >= 90) return { grade: "A", label: "Excellent", emoji: "⭐" };
    if (overall >= 80) return { grade: "B", label: "Good", emoji: "💛" };
    if (overall >= 65) return { grade: "C", label: "Fair", emoji: "👍" };
    if (overall >= 50) return { grade: "D", label: "Poor", emoji: "😕" };
    return { grade: "F", label: "Complete sh*t", emoji: "🤢" };
  }

  function mround(value, multiple){
    return Math.round(value / multiple) * multiple;
  }

  function qid(sysKey, ci, qi){ return `q_${sysKey}_${ci}_${qi}`; }

  function renderForm(sysKey){
    const sys = RATING_SYSTEMS[sysKey];
    let html = "";
    sys.categories.forEach((cat, ci) => {
      const color = SWATCH_CYCLE[ci % SWATCH_CYCLE.length];
      html += `<div class="rt-category" style="border-left:3px solid ${color};">
        <div class="rt-category-head">
          <h4>${cat.name}</h4>
          <span class="rt-catweight">${cat.weightPct}%</span>
        </div>`;
      cat.questions.forEach((q, qi) => {
        const name = qid(sysKey, ci, qi);
        html += `<div class="rt-question">
          <p class="rt-qtext">${q.text}</p>
          <div class="rt-options">`;
        q.options.forEach(opt => {
          html += `<label class="rt-opt">
            <input type="radio" name="${name}" value="${opt}" data-cat="${ci}" data-q="${qi}" data-weight="${q.weight}">
            <span>${opt}</span>
          </label>`;
        });
        html += `</div></div>`;
      });
      html += `</div>`;
    });
    return html;
  }

  function computeScore(sysKey, formEl){
    const sys = RATING_SYSTEMS[sysKey];
    const categoryScores = sys.categories.map(() => 0);
    let answered = 0, total = 0;

    sys.categories.forEach((cat, ci) => {
      cat.questions.forEach((q, qi) => {
        total++;
        const name = qid(sysKey, ci, qi);
        const checked = formEl.querySelector(`input[name="${name}"]:checked`);
        if (checked){
          answered++;
          const val = q.values[checked.value];
          categoryScores[ci] += val * q.weight * 100;
        }
      });
    });

    const overall = categoryScores.reduce((a, b) => a + b, 0);
    const { grade, label, emoji } = letterGrade(overall);

    return {
      categoryScores,
      overall,
      ratingOutOf10: Math.round(overall * 10) / 100, // round(overall/10, 1)
      stars: mround(overall / 20, 0.5),
      grade, gradeLabel: label, gradeEmoji: emoji,
      answered, total
    };
  }

  function renderBreakdown(sysKey, result){
    const sys = RATING_SYSTEMS[sysKey];
    let html = `<div class="rt-bars">`;
    sys.categories.forEach((cat, ci) => {
      const color = SWATCH_CYCLE[ci % SWATCH_CYCLE.length];
      const pct = Math.max(0, Math.min(100, (result.categoryScores[ci] / cat.weightPct) * 100));
      html += `<div class="rt-bar-row">
        <span class="rt-bar-label">${cat.name}</span>
        <div class="rt-bar-track"><div class="rt-bar-fill" style="width:${pct}%;background:${color};"></div></div>
        <span class="rt-bar-score">${result.categoryScores[ci].toFixed(1)} / ${cat.weightPct}</span>
      </div>`;
    });
    html += `</div>`;
    return html;
  }

  function renderStars(stars){
    const full = Math.floor(stars);
    const half = stars - full >= 0.5;
    let out = "★".repeat(full);
    if (half) out += "½";
    return out || "—";
  }

  function renderShareCard(sysKey, title, result){
    const sys = RATING_SYSTEMS[sysKey];
    const bars = sys.categories.map((cat, ci) => {
      const color = SWATCH_CYCLE[ci % SWATCH_CYCLE.length];
      const pct = Math.max(0, Math.min(100, (result.categoryScores[ci] / cat.weightPct) * 100));
      return `<div class="sc-bar-row">
        <span>${cat.name}</span>
        <div class="sc-bar-track"><div class="sc-bar-fill" style="width:${pct}%;background:${color};"></div></div>
      </div>`;
    }).join("");

    return `
      <div class="sc-eyebrow">${sys.label}</div>
      <div class="sc-title">${title || "Untitled"}</div>
      <div class="sc-score">${result.overall.toFixed(1)}<span class="sc-score-max">/100</span></div>
      <div class="sc-stars">${renderStars(result.stars)}</div>
      <div class="sc-grade">${result.gradeEmoji} ${result.grade} &middot; ${result.gradeLabel}</div>
      <div class="sc-bars">${bars}</div>
      <div class="sc-watermark">rated on ${(typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.name) || "Lavander & Co."}</div>
    `;
  }

  return { renderForm, computeScore, renderBreakdown, renderStars, renderShareCard, letterGrade, mround };
})();

if (typeof module !== "undefined") { module.exports = RatingTool; }
