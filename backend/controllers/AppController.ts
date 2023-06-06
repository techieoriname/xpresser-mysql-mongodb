import { Controller } from "xpresser/types/http";
import db from "../../mysql";
import type { QueryError, RowDataPacket } from "mysql2";

const AppController = <Controller.Object>{
  /**
   * Controller name.
   * @type {string}
   */
  name: "AppController",

  /**
   * Index Method for "/"
   * @returns {string}
   */
  index: async (http) => {
    const users = await http.db().query("SELECT * FROM users");

    return users;
  },

  testdb: async (http) => {
    const dbQuery = await db.query("SELECT * FROM users");
    return http.send(dbQuery);
  },

  fetchNews(http) {
    const news = http
      .db()
      .query(
        "SELECT * FROM news WHERE category_id = '4'",
        (err: QueryError | null, result: RowDataPacket[][]) => {
          if (err) {
            throw err;
          }
          return http.send(result);
        }
      );

    return news;
  },
};

export = AppController;
