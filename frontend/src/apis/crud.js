import axios from "axios";

const baseUrl = "https://experts-tic-backend.herokuapp.com";

export function searchExperts(city, callback) {
  axios.get(baseUrl + "/experts/search/" + city).then((res) => {
    callback(res.data);
  });
}

export function addExpert(expert, callback) {
  axios
    .post(baseUrl + "/experts/" + expert.id, expert)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      callback(error);
    });
}
