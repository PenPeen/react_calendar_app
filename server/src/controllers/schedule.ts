import ScheduleModel from "../models/schedule";
import DB from "../infrastructure/db/handler";
import {
  Dictionary,
  Request as _Request,
  Response,
} from "express-serve-static-core";
import { Schedule } from "../entity/schedule";

type Request = _Request<Dictionary<string>>;

export default class ScheduleController {
  private scheduleModel: ScheduleModel;

  constructor(db: DB) {
    this.scheduleModel = new ScheduleModel(db);
  }

  /**
   * 指定された年と月に基づいて予定のリストを取得
   * 年と月が正しく指定されていない場合は、400 Bad Requestを返す
   *
   * @param {Request} req - リクエストオブジェクト
   * @param {Response} res - レスポンスオブジェクト
   */
  index = async (req: Request, res: Response) => {
    const year = Number(req.query.year as string);
    const month = Number(req.query.month as string);

    const isValid = year > 0 && month > 0 && month <= 12;
    if (!isValid) {
      res.sendStatus(400);
      return;
    }

    const schedules = await this.scheduleModel.findAll(month, year);

    res.json(schedules);
  };

  /**
   * 新しい予定をデータベースに保存。
   * 保存が成功した場合、新しい予定のデータをJSON形式で返す。
   *
   * @param {Request} req - リクエストオブジェクト
   * @param {Response} res - レスポンスオブジェクト
   */
  create = async (req: Request, res: Response) => {
    const schedule = req.body as Schedule;
    const newSchedule = await this.scheduleModel.store(schedule);

    res.json(newSchedule);
  };

  /**
   * テスト用
   * データベースに5つの予定データを生成する。
   * 生成された予定のリストをJSON形式で返す。
   *
   * @param {Request} _req - リクエストオブジェクト
   * @param {Response} res - レスポンスオブジェクト
   */
  createTestData = async (_req: Request, res: Response) => {
    const schedules = await this.scheduleModel.createTestData();

    res.json(schedules);
  };

  /**
   * 指定されたIDの予定を取得して返す。
   * IDが無効な場合は400 Bad Requestを返す。
   *
   * @param {Request} req - リクエストオブジェクト
   * @param {Response} res - レスポンスオブジェクト
   */
  show = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) {
      res.sendStatus(400);
      return;
    }

    const schedule = await this.scheduleModel.find(id);

    res.json(schedule);
  };

  /**
   * 指定されたIDの予定をデータベースから削除する。
   * 削除後は204 No Contentを返す。
   *
   * @param {Request} req - リクエストオブジェクト
   * @param {Response} res - レスポンスオブジェクト
   */
  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) {
      res.sendStatus(400);
      return;
    }

    await this.scheduleModel.delete(id);

    res.sendStatus(204);
  };
}
