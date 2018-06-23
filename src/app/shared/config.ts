export const   API_URL='http://localhost:8080/guliwe/api';  //Local
// export const   API_URL='http://ndu-systems.net/guliwe/api'; //Deployed
export const EMAIL= "http://ndu-systems.net/guliwe/api/email.php";

//Currency Converter constants
export const CONVERT_URL = "http://www.apilayer.net/api/live?";
export const ACCESS_Key = "4c8b5d5408a4d04921fe07bb2d491815";
export const FORMAT_Key = "format=1";
export const CURRENCY_Key   ="ZAR";

export function GetImagePath(imageUrl){
    return `${API_URL}/Article/${imageUrl}`;
}
