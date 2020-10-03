import Axios from "axios";

const createConnector = () => {
  return Axios.create();
};

const connector = createConnector();

export default connector;
