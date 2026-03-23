# PEACELOVE 2026 — 本次作業摘要

**作業日期**：2026-03-24  
**版本**：2026 Terminal Edition (初步完成)

---

## 本次任務目標

根據 SEO 優化建議報告，將 PEACELOVE 官網首頁重新設計為：
- **Linux Terminal 風格**（深色主題 + 等寬字體 + 終端機 UI）
- 整合 **AI × 資安 × 時尚** 三大服務主題
- 保留所有原有功能（Firebase 計數器、拖曳電視、主題切換）
- SEO 元標籤優化
- 新版本存放於獨立 `2026/` 資料夾，不影響現有站台

---

## 已完成事項

### 1. 備份與架構
- 原始 `index.html` → 備份為 `index.html.bak`
- 建立 `d:\peacelove_web\2026\` 獨立資料夾

### 2. 新版首頁設計 (`2026/index.html`)

**視覺風格**
- 配色：Catppuccin Mocha（深黑底 `#020608`、綠字 `#00ff88`、藍字 `#00c6ff`）
- 字體：Fira Code（等寬）+ Montserrat（標題）
- 終端機視窗元件：三色點（紅黃綠）+ prompt 符號 `pl@peacelove:~$`
- 背景格線效果 + 漸層光暈

**功能區塊對應**

| 區塊 | 新版呈現 |
|------|---------|
| Hero | 終端機啟動動畫 + 打字效果 + PEACE TV 電視 |
| About | Firebase 計數器（終端機 shell 風格）+ 使命卡片 |
| P.L. CORE | 資安🛡️ / 協同🔗 / AI🤖 三張服務卡 |
| P.L. HUES | Chroma AI🎨 / Affinity✨ / Creator Hub👗 |
| 靈感誌 | 三篇文章卡片（terminal 邊框風格） |
| 聯絡我們 | 雙欄表單（CORE 企業洽談 + HUES 合作/客服） |
| Footer | 終端機風格 footer + 原有社群連結 |

**SEO 更新**
- Title：`PEACELOVE | 企業資安×本地AI×時尚科技 | 創新數位解決方案`
- Meta Description：完整服務敘述（資安合規、私有化AI、色彩分析）

### 3. 功能保留（JS 從原始備份完整移植）
- ✅ Firebase 即時訪客計數器（心形瓶）
- ✅ 拖曳 PEACE TV 電視
- ✅ 主題切換（🎅 聖誕節 / ☁️ 新年 / ✨ 原始）
- ✅ 天降紅包效果 + 彈窗詢問
- ✅ 倒數計時器（新年主題）
- ✅ Firebase Admin CORE 模組監聽

### 4. 資源複製
- `config.js` → `2026/config.js`
- `js/guard.js` → `2026/js/guard.js`
- 產品頁 6 個（security/collaborative/ai/chroma/affinity + creator_hub）
- 服飾子頁 4 個（accessories/limited/minimal/street）
- `admin_panel.html`
- 圖片資源 15 個（us.png、PLAILINE.png、rvbglogo.png 等）

### 5. 連結修正
- 產品頁內「返回首頁」連結從 `../index.html` 改為 `./index.html`（同層）

---

## 待完成（下次繼續）

| 優先 | 項目 |
|------|------|
| 🔴 必做 | 瀏覽器開啟 `2026/index.html` 視覺驗證 |
| 🔴 必做 | 確認 Firebase 計數器、電視拖曳、主題切換功能 |
| 🟡 建議 | 手機版響應式畫面測試 |
| 🟢 可選 | 產品頁導覽列統一 Terminal 風格 |
| 🟢 可選 | 上線路徑設定（Zeabur / GitHub Pages） |

---

## 還原方式

若對新版不滿意，執行以下指令還原：
```powershell
Copy-Item "d:\peacelove_web\index.html.bak" "d:\peacelove_web\index.html" -Force
```

---

## 重要檔案路徑

| 類型 | 路徑 |
|------|------|
| 🆕 新版首頁 | `d:\peacelove_web\2026\index.html` |
| 🆕 樣式表 | `d:\peacelove_web\2026\style.css` |
| 💾 原始備份 | `d:\peacelove_web\index.html.bak` |
| 📋 任務清單 | `d:\peacelove_web\2026\task.md` |
| 📋 實作計畫 | `d:\peacelove_web\2026\implementation_plan.md` |
