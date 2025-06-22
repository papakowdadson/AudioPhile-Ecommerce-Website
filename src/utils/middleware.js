
import {
    DIGITS_REG_EXP,
    EMAIL_REG_EXP,
    SPECIAL_CHAR_REG_EXP,
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
        const validEmail = EMAIL_REG_EXP.test(email); 
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
    let msg= ""
    if(phoneNumber.length<1){
        msg = "Contact can't be empty"
    }
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
            msg = "Invalid contact"
        }
    }

    return msg.length>0?[false,msg]:[true, ""]
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
    if(!city.length>0){
        return [false,"City is required"]
    }
    else{ 
        return [true,""]
    }
}
export const isCountryValid = (country) =>{
    if(country.length<1){
        return [false,"Country is required"]
    }
    else{
        return [true,""]
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
    const onlyDigits = DIGITS_REG_EXP.test(pin)

    let errMsg = "";
    if(pinLength===0){
            errMsg="Pin is empty";
    }else if(specialCharPassword){
            errMsg="Pin can't be a special character";
    }else if(!minLengthPassword){
            errMsg="Minumum of 4 characters";
    }else if(!onlyDigits){
            errMsg="Must be only numbers";
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


