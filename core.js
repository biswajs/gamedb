/**
 * @package gamedb
 * @author Biswa
 * @copyright [(c) Coded by Biswajs | Discord Id: Biswa#7373]
 */

const got = require("got");
const { gamedb_configs } = require("./functions/config");
const apiconfig = new gamedb_configs({
  config: true,
  URL: "https://api.bestepicgames.com/db?apikey=",
});
const config = { jsonurl: "https://api.bestepicgames.com/db?apikey=" };
class GamedbApi {
  /**
   *
   * @param {*} options [enable: true / false]
   */
  constructor(options = { enable: Boolean, jsonurl: String }) {
    this.enable = options.enable;
  }
  jsonURL(st) {
    return st;
  }
}
const getApi = new GamedbApi();
const api = getApi.jsonURL(config.jsonurl);

class GameDB extends GamedbApi {
  /**
   *
   * @param {*} ApiKey [Get an api key from bestepicgames.com/api | Api key must specified]
   * @param {*} ApiConfig [Api key configuration (optional): not required ]
   */
  constructor(ApiKey, ApiConfig = { config: Boolean }) {
    this.config = ApiConfig.config;
    this.apikey = ApiKey;
  }
  async run($data) {
    got(api).then((res) => {
      let json = JSON.parse(res.body);
      console.log(json);
    });
  }
}

module.exports = { GameDB };
