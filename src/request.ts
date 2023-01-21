import axios from "./axios";

export const register = async (credentials: any) => {
   try {
      const res: any = await axios.post("/register", credentials);
      if (res.status === 200) {
         return res;
      }
      if (res.status === 210) return res;
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};

export const login = async (credentials: any) => {
   try {
      const res: any = await axios.post("/login", credentials);
      if (res.status === 200) {
         return res;
      }
      if (res.status === 210) return res;
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};

export const createBtcDeposit = async (credentials: any) => {
   try {
      const res: any = await axios.post("/createBtcDeposit", credentials);
      if (res.status === 200) {
         return res;
      }
      if (res.status === 210) return res;
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};

export const createEthDeposit = async (credentials: any) => {
   try {
      const res: any = await axios.post("/createEthDeposit", credentials);
      if (res.status === 200) {
         return res;
      }
      if (res.status === 210) return res;
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};

export const createBtcWithdrawal = async (credentials: any) => {
   try {
      const res: any = await axios.post("/createBtcWithdrawal", credentials);
      if (res.status === 200) {
         return res;
      }
      if (res.status === 210) return res;
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};

export const createEthWithdrawal = async (credentials: any) => {
   try {
      const res: any = await axios.post("/createEthWithdrawal", credentials);
      if (res.status === 200) {
         return res;
      }
      if (res.status === 210) return res;
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};

export const getData = async (route: string) => {
   try {
      const res = await axios.get(route);
      if (res.status === 200) {
         return res;
      }
   } catch (err: any) {
      return { status: 400, data: err.message };
   }
};
