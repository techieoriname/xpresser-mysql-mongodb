import db from "../mysql";
import RequestEngine from "xpresser/src/RequestEngine";

export = function (ReqEng: typeof RequestEngine) {
  return class extends ReqEng {
    db() {
      return db;
    }
  };
};
