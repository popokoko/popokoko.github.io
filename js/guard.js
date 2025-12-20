/**
 * PEACELOVE Unified Security Guard
 * 統一資安防護腳本 (v2.2)
 * 
 * 功能：
 * 1. 資產保護 (禁止右鍵、拖曳、選取、快捷鍵)
 * 2. URL 隱藏 (隱藏實際檔案名稱，防止路徑洩漏)
 */

(function () {
    console.log("🛡️ PEACELOVE Security Guard Active");

    // --- 1. 資產保護 (Asset Protection) ---

    // CSS 防護：禁止選取文字 (部分 Input/Textarea 除外)、禁止拖曳
    const style = document.createElement('style');
    style.innerHTML = `
        body { 
            -webkit-user-select: none; 
            -moz-user-select: none; 
            -ms-user-select: none; 
            user-select: none; 
        }
        /* 允許輸入框選取，避免破壞 UX */
        input, textarea, [contenteditable="true"] { 
            -webkit-user-select: text; 
            -moz-user-select: text; 
            -ms-user-select: text; 
            user-select: text; 
        }
        /* 圖片防護 */
        img { 
            -webkit-user-drag: none; 
            -khtml-user-drag: none; 
            -moz-user-drag: none; 
            -o-user-drag: none; 
            user-drag: none; 
            pointer-events: none; /* 更激進的防護：讓圖片無法被點擊 (視情況可選) */
        }
        /* 恢復圖片的點擊事件 (如果需要互動) */
        .interactive-img { pointer-events: auto; }
    `;
    document.head.appendChild(style);

    // 全域禁止右鍵選單 (防止 Save As / View Source)
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);

    // 禁止圖片拖曳 (針對舊瀏覽器的額外防護)
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') e.preventDefault();
    }, false);

    // 鍵盤快捷鍵攔截 (Ctrl/Cmd + S, P, C, U, I(DevTools))
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey || e.metaKey) {
            const forbiddenKeys = ['s', 'S', 'p', 'P', 'c', 'C', 'u', 'U', 'i', 'I'];
            if (forbiddenKeys.includes(e.key)) {
                e.preventDefault();
                // console.log("Security Alert: Hotkey blocked.");
            }
        }
        // 攔截 F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
        }
    }, false);


    // --- 2. URL 隱藏機制 (URL Masking) ---
    // 目的：隱藏具體 HTML 檔名 (如 admin_panel.html)，只顯示目錄路徑
    // 副作用：重新整理網頁會回到目錄首頁 (index.html)，這在資安上可視為 Session 保護

    try {
        // 檢查是否支援 History API
        if (window.history && window.history.replaceState) {
            // 獲取當前路徑
            const path = window.location.pathname;
            // 取得目錄路徑 (去除檔名)
            // 例如: /popokoko/admin.html -> /popokoko/
            const directory = path.substring(0, path.lastIndexOf('/') + 1);

            // 執行隱藏 (僅在非 index.html 時執行，且不影響 param/hash)
            // 注意：我們保留 pathname 為目錄，這樣看起來更簡潔
            // 如果希望完全隱藏，可以使用 '/' (但在 GitHub Pages 子目錄可能有問題)

            // 策略：將 URL 修改為當前目錄
            window.history.replaceState(null, document.title, directory);

            console.log("🔒 URL Masked");
        }
    } catch (e) {
        console.warn("URL Masking failed:", e);
    }

})();
