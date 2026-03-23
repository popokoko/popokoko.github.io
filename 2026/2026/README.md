# PEACELOVE 2026 — 新版首頁

**版本**：2026 Terminal Edition  
**更新日期**：2026-03-24  
**風格**：Linux Terminal / Catppuccin Mocha Dark Theme

---

## 資料夾架構

```
2026/
├── index.html                    ← 新版 Terminal 風格首頁 ⭐
├── style.css                     ← Terminal 主題樣式表
├── config.js                     ← Firebase 設定（與上層同步）
├── js/
│   └── guard.js                  ← 資安防護腳本
├── product_core_security.html    ← 資安解決方案頁
├── product_core_collaborative.html ← 協同解決方案頁
├── product_core_ai.html          ← AI 應用頁
├── product_hues_chroma.html      ← Chroma AI 色彩推薦
├── product_hues_affinity.html    ← Affinity 限量彩妝
├── creator_hub_apparel.html      ← Creator Hub 服飾
├── creator_hub_apparel_*.html    ← 服飾子頁（4支）
├── admin_panel.html              ← 管理後台
└── [圖片資源]                    ← us.png, PLAILINE.png 等
```

---

## 設計特色

| 特色 | 說明 |
|------|------|
| 🖥️ Terminal 風格 | Catppuccin Mocha 配色，Fira Code 等寬字體 |
| ⚡ 啟動動畫 | 模擬終端機開機流程，打字機效果 |
| 📺 拖曳電視 | 保留原版可拖曳 PEACE TV 功能 |
| ❤️ 訪客計數器 | Firebase 即時計數，終端機 UI 呈現 |
| 🔐 主題切換 | 保留聖誕節🎅 / 新年☁️ / 原始✨ 切換 |
| 📱 響應式 | 支援桌面與手機版 |

---

## 三大服務

```bash
$ ls /srv/peacelove/services/
cybersecurity/    # 企業資安×零信任×ISO27001
local-ai/         # 本地部署×私有知識庫×資料不出境
fashion-ai/       # Chroma AI×命定色×四季色彩診斷
```

---

## SEO 優化（已套用）

- **Title**：`PEACELOVE | 企業資安×本地AI×時尚科技 | 創新數位解決方案`
- **Description**：PEACELOVE 專注於企業資通安全、本地AI部署與AI時尚應用...

---

## 目前完成度

- [x] 第一階段：基礎建設（index.html + style.css + 全部資源複製）
- [ ] 第二階段：瀏覽器視覺驗證與微調
- [ ] 第三階段：產品頁 Terminal 風格統一（可選）
- [ ] 第四階段：上線部署

---

## 下次繼續的起點

1. 用瀏覽器開啟 `d:\peacelove_web\2026\index.html`
2. 確認 Terminal 動畫、電視、計數器是否正常
3. 若有問題請截圖回報，按第二階段清單逐項驗證

---

## 備份說明

原始版本備份：`d:\peacelove_web\index.html.bak`  
若需還原：`Copy-Item index.html.bak index.html -Force`
