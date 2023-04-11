import axios from "axios";
import { config } from "react-transition-group";

export default class PostService {
  static async GetAll(limit = 10, page = 1) {
    try {
    } catch (e) {
      console.log(e);
    }

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
