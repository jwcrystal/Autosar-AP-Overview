# AUTOSAR AP Web Demo

本專案為AUTOSAR AP (Adaptive Platform) 的前端展示，包含模組特色、方法論與概念展示

## 結構說明
- concepts.html  # 系統架構說明
- features.html  # 核心功能展示
- methodology.html  # 開發流程說明
- package.json  # NPM依賴項目
- tailwind.config.js  # CSS 樣式設定
- /css 主樣式檔
- /js 系統核心腳本

## 安裝說明
1. 確認環境安裝 Node.js (`node -v`)
2. 執行 `npm install` 安裝依賴套件
3. 基於 tailwind 需執行 `npx tailwindcss -i ./css/input.css -o ./css/styles.css --watch`

## 網站架構
基於HTML5 + Tailwind CSS 建置，無後端資料庫功能