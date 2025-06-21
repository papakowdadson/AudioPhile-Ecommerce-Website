
import {
    DIGITS_REG_EXP,
    EMAIL_REG_EXP,
    LOWER_CASE_REG_EXP,
    PHONE_VALIDATION_API_URL,
    PHONE_VALIDATION_API_KEY,
    SPECIAL_CHAR_REG_EXP,
    UPPER_CASE_REG_EXP
 } from "./constants";

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const isNameValid = (name)=>{
    if(name.length>0){
        return [true,""]
    }
    else{
        return [false,"Name is required"]
    }
}
export const isEmailValid = (email) => {
    if (email.length > 0) {
        const validEmail = EMAIL_REG_EXP.test(email); // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if (validEmail) {
            return [true, ""];
        }
        else {
            return [false, "Invalid email address"];
        }
    }
    else {
        return [false, "Invalid email address"];
    }
};
export function isContactValid(phoneNumber) {
    let digits;
    if (phoneNumber.charAt(0) === "+") {
        digits = phoneNumber.slice(1,-1);
    }
    else {
        digits = phoneNumber
    }

    for (let i = 0; i < digits.length; i++) {
        if (NUMS.includes(+digits.charAt(i))) {
            continue;
        }
        else {
            return [false, "Invalid contact"]
        }
    }
    return [true, ""]
};
export const isAddressValid = (address)=>{
    if(address.length>0){
        return [true,""]
    }
    else{
        return [false,"Address is required"]
    }
}
export const isZipCodeValid = (zipcode) =>{
    if(zipcode.length>0){
        return [true,""]
    }
    else{
        return [false,"Zipcode is required"]
    }
}
export const isCityValid = (city) =>{
    if(city.length>0){
        return [true,""]
    }
    else{
        return [false,"City is required"]
    }
}
export const isCountryValid = (country) =>{
    if(country.length>0){
        return [true,""]
    }
    else{
        return [false,"Country is required"]
    }
}
export const isPaymentMethodValid = (method) =>{
    const supportedMethod =["e-Money","Cash on Delivery"]
    if(supportedMethod.includes(method)){
        return [true,""]
    }
    else{
        return [false,"Select a payment method"]
    }
}

export const isEmoneyPINValid = (pin) => {
    const minLengthRegExp   = /.{4,}/;
    const pinLength       =  pin.length;
    const specialCharPassword  =  SPECIAL_CHAR_REG_EXP.test(pin); //  /(?=.*?[#?!@$%^&*-])/
    const minLengthPassword    =  minLengthRegExp.test(pin);

    let errMsg = "";
    if(pinLength===0){
            errMsg="pin is empty";
    }else if(specialCharPassword){
            errMsg="Pin can't be a special character";
    }else if(!minLengthPassword){
            errMsg="Minumum of 4 characters";
    }else{
        errMsg="";
    }

    if(errMsg.length === 0){
        return [true, ""];
    }
    else {
        return [false, errMsg];
    }
}


