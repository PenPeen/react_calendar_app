## 機能

カレンダーにおける予定の保存や取得行うための API 群

## 仕様

### 特定の月の予定の全件取得

指定した`年/月`の予定を全て取得

```
GET /schedules
```

#### params

| Name    | Type     | description           |
| ------- | -------- | --------------------- |
| `month` | `number` | **必須** 取得対象の月 |
| `year`  | `number` | **必須** 取得対象の年 |

#### 例

```bash
$ curl "localhost:8080/api/schedules?month=6&year=2024"
```

```json
Status: 200 OK

----

[
  {
    "id": 1,
    "date": "2024-6-11T15:00:00.000Z",
    "title": "MTG A",
    "description": "xxxについて",
    "location": "会議室A"
  },
  {
    "id": 2,
    "date": "2024-6-21T15:00:00.000Z",
    "title": "MTG B",
    "description": "xxxについて",
    "location": "未定"
  }
]
```

### 特定の予定の取得

```
GET /schedules/:id
```

```bash
$ curl "localhost:8080/api/schedules/1"
```

```json
Status: 200 OK

----

{
  "id": 1,
  "date": "2024-6-11T15:00:00.000Z",
  "title": "MTG A",
  "description": "xxxについて",
  "location": "会議室A"
}
```

### 予定の登録

```
POST /schedules
```

#### パラメーター

| Name          | Type        | description             |
| ------------- | ----------- | ----------------------- |
| `title`       | `string`    | **必須** 予定のタイトル |
| `date`        | `ISOString` | **必須** 予定の日付     |
| `description` | `string`    | 予定の説明              |
| `location`    | `string`    | 場所の指定              |

#### 例

```bash
$ curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"title": "MTG A", "description": "xxxについて", "date": "2024-6-11T15:00:00.000Z", "location": "会議室A"}' \
  "localhost:8080/api/schedules"
```

```json
Status: 200 OK

----

{
  "id": 15,
  "date": "2024-6-11T15:00:00.000Z",
  "title": "MTG A",
  "description": "xxxについて",
  "location": "会議室A"
}
```

### 予定の削除

```
DELETE /schedules/:id
```

#### 例

```bash
$ curl "localhost:8080/api/schedules/1
```

```json
Status: 204 No Content
```
