# PEACELOVE 首頁 Linux Terminal 風格改造計畫

本計畫將根據 SEO 建議報告，將 PEACELOVE 官網首頁改造成具備「Linux Terminal」風格的現代化、高質感介面。

## 使用者需求核心
- **風格變更**：Linux Terminal 風格（深色背景、等寬字體、命令行介面元素）。
- **服務整合**：結合 AI、資安（Cybersecurity）、時尚（Fashion）三大主題。
- **功能保留**：保持所有連結可用性，且人數計數器必須正常運作。
- **SEO 優化**：更新 Title、Meta Description 及 H 標籤內容。

## 預計變更範圍

### 1. 視覺設計 (CSS)
- [NEW] 引入 `Fira Code` 或 `JetBrains Mono` 等寬字體。
- [NEW] 設定主色調：背景為 `#0a0a0a`（極黑），文字為 `#00ff41`（駭客綠）或 `#00c6ff`（科技藍）。
- [NEW] 實作「終端機視窗」效果，包含頂部控制按鈕（紅、黃、綠）。
- [NEW] 加入掃描線（Scanlines）與微弱的 CRT 閃爍效果。
- [NEW] 實作打字機效果（Typing Effect）載入首頁文案。

### 2. 首頁結構 (HTML/index.html)
- [MODIFY] 更新 `<title>` 與 `<meta>` 標籤。
- [MODIFY] 重新設計 Hero Section：模擬終端機啟動與命令輸入流程。
- [MODIFY] 三大服務區塊調整：
    - **資安 (Cybersecurity)**：改寫為報告建議的「守護者」語調，加入存取授權視覺。
    - **人工智慧 (AI)**：改寫為「本地化」訴求，加入數據保護模擬效果。
    - **時尚 (Fashion)**：改寫為「Chroma AI」命定色分析，保留時尚感但以數位儀表板呈現。
- [MODIFY] 改進導覽列：採用極簡化設計。

### 3. 功能邏輯 (JavaScript)
- [RETAIN] Firebase 訪客計數器（Hearts Bottle Logic）。需將其風格適配至終端介面（例如：數位化顯示流量）。
- [RETAIN] 拖曳電視功能：將其包裝為「模擬監視器」或「系統模組」。
- [NEW] 交互式提示符號（Command Prompt Interaction）：點擊服務項目可模擬輸入命令並顯示內容。

## 驗證計畫

### 自動化測試
- 目前無自動化測試腳本，將進行手動驗證。

### 手動驗證 (Browser Testing)
1. **風格檢查**：確認是否呈現 Linux Terminal 質感，字體、配色是否正確。
2. **SEO 檢查**：檢查 Meta 標籤是否已改為建議內容。
3. **功能檢查**：
    - 點擊導覽列連結，確認能否平滑捲動至對應區塊。
    - 觀察訪客計數器是否正常從 Firebase 讀取並顯示「心形/數位流量」。
    - 測試電視是否仍可拖曳且正常播放影片。
4. **內容檢查**：確認文案是否已改為具有溫度的改寫版本。
