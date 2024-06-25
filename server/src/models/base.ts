import DB from "../infrastructure/db/handler";

/**
 * modelのベースクラス
 * DBインスタンスをセット
 */
export default class BaseModel {
  protected db: DB;

  constructor(db: DB) {
    this.db = db;
  }
}
