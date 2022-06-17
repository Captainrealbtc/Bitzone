export const generateRandomAddress = (start: string, length: number): string => {
    let text: string = start;
    const possible =
       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (let i = 0; i < length; i++)
       text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
 };

 export const randomWholeNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
 };
 
 export const randomDecimalNumber = (
    min: number,
    max: number,
    places: number
 ): number => {
    const str: string = (Math.random() * (max - min) + min).toFixed(places);
    return parseFloat(str);
 };