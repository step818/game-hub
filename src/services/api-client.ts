import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68197120b5b84ae99318545b7a4d3542",
  },
});
