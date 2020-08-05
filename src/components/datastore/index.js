import axios from "axios";
import config from "./config";

class dummyAPI {
  postData() {
    return axios.post(`${config.API_URL},`);
  }
  getData() {
    return axios.get(`${config.API_URL}`);
  }
}

export default new dummyAPI();
