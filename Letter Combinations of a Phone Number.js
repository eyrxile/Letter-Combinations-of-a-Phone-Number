var letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    const mapping = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const result = [];

    function backtrack(combination, nextDigits){
        if(nextDigits.length === 0){
            result.push(combination);
        }else{
            const currentDigit = nextDigits.substring(0, 1);
            const letters = mapping[currentDigit];
            for(let i = 0; i < letters.length; i++){
                backtrack(combination + letters[i], nextDigits.substring(1));
            }
        }
    }
    backtrack('', digits);
    return result;
};

//Example usage:
console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));