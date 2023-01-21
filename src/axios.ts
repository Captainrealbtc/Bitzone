import axios from "axios";

export default axios.create({
   baseURL: "https://cryptovesto-server.onrender.com",
   timeout: 40000,
});
