# remix-microcms-resume-template

<img src="https://img.shields.io/badge/-Remix-000000.svg?logo=remix&style=for-the-badge"> <img src="https://img.shields.io/badge/-Vite-000000.svg?logo=vite&style=for-the-badge"> <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/> <img alt="Vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>

## 概要
microCMSで編集可能な職務経歴書

## 環境情報

- 本番環境
  - 

## microCMSのAPIスキーマ設定
### 問題
エンドポイント: contents  
APIの型: オブジェクト形式

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| lastUpdate         | 最終更新日   | 日時          |
| name         | 氏名   | テキストフィールド          |
| occupation         | 職業   | テキストフィールド          |
| contacts      | リンクURL | 繰り返しフィールド（contact） |
| profileImage           | プロフィール画像       | 画像   |
| summary           | 職務要約       | テキストエリア   |
| skills           | 活かせる経験・知識・技術       | 繰り返しフィールド（skill）   |
| careers           | 職務経歴       | 繰り返しフィールド（career）   |
| selfPresentations           | 自己PR       | 繰り返しフィールド（selfPresentation）   |
| backgroundColor         | 背景色   | テキストフィールド          |
| textColor         | 文字色   | テキストフィールド          |

#### カスタムフィールド
カスタムフィールド名: 連絡先、SNSのURLなど  
フィールドID: contact

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| name      | 文字列 | テキストフィールド |
| url           | URL       | テキストフィールド   |

<br>カスタムフィールド名: スキルセット  
フィールドID: skill

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| name      | スキル・資格 | テキストフィールド |
| years           | 経験年数       | 数字   |
| level           | 熟練度・説明       | テキストエリア   |

<br>カスタムフィールド名: 会社の概要  
フィールドID: career

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| company      | 会社名 | テキストフィールド |
| period      | 在席期間 | テキストフィールド |
| business      | 事業内容 | テキストフィールド |
| stock      | 資本金 | テキストフィールド |
| employees           | 従業員数      | 数字   |
| projects           | 担当したプロジェクト      | 繰り返しフィールド（project）   |

<br>カスタムフィールド名: プロジェクトについて  
フィールドID: project

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| name      | プロジェクト名 | テキストフィールド |
| period      | 期間 | テキストフィールド |
| content           | プロジェクト概要や業務内容、実績、規模等      | リッチエディタ   |

<br>カスタムフィールド名: 自己PR  
フィールドID: selfPresentation

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| headline      | 見出し | テキストフィールド |
| content           | 内容      | テキストエリア   |

## 開発環境構築

### インストール

```bash
npm install
```

`.env` ファイルを以下の環境変数例を元に作成

```
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=your-service-id
```

`.env` ファイルを作成後、以下のコマンドで開発環境を構築  
```bash
npm run dev
```

### 動作確認
http://localhost:5173 にアクセスできるか確認  
アクセスできたら成功