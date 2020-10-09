import Axios from "axios";

const createConnector = () => {
  const config = {};

  if (JSON.parse(localStorage.getItem("accessToken"))) {
    config.headers = {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("accessToken")).accessToken,
    };
  }

  return Axios.create(config);
};

const connector = createConnector();

export default connector;
