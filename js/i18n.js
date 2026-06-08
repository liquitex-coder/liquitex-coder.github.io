/* ============================================================
   i18n.js — bilingual JP/EN dictionary + switching logic.
   Elements with [data-i18n="key"] get their text/HTML swapped.
   ============================================================ */

const I18N = {
  ja: {
    "meta.title": "Liquitex — AI・機械学習・Web開発フリーランスエンジニア",
    "meta.description": "AI・機械学習・Web開発で、ビジネスの成果に直結するプロダクトを作るフリーランスエンジニア。LLMエージェント、需要予測・価格最適化、SaaS開発の実績。",

    "nav.services": "サービス",
    "nav.work": "実績",
    "nav.skills": "スキル",
    "nav.about": "プロフィール",
    "nav.contact": "お問い合わせ",

    "hero.eyebrow": "フリーランスエンジニア / 受託開発",
    "hero.title": "AI・機械学習・Web開発で、<br /><span class=\"grad\">ビジネスの成果</span>に直結するプロダクトを。",
    "hero.sub": "LLMエージェント、需要予測・価格最適化、SaaS開発。アイデアから運用まで一気通貫で形にします。ROIを数字で示せる開発が強みです。",
    "hero.ctaPrimary": "案件のご相談",
    "hero.ctaSecondary": "実績を見る",
    "hero.stat1Num": "7+", "hero.stat1Label": "公開プロジェクト",
    "hero.stat2Num": "3", "hero.stat2Label": "専門領域",
    "hero.stat3Num": "JP/EN", "hero.stat3Label": "対応言語",

    "services.eyebrow": "SERVICES",
    "services.title": "提供できること",
    "services.lead": "3つの専門領域で、課題の整理から実装・運用まで対応します。",
    "services.s1Title": "AI / LLM・自動化",
    "services.s1Body": "LLMエージェント、AI生成物の品質監査、社内業務の自動化。決定論的な検証で「動くだけ」でなく「信頼できる」AIを構築します。",
    "services.s1Tag": "業務自動化",
    "services.s2Title": "機械学習・データ分析",
    "services.s2Body": "需要予測、価格最適化、解約予測。SHAPによる説明可能性と、施策のROIを金額で示すダッシュボードまで一体で提供します。",
    "services.s2Tag": "需要予測", "services.s2Tag2": "最適化",
    "services.s3Title": "Web / SaaS・受託開発",
    "services.s3Body": "フルスタックWebアプリ、SaaSプロトタイプ、静的サイト。PoCから本番運用まで、要件定義を起点に着実に形にします。",
    "services.s3Tag": "SaaS",

    "work.eyebrow": "SELECTED WORK",
    "work.title": "実績・プロジェクト",
    "work.lead": "いずれもソースコード公開・実行可能。クリックでGitHubリポジトリへ。",
    "work.filterAll": "すべて",
    "work.filterAI": "AI / LLM",
    "work.filterML": "機械学習",
    "work.filterWeb": "Web / SaaS",

    "skills.eyebrow": "TECH STACK",
    "skills.title": "技術スタック",
    "skills.g1": "言語",
    "skills.g2": "AI / ML",
    "skills.g3": "Web / バックエンド",
    "skills.g4": "領域・その他",
    "skills.fx": "自動売買EA開発",
    "skills.opt": "数理最適化 (PuLP)",
    "skills.audit": "AI品質監査",

    "about.eyebrow": "ABOUT",
    "about.title": "プロフィール",
    "about.p1": "AI・機械学習・Web開発を軸に活動するフリーランスエンジニアです。単に動くものを作るのではなく、<strong>ビジネス上の成果（ROI・工数削減・信頼性）</strong>に結びつくプロダクトづくりを大切にしています。",
    "about.p2": "特に、AIが「やったと主張すること」と「実際にやったこと」の差分を決定論的に検証する仕組み（Claim-Auditor）など、<strong>品質と再現性</strong>に踏み込んだ開発を得意とします。日本語・英語の両方で要件定義から納品まで対応可能です。",
    "about.point1": "要件定義（署名要件A／受け入れ定義B）を起点にした堅実な開発",
    "about.point2": "git clone 後すぐ動く・再現可能なデモを重視",
    "about.point3": "日英バイリンガル対応・リモート完結",
    "about.flowTitle": "ご依頼の流れ",
    "about.flow1t": "ご相談", "about.flow1b": "課題・ご予算・納期をお聞かせください。",
    "about.flow2t": "要件定義・お見積", "about.flow2b": "実現範囲を整理し、見積をご提示。",
    "about.flow3t": "開発・納品", "about.flow3b": "進捗を共有しながら反復的に開発。",

    "contact.eyebrow": "CONTACT",
    "contact.title": "お問い合わせ",
    "contact.lead": "案件のご相談・お見積もりはお気軽にどうぞ。通常2営業日以内に返信します。",
    "contact.name": "お名前",
    "contact.email": "メールアドレス",
    "contact.message": "ご相談内容",
    "contact.send": "送信する",
    "contact.note": "",
    "contact.sending": "送信中…",
    "contact.ok": "送信しました。ありがとうございます！折り返しご連絡します。",
    "contact.err": "送信に失敗しました。お手数ですが liquitex@gmail.com まで直接ご連絡ください。",
    "contact.fallback": "フォーム未設定のため、メールクライアントを開きます。",

    "footer.top": "↑ TOP"
  },

  en: {
    "meta.title": "Liquitex — Freelance AI, ML & Web Engineer",
    "meta.description": "Freelance engineer building AI, ML, and web products that drive real business outcomes. LLM agents, demand forecasting & price optimization, SaaS development.",

    "nav.services": "Services",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "Freelance Engineer / Contract Development",
    "hero.title": "AI, ML & web products that drive <br /><span class=\"grad\">real business outcomes</span>.",
    "hero.sub": "LLM agents, demand forecasting & price optimization, SaaS development. From idea to production — end to end. My edge: development whose ROI I can show in numbers.",
    "hero.ctaPrimary": "Start a Project",
    "hero.ctaSecondary": "View Work",
    "hero.stat1Num": "7+", "hero.stat1Label": "Public projects",
    "hero.stat2Num": "3", "hero.stat2Label": "Specialties",
    "hero.stat3Num": "JP/EN", "hero.stat3Label": "Languages",

    "services.eyebrow": "SERVICES",
    "services.title": "What I Deliver",
    "services.lead": "Three areas of expertise — from framing the problem to implementation and operation.",
    "services.s1Title": "AI / LLM & Automation",
    "services.s1Body": "LLM agents, quality auditing of AI output, and internal workflow automation. Deterministic verification for AI that is not just working, but trustworthy.",
    "services.s1Tag": "Automation",
    "services.s2Title": "Machine Learning & Data",
    "services.s2Body": "Demand forecasting, price optimization, churn prediction. Explainability with SHAP, plus dashboards that show the ROI of each action in monetary terms.",
    "services.s2Tag": "Forecasting", "services.s2Tag2": "Optimization",
    "services.s3Title": "Web / SaaS & Contract Dev",
    "services.s3Body": "Full-stack web apps, SaaS prototypes, static sites. From PoC to production, built solidly on top of clear requirements.",
    "services.s3Tag": "SaaS",

    "work.eyebrow": "SELECTED WORK",
    "work.title": "Selected Work",
    "work.lead": "All open-source and runnable. Click any card to open the GitHub repository.",
    "work.filterAll": "All",
    "work.filterAI": "AI / LLM",
    "work.filterML": "ML",
    "work.filterWeb": "Web / SaaS",

    "skills.eyebrow": "TECH STACK",
    "skills.title": "Tech Stack",
    "skills.g1": "Languages",
    "skills.g2": "AI / ML",
    "skills.g3": "Web / Backend",
    "skills.g4": "Domains & More",
    "skills.fx": "Algo trading EA dev",
    "skills.opt": "Math optimization (PuLP)",
    "skills.audit": "AI quality auditing",

    "about.eyebrow": "ABOUT",
    "about.title": "About Me",
    "about.p1": "I'm a freelance engineer focused on AI, machine learning, and web development. Rather than just building something that runs, I care about products that connect to <strong>business outcomes — ROI, reduced workload, reliability</strong>.",
    "about.p2": "I specialize in development that takes <strong>quality and reproducibility</strong> seriously — for example Claim-Auditor, a system that deterministically verifies the gap between what an AI <em>claims</em> it did and what it <em>actually</em> did. I work end to end in both Japanese and English, from requirements to delivery.",
    "about.point1": "Solid delivery anchored in signed requirements (spec A / done-definition B)",
    "about.point2": "Demos that run right after git clone — reproducible by design",
    "about.point3": "Bilingual JP/EN, fully remote",
    "about.flowTitle": "How It Works",
    "about.flow1t": "Inquiry", "about.flow1b": "Tell me your challenge, budget, and timeline.",
    "about.flow2t": "Scope & Quote", "about.flow2b": "I clarify the scope and send a quote.",
    "about.flow3t": "Build & Deliver", "about.flow3b": "Iterative development with shared progress.",

    "contact.eyebrow": "CONTACT",
    "contact.title": "Get in Touch",
    "contact.lead": "Feel free to reach out for a project or a quote. I usually reply within 2 business days.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Your message",
    "contact.send": "Send",
    "contact.note": "",
    "contact.sending": "Sending…",
    "contact.ok": "Sent — thank you! I'll get back to you shortly.",
    "contact.err": "Sending failed. Please email me directly at liquitex@gmail.com.",
    "contact.fallback": "Form not configured yet — opening your email client instead.",

    "footer.top": "↑ TOP"
  }
};

const HTML_KEYS = new Set(["hero.title", "about.p1", "about.p2"]);

function applyLang(lang) {
  const dict = I18N[lang] || I18N.ja;
  document.documentElement.lang = lang;
  document.body.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val == null) return;
    if (key === "meta.title") { document.title = val; return; }
    if (key === "meta.description") { el.setAttribute("content", val); return; }
    if (HTML_KEYS.has(key)) { el.innerHTML = val; }
    else { el.textContent = val; }
  });

  document.querySelectorAll(".lang-opt").forEach((o) =>
    o.classList.toggle("active", o.dataset.lang === lang));

  if (window.renderProjects) window.renderProjects(lang);
  try { localStorage.setItem("lang", lang); } catch (e) {}
  window.currentLang = lang;
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const browser = (navigator.language || "ja").toLowerCase().startsWith("en") ? "en" : "ja";
  applyLang(saved || browser);
}

window.I18N = I18N;
window.applyLang = applyLang;
window.initLang = initLang;
