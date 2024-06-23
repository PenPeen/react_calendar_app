# React カレンダーアプリケーション

## 概要

React + Redux を使用したカレンダーアプリケーション

## Technologies Used

### FrontEnd

- TypeScript
- React
- Redux
- Redux ToolKit
- Material UI

### BackEnd

- TypeScript

## Components

### AddScheduleDialog

予定を登録するためのダイアログ

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/AddScheduleDialog.png?raw=true" alt="AddScheduleDialog" width="400"/>

### CalendarBoard

一月分の予定を一覧表示する

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CalendarBoard.png?raw=true" alt="CalendarBoard" width="600"/>

### CalendarElement

1 日の予定を表示する

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CalendarElement.png?raw=true" alt="CalendarElement" width="200"/>

### CurrentScheduleDialog

選択した予定の詳細を表示するダイアログ

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CurrentScheduleDialog.png?raw=true" alt="CurrentScheduleDialog" width="400"/>

### Navigation

ナビゲーション

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/Navigation.png?raw=true" alt="Navigation" width="600"/>

### Schedule

一覧上での予定表示

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/Schedule.png?raw=true" alt="Schedule" width="200"/>

## Infrastructure

Docker を使用

### Containers

- **nginx**: Web サーバー
- **api**: 予定を登録するための API エンドポイント
- **db**: 予定を管理するためのデータベース

## ディレクトリ構成

ディレクトリ構成は [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) に準拠する形とする

小規模アプリケーションのため、`AtomicDesign` は採用していない。
コンポーネント毎にディレクトリを作成し、`index.tsx`, `styles.ts` を定義している
