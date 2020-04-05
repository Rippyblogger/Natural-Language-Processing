function checkString(input) {
    if (input === " " || input.length === 0){
        alert("Kindly enter a valid string");
        console.log("User inputted an string)");
        return false;
    }else{
        return true
    }
};
    
export { checkString };