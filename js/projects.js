/* ============================================================
   projects.js — project showcase data (bilingual) + renderer.
   Only real, public, runnable repositories are listed.
   ============================================================ */

const GH = "https://github.com/liquitex-coder/";

const PROJECTS = [
  {
    repo: "Claim-Auditor",
    cat: "ai",
    catLabel: { ja: "AI / LLM", en: "AI / LLM" },
    title: { ja: "Claim Auditor", en: "Claim Auditor" },
    desc: {
      ja: "LLM不要のコード監査フレームワーク。AIが「やったと主張すること」と「実際にやったこと」の差分（仕様↔コード乖離、虚偽のコミット主張など）を決定論的に検出。",
      en: "An LLM-free code-audit framework. Deterministically detects the gap between what an AI claims it did and what it actually did — spec↔code drift, false commit claims, and more."
    },
    stack: ["Python", "SARIF", "CI", "Static Analysis"]
  },
  {
    repo: "ML-Price-Optimize",
    cat: "ml",
    catLabel: { ja: "機械学習", en: "ML" },
    title: { ja: "AI 動的価格・発注最適化", en: "AI Dynamic Pricing & Ordering" },
    desc: {
      ja: "販売履歴と外部要因から需要を予測し、利益を最大化する動的価格と最適発注量を算出。Before/Afterの利益差を金額で可視化し、ROIを証明するデモ。",
      en: "Forecasts demand from sales history and external drivers, then computes profit-maximizing dynamic prices and optimal order quantities. Proves ROI by visualizing the before/after profit gap."
    },
    stack: ["Python", "LightGBM", "PuLP", "Streamlit"]
  },
  {
    repo: "ml-churn-recommend",
    cat: "ml",
    catLabel: { ja: "機械学習", en: "ML" },
    title: { ja: "解約予測 + クロスセル推薦", en: "Churn Prediction + Cross-Sell" },
    desc: {
      ja: "顧客の解約リスクを早期検知し、SHAPで理由を説明、上位3件のクロスセル商品を自動提案。CRM風ダッシュボードで、ネット接続なしにcloneして即動作。",
      en: "Detects churn risk early, explains why with SHAP, and auto-generates top-3 cross-sell recommendations. CRM-style dashboard that runs offline right after clone."
    },
    stack: ["Python", "LightGBM", "SHAP", "Streamlit"]
  },
  {
    repo: "worldtech-jp",
    cat: "web",
    catLabel: { ja: "Web / AI", en: "Web / AI" },
    title: { ja: "NewsMatome — ニュース日本語化メディア", en: "NewsMatome — News Localization" },
    desc: {
      ja: "世界の技術・科学ニュースを収集し、出典明記で日本語化して毎朝公開する静的メディア。収集→翻訳（捏造防止の検証器付き）→要約→静的HTML生成のパイプライン。",
      en: "A static news media that collects world tech/science news and Japanese-izes it with source attribution every morning. Pipeline: collect → translate (with anti-fabrication verifier) → summarize → render."
    },
    stack: ["Python", "RSS/Atom", "Static Site", "SEO"]
  },
  {
    repo: "gesture-control-app",
    cat: "web",
    catLabel: { ja: "Web / AI", en: "Web / AI" },
    title: { ja: "GestureControl — 手指ジェスチャー操作", en: "GestureControl — Hand Gestures" },
    desc: {
      ja: "画面に触れずカメラ認識の手指ジェスチャーでニュースを読むアプリ。オンデバイス推論で映像は端末外に出さない。自然言語でジェスチャー割当も可能。",
      en: "Read the news hands-free with camera-recognized hand gestures. On-device inference keeps video on the device; assign gestures via natural language."
    },
    stack: ["TypeScript", "MediaPipe", "Vite", "On-device"]
  },
  {
    repo: "olivo-chat",
    cat: "web",
    catLabel: { ja: "Web / SaaS", en: "Web / SaaS" },
    title: { ja: "Olivo Chat — 飲食店向けチャットボット", en: "Olivo Chat — Restaurant Chatbot" },
    desc: {
      ja: "レストラン向けチャットボットSaaSの営業デモ実装。docker-composeで即起動でき、サンプル店舗で予約・問い合わせ対応の動作を確認できる。",
      en: "A sales-demo implementation of a restaurant chatbot SaaS. Spins up instantly with docker-compose; try reservations and inquiries on a sample restaurant."
    },
    stack: ["Python", "FastAPI", "Docker", "SaaS"]
  },
  {
    repo: "direct-root-core",
    cat: "web",
    catLabel: { ja: "Web / Platform", en: "Web / Platform" },
    title: { ja: "Direct-Root — 3者マッチング基盤", en: "Direct-Root — 3-Party Matching" },
    desc: {
      ja: "買い手・売り手・運送業者をつなぐ手数料1%の3者マッチング基盤。DuckDBによる決済ログ分析、全関数をラップするゼロトラスト・セキュリティ設計。",
      en: "A 3-party matching platform connecting buyers, sellers, and transporters at a 1% fee. DuckDB-based payment analytics and a zero-trust security design wrapping every exported function."
    },
    stack: ["Python", "DuckDB", "Zero-Trust", "Analytics"]
  }
];

function renderProjects(lang) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  const L = lang || window.currentLang || "ja";
  grid.innerHTML = PROJECTS.map((p) => `
    <a class="proj-card reveal" href="${GH}${p.repo}" target="_blank" rel="noopener" data-cat="${p.cat}">
      <div class="proj-top">
        <span class="proj-cat ${p.cat}">${p.catLabel[L]}</span>
        <span class="proj-arrow">↗</span>
      </div>
      <div class="proj-body">
        <h3>${p.title[L]}</h3>
        <p>${p.desc[L]}</p>
        <ul class="proj-stack">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
    </a>`).join("");

  // re-apply current filter and reveal observer after re-render
  if (window.applyFilter) window.applyFilter();
  if (window.observeReveals) window.observeReveals();
}

window.PROJECTS = PROJECTS;
window.renderProjects = renderProjects;
