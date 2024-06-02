# React + TypeScript + Vite

## プロジェクト作成コマンド
```
npm create vite@latest my-app --template react-ts
cd my-app

```

## ライブラリインストール
```
npm install @reduxjs/toolkit react-redux tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

## Tailwind CSSの設定
tailwind.configに以下追記
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

index.cssを以下に変更
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```