import { Connection, createConnection, QueryOptions } from "mysql2";

/**
 * データベース接続を管理するシングルトンクラス。
 * このクラスは一度だけインスタンス化され、アプリケーション全体で共有される。
 */
export default class DB {
  public con?: Connection;
  private retryCount: number = 0;

  /**
   * 外部からのインスタンス化を防ぐためprivateで定義。
   */
  private static db?: DB;
  private constructor() {}

  static get instance() {
    if (!this.db) {
      this.db = new DB();
    }

    return this.db;
  }

  /**
   * データベースへの接続試行。
   * 失敗した場合はリトライする。
   */
  async connect() {
    this.retryCount++;

    try {
      this.con = await this.createConnection();
    } catch (err) {
      // コネクションに失敗したら1sごとに最大10回retry
      if (this.retryCount < 10) {
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
        await this.connect();
      } else {
        throw new Error(err as string);
      }
    }
  }

  /**
   * SQLを実行する。
   * @param {string} query - 実行するSQLクエリ
   * @param {any[]} [values] - SQLクエリのプレースホルダーに適用される値
   * @returns {Promise<T>} クエリ結果を返すプロミス
   */
  query<T>(query: string, values?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.con!.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        }

        const _result = result as T;

        resolve(_result);
      });
    });
  }

  /**
   * 新しいデータベース接続を非同期で作成。
   * @returns {Promise<Connection>} 新しいコネクションオブジェクトを返すプロミス
   */
  private createConnection(): Promise<Connection> {
    return new Promise((resolve, reject) => {
      const connection = createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        charset: "utf8",
      });

      connection.connect((err) => {
        if (err) {
          reject(err);
        }

        resolve(connection);
      });
    });
  }
}
