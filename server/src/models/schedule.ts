import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import BaseModel from "./base";
import DB from "../infrastructure/db/handler";
import { Schedule } from "../entity/schedule";

/**
 * スケジュールに関連するデータ操作を担当するモデルクラス。
 */
export default class ScheduleModel extends BaseModel {
  constructor(db: DB) {
    super(db);
  }

  /**
   * 指定された年月のすべての予定をデータベースから取得。
   *
   * @param {number} month - 検索対象の月
   * @param {number} year - 検索対象の年
   * @returns {Promise<Schedule[]>} 指定された月のスケジュール配列
   */
  async findAll(month: number, year: number) {
    const targetMonth = dayjs(`${year}-${month}-1`);
    const firstDay = targetMonth.startOf("month").toISOString();
    const lastDay = targetMonth.endOf("month").toISOString();

    return await this.db.query<Schedule[]>(
      "select * from schedules where date between ? and ?;",
      [firstDay, lastDay]
    );
  }

  /**
   * 指定されたIDに基づいてスケジュールを取得。
   *
   * @param {number} id - 取得したいスケジュールのID
   * @returns {Promise<Schedule>} 取得されたスケジュール
   */
  async find(id: number) {
    const schedules = await this.db.query<Schedule[]>(
      "select * from schedules where id = ?",
      [id]
    );
    return schedules[0];
  }

  /**
   * 新しいスケジュールをデータベースに追加。
   *
   * @param {Schedule} schedule - 追加したいスケジュールのデータ
   * @returns {Promise<Schedule>} データベースに追加されたスケジュール
   */
  async store(schedule: Schedule) {
    const result = await this.db.query<{ insertId: number }>(
      "insert into schedules (title, description, date, location) values (?, ?, ?, ?);",
      [
        schedule.title,
        schedule.description,
        new Date(schedule.date),
        schedule.location,
      ]
    );

    const newSchedule = await this.find(result.insertId);

    return newSchedule;
  }

  /**
   * 指定されたIDのスケジュールをデータベースから削除。
   *
   * @param {number} id - 削除したいスケジュールのID
   * @returns {Promise<void>}
   */
  async delete(id: number) {
    await this.db.query<Schedule[]>("delete from schedules where id = ?", [id]);

    return;
  }

  /**
   * テストデータをデータベースに追加し、その結果を配列として返す。
   *
   * @returns {Promise<Schedule[]>} 追加されたテストデータの配列
   */
  async createTestData() {
    const testData = this.testData();
    const newData = await Promise.all(
      testData.map(async (d) => await this.store(d))
    );

    return newData;
  }

  /**
   * テスト用のスケジュールデータを生成します。本日、前後1日、前後1ヶ月のスケジュールが含む。
   *
   * @returns {Schedule[]} テスト用のスケジュール配列
   */
  private testData() {
    const testData: Schedule[] = [
      {
        title: "会議A",
        description: "経営戦略会議1st",
        location: "会議室A",
        date: dayjs().toDate(),
      },
      {
        title: "会議B",
        description: "経営戦略会議2nd",
        location: "会議室B",
        date: dayjs().add(1, "day").toDate(),
      },
      {
        title: "会議C",
        description: "経営戦略会議3rd",
        location: "会議室C",
        date: dayjs().add(-1, "day").toDate(),
      },
      {
        title: "会議D",
        description: "経営戦略会議4th",
        location: "会議室D",
        date: dayjs().add(1, "month").toDate(),
      },
      {
        title: "会議E",
        description: "経営戦略会議5th",
        location: "会議室E",
        date: dayjs().add(-1, "month").toDate(),
      },
    ];

    return testData;
  }
}
