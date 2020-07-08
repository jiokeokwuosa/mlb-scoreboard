import axios from "axios";
const URL = "https://gd2.mlb.com/components/game/mlb";
 
export default {
  url: URL,
  headers() {
    let header = {};
    header["Content-type"] = "application/json";
    return header;
  },
  loadScores(year, month, day) {
    return axios({
      method: "get",
      url: `${this.url}/${year}/${month}/${day}/master_scoreboard.json`,
      headers: this.headers()
    });
  },

  loadDetails(url) {
    return axios({
      method: "get",
      url: `http://gd2.mlb.com${url}/boxscore.json`,
      headers: this.headers()
    });
  },
  
};
