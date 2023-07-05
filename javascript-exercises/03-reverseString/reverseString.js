const reverseString = function(sentence)
{
    return sentence.split("").reverse().join("");

    /*
    By first princples...

    // Splitting of the original into letters.
    let arr = sentence.split("");

    // Actual reversal of the original - still split into letters.
    let reversedArr = [];
    for (let i = arr.length-1; i >= 0; i--)
    {
        reversedArr.push(arr[i]);
    }
    
    // Recombining of the reversed list into string.
    let reversedString = "";
    for (let i = 0; i < arr.length; i++)
    {
        reversedString += reversedArr[i];
    }

    return reversedString;
    */
};

// Do not edit below this line
module.exports = reverseString;