var errorMessage = 
{
    digitsErr : "Number must be 16 digits",
    notDigitErr: "All of digits must be numbers",
    allGigitsSameErr: "You must have at least two different digits represented",
    finalDigitsErr: "The final digit must be even",
    sumLess17Err : "The sum of all the digits must be greater than 16"
};

function validateCreditCard(password)
{
    var message = "", errMsgArr = new Array();
    var reduceChar = "-";
    var digitsArr = (password.split("").filter(item=> item !== reduceChar));
    var finalDigit = digitsArr.slice(digitsArr.length-1);

    function getSum(arr)
    {
        var sum = 0;
        arr.forEach(element => {
            if(!isNaN(Number(element)))
                sum += Number(element);   
        });
        return sum;
    }
    if(digitsArr.some(digit=> isNaN(Number(digit)) ))
        errMsgArr.push(errorMessage.notDigitErr);
    if( digitsArr.length !== 16 )
        errMsgArr.push(errorMessage.digitsErr);
    if(digitsArr.every(digit=> digit === digitsArr[0]) )
        errMsgArr.push(errorMessage.allGigitsSameErr);
    if( (finalDigit % 2) !== 0 )
        errMsgArr.push(errorMessage.finalDigitsErr);
    if( getSum(digitsArr) <= 16 )
        errMsgArr.push(errorMessage.sumLess17Err);

    if(errMsgArr.length === 0)
        return { valid: true, number: password };
    else
        return { valid: false, number: password, error: errMsgArr}
    //return errMessage === ""; // origin return
}

var inputPassword =['9999777788880000','6666666666661666','4444444444444444','1111111111111110','a92332119c011112','9999-7777-8888-0000','6666-6666-6666-1666'];

inputPassword.forEach(element => {
    var result = validateCreditCard(element);
    console.log(result);
});


// function validateCreditCard(password)
// {
//     var errMessage = '';
//     var seperator = '\n';
//     var lastDigit = !isNaN(password) ? password % 10: '';
//     if(isNaN(password))
//         errMessage += errorMessage.notDigitErr + seperator;
//     if( (password / (Math.pow(10,16))) === 0)
//         errMessage += errorMessage.digitsErr + seperator;
//     if(lastDigit &&  (password / lastDigit) )
//         errMessage += errorMessage.allGigitsSameErr + seperator;
    
// }