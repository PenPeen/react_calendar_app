# React カレンダーアプリケーション

# 概要

React + Redux を使用したカレンダーアプリケーション

# Technologies Used

## FrontEnd

- TypeScript
- React
- Redux
- Redux ToolKit
- Material UI

## Components

- AddScheduleDialog

予定を登録するためのダイアログ

![AddScheduleDialog](https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/AddScheduleDialog.png?raw=true "AddScheduleDialog")

- CalendarBoard

一月分の予定を一覧表示する

![CalendarBoard](https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CalendarBoard.png?raw=true "CalendarBoard")

- CalendarElement

1 日の予定を表示する

![CalendarElement](https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CalendarElement.png?raw=true "CalendarElement")

- CurrentScheduleDialog

選択した予定の詳細を表示するダイアログ

![CurrentScheduleDialog](https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CurrentScheduleDialog.png?raw=true "CurrentScheduleDialog")

- Navigation

ナビゲーション

![Navigation](https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/Navigation.png?raw=true "Navigation")

- Schedule

一覧上での予定表示

![Schedule](https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/Schedule.png?raw=true "Schedule")

## Infra

Docker を使用

### コンテナ

- nginx: web サーバー
- api: 予定を登録するためのエンドポイントを定義
- db: 予定を管理するための DB

# ディレクトリ構成

ディレクトリ構成は [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) に準拠する形とする

小規模アプリケーションのため、`AtomicDesign` は採用していない。
コンポーネント毎にディレクトリを作成し、`index.tsx`, `styles.ts` を定義している
