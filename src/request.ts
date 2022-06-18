import axios from "./axios";

export const register = async (credentials: any) => {
  try {
    const res: any = await axios.post("/register", credentials);
    console.log(res);
    if (res.status === 200) {
      return res;
    }
    if (res.status === 210) return res;
  } catch (err) {
    return {status: 400, data: "check your internet connection and try again"}
  }
};

export const login = async (credentials: any) => {
  try {
    const res: any = await axios.post("/login", credentials);
    console.log(res);
    if (res.status === 200) {
      return res;
    }
    if (res.status === 210) return res;
  } catch (err) {
    return {status: 400, data: "check your internet connection and try again"}
  }
};

export const createBtcDeposit = async (credentials: any) => {
  try {
    const res: any = await axios.post("/createBtcDeposit", credentials);
    console.log(res);
    if (res.status === 200) {
      return res;
    }
    if (res.status === 210) return res;
  } catch (err) {
    return {status: 400, data: "check your internet connection and try again"}
  }
};

export const createEthDeposit = async (credentials: any) => {
  try {
    const res: any = await axios.post("/createEthDeposit", credentials);
    console.log(res);
    if (res.status === 200) {
      return res;
    }
    if (res.status === 210) return res;
  } catch (err) {
    return {status: 400, data: "check your internet connection and try again"}
  }
};

export const createBtcWithdrawal = async (credentials: any) => {
  try {
    const res: any = await axios.post("/createBtcWithdrawal", credentials);
    if (res.status === 200) {
      return res;
    }
    if (res.status === 210) return res;
  } catch (err) {
    console.log(err)
    return {status: 400, data: "check your internet connection and try again"}
  }
};

export const createEthWithdrawal = async (credentials: any) => {
  try {
    const res: any = await axios.post("/createEthWithdrawal", credentials);
    if (res.status === 200) {
      return res;
    }
    if (res.status === 210) return res;
  } catch (err) {
    return {status: 400, data: "check your internet connection and try again"}
  }
};

export const getData = async (route: string) => {
  try{
    const res = await axios.get(route)
    console.log(res)
    if (res.status === 200){
      return res
    }
  }catch(err){
    return {status: 400, data: "check your internet connection and try again"}
  }
} 
