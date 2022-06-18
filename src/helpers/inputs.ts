export const handleInput = (e: any, setHook: any) => {
    const { name, value } = e.target;
    setHook((prev: any) => ({
       ...prev,
       [name]: value.trim(),
    }));
 };