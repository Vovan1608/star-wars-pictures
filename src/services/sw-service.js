import axios from "axios";

export default function ajax({ path, dataHeader, url }) {
  return axios
    .get(`${url}/${dataHeader}/${path}/`)
    .then((res) => res.data)
    .catch((err) => err);
}
