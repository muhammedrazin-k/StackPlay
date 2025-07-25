import axios from "axios";
const commonAPi = async (httpMethod, url, requestbody) => {
  const reqconfig = {
    method: httpMethod,
    url: url,
    data: requestbody,
  };

  return await axios(reqconfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

export default commonAPi;
