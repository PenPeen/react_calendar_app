# React カレンダーアプリケーション

## 概要

React + Redux を使用したカレンダーアプリケーション

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/layout.png?raw=true" alt="AddScheduleDialog" width="600"/>

### 基本機能

- 予定の一覧表示
- 予定の登録
- 予定の詳細確認
- 予定の削除

## Used

### FrontEnd

- TypeScript
- React
- Redux
- Redux ToolKit
- Material UI

### Backend

- TypeScript

## Components

<details>
<summary>AddScheduleDialog</summary>

予定を登録するためのダイアログコンポーネント

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/AddScheduleDialog.png?raw=true" alt="AddScheduleDialog" width="400"/>

</details>

<details>
<summary>CalendarBoard</summary>

一月分の予定を一覧表示するコンポーネント

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CalendarBoard.png?raw=true" alt="CalendarBoard" width="600"/>

</details>

<details>
<summary>CalendarElement</summary>

1 日分の予定を表示するためのコンポーネント

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CalendarElement.png?raw=true" alt="CalendarElement" width="200"/>

</details>

<details>
<summary>CurrentScheduleDialog</summary>

選択した予定の詳細を表示するダイアログコンポーネント

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/CurrentScheduleDialog.png?raw=true" alt="CurrentScheduleDialog" width="400"/>

</details>

<details>
<summary>Navigation</summary>

ナビゲーションバーを表示するコンポーネント

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/Navigation.png?raw=true" alt="Navigation" width="600"/>

</details>

<details>
<summary>Schedule</summary>

一覧上での 1 つの予定表示するコンポーネント

<img src="https://github.com/PenPeen/react_calendar_app/blob/image/front/public/images/Schedule.png?raw=true" alt="Schedule" width="200"/>

</details>

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
