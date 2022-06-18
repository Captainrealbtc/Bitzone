import { toast } from "react-toastify";
export const setErrMsg = (setBools: any, setMsg: any, msg: any) => {
    setBools((prev: any) => ({ ...prev, error: true, loading: false }));
    setMsg((prev: any) => ({ ...prev, error: msg }));
 };
 
 export const setSuccMsg = (setBools: any, setMsg: any, msg: any) => {
    setBools((prev: any) => ({ ...prev, success: true, loading: false }));
    setMsg((prev: any) => ({ ...prev, success: msg }));
 };
 
 export const clrMsg = (setBools: any, setMsg: any) => {
    setTimeout(() => {
       setMsg((prev: any) => ({ ...prev, error: "", success: "" }));
       setBools((prev: any) => ({
          ...prev,
          error: false,
          success: false,
          loading: false,
       }));
    }, 2000);
 };

 export const successMessage = (setLoading: any, message: any) => {
   setLoading(false)
   toast.success(message, {autoClose: 2000})
 }

 export const errorMessage = (setLoading: any, message: any) => {
   setLoading(false)
   toast.error(message, {autoClose: 2000})
 }