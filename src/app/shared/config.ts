export const IS_LOCAL = true;
let api ="http://ndu-systems.net/guliwe/api"
let web ="http://ndu-systems.net"
if(IS_LOCAL){
    api='http://localhost:8080/guliwe/api';
    web='http://localhost:4200';
    
}

export const   API_URL= api;
// export const   API_URL=''; //Deployed
export const EMAIL= "http://ndu-systems.net/guliwe/api/email.php";

//Currency Converter constants
export const CONVERT_URL = "http://www.apilayer.net/api/live?";
export const ACCESS_Key = "4c8b5d5408a4d04921fe07bb2d491815";
export const FORMAT_Key = "format=1";
export const CURRENCY_Key   ="ZAR";

export function GetImagePath(imageUrl){
    return `${API_URL}/Article/${imageUrl}`;
}
