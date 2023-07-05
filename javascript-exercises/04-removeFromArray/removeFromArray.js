const removeFromArray = function(arr, ...args)
{
    let newArr = [];
    arr.forEach( (item) => {

        if (!args.includes(item)) //If the current item is not to be removed, then add it.
        {
            newArr.push(item);
        }

    });
    return newArr;

    /*
    Using the filter method...

    return arr.filter(item => !args.includes(item));
    */

    /* 
    First principles...

    for (let i = 0; i < args.length; i++)
    {
        for (let k = 0; k < arr.length; k++)
        {
            if (arr[k] === args[i]) //Strict equality checker (same type).
            {
                arr.splice(k, 1);
            }
        }
    }
    return arr;
    */
};

// Do not edit below this line
module.exports = removeFromArray;