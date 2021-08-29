const URL_PREFIX = "http://www.pudge.wang:4000";

const http = {
  get(url, params) {
    // console.log(params);
    if (params) {
      const arr = Object.keys(params).map((item) => {
        return item + "=" + params[item];
      });
      const str = "?" + arr.join("&");
      url += str;
      console.log(url);
    }
    return new Promise((resolve, reject) => {
      fetch(URL_PREFIX + url)
        .then((reponse) => reponse.json())
        .then((res) => {
          if (res.status == 0) {
            resolve(res);
          } else {
            reject(res.msg);
          }
        });
    });
  },
  post(url, data) {
    return new Promise((resolve) => {
      fetch(URL_PREFIX + url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
          "Content-type": "application/json",
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
      })
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        });
    });
  },
};
export default http;
