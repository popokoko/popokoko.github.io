# PEACELOVE 首頁 Linux Terminal 風格改造進度

> **上次停留點 (2026-03-24)**：2026 資料夾初步架構完成，待瀏覽器驗證與產品頁適配。

## ✅ 第一階段：基礎建設（已完成）
- [x] 分析現有 `index.html` 代碼結構（1797 行）
- [x] 備份原始 `index.html` → `index.html.bak`
- [x] 建立 `d:\peacelove_web\2026\` 資料夾架構
- [x] 建立 `2026/style.css`（Catppuccin Mocha 終端機主題）
- [x] 建立 `2026/index.html`（Linux Terminal 風格首頁）
  - SEO Meta Title / Description 已更新
  - Hero：終端機啟動動畫 + 打字效果 + 電視
  - About：Firebase 計數器（terminal 風格）
  - Core：資安、協同、AI 三張服務卡
  - HUES：Chroma AI、Affinity、Creator Hub
  - Insights：三篇文章卡片
  - Contact：雙欄聯絡表單
  - Footer、LINE widget、Zeabur badge
- [x] 附加原始 JS 腳本（主題切換、Firebase、拖曳電視）
- [x] 複製 `config.js` → `2026/config.js`
- [x] 複製 `js/guard.js` → `2026/js/guard.js`
- [x] 複製全部產品頁（6 個）+ 服飾子頁（4 個）+ admin_panel
- [x] 複製所有圖片資源（us.png、PLAILINE.png 等 15 個）
- [x] 修正產品頁內部連回首頁路徑

## 🔲 第二階段：視覺驗證與微調（待完成）
- [ ] 瀏覽器開啟 `2026/index.html` 確認視覺效果
- [ ] 確認 Firebase 訪客計數器連線正常
- [ ] 確認電視可拖曳且影片播放
- [ ] 確認所有導覽列與服務卡連結可用
- [ ] 確認主題切換按鈕（🎅/☁️/✨）運作
- [ ] 手機版響應式畫面測試

## 🔲 第三階段：產品頁 Terminal 風格適配（可選）
- [ ] 產品頁套用 `style.css` terminal 主題
- [ ] 產品頁導覽列統一風格

## 🔲 第四階段：文件與上線
- [ ] 完成 `2026/README.md`
- [ ] 產出 Walkthrough 驗收文件
- [ ] 確認上線路徑（Zeabur / GitHub Pages 設定）
