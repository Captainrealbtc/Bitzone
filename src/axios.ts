import axios from "axios"

export default axios.create({
    baseURL: "https://cryptovesto.herokuapp.com",
    timeout: 10000,
 });
 