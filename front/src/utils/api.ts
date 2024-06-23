import { Schedule, ScheduleItem } from '@/types';

const host = 'http://localhost:8080/api';
const url = (path: string) => `${host}/${path}`;
const defaultHeader = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * エンドポイントからスケジュールの配列を取得する
 *
 * @param {string} path - APIエンドポイントへのパス
 * @returns {Promise<ScheduleItem[]>} スケジュール項目の配列を返すPromiseオブジェクト
 */
export const fetchScheduleItemsRequest = async (
  path: string,
): Promise<ScheduleItem[]> => {
  const res = await fetch(url(path));
  const result = await res.json();

  return result;
};

/**
 * エンドポイントへスケジュールをPOSTメソッドで送信する
 *
 * @param {string} path - APIエンドポイントへのパス
 * @param {Schedule} body - スケジュール情報
 * @param {object} [header=defaultHeader] - リクエストのヘッダー（デフォルト: JSON）
 * @returns {Promise<ScheduleItem>} APIレスポンスを返すPromiseオブジェクト
 */
export const storeScheduleRequest = async (
  path: string,
  body: Schedule,
  header: object = defaultHeader,
) => {
  const options = { ...header, method: 'POST', body: JSON.stringify(body) };
  const res = await fetch(url(path), options);
  const result: ScheduleItem = await res.json();

  return result;
};

/**
 * エンドポイントへスケジュールの削除リクエストをDELETEメソッドで送信する
 *
 * @param {string} path - APIエンドポイントへのパス
 * @returns {Promise<void>} レスポンスを返さないPromiseオブジェクト
 */
export const removeScheduleRequest = async (path: string) => {
  const options = { method: 'DELETE' };
  await fetch(url(path), options);

  return;
};
