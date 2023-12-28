import axios from "../utils/axiosUser";

const laydshv = () => {
    return axios.get("api/v1/laydshv");
};

const laydsgv = () => {
    return axios.get("api/v1/laydsgv");
};


export { laydshv, laydsgv };