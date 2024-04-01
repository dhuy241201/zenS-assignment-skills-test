const findMinSumFour = (arr) => {
    let sum = 0;
    for(let i=0; i<4; i++){
        sum += arr[i];
    }
    return sum;
}

const findMaxSumFour = (arr) => {
    let sum = 0;
    for(let i=4; i>0; i--){
        sum += arr[i];
    }
    return sum;
}

const countTotal = (arr) => {
    let total = 0;
    arr.forEach((number) => {
        total += number;
    })
    return total;
}

const findEvenArray = (arr) => {
    return arr.filter((number) => {
        return number % 2 === 0
    })
}

const findOddArray = (arr) => {
    return arr.filter((number) => {
        return number % 2 !== 0
    })
}

const miniMaxSum = (stringNumber) => {
    if(typeof(stringNumber) !== "string"){
        console.log("Input must be string");
        return;
    }

    let numberArr = stringNumber
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    if(numberArr.length !== 5){
        console.log("Amount of number must be five");
        return;
    }

    let minSumFour = findMinSumFour(numberArr);
    let maxSumFour = findMaxSumFour(numberArr);
    let total = countTotal(numberArr);
    let min = numberArr[0];
    let max = numberArr[4];
    let evenArray = findEvenArray(numberArr);
    let oddArray = findOddArray(numberArr);

    console.log(minSumFour , maxSumFour);
    console.log("Total of array:", total);
    console.log("Min in array:", min);
    console.log("Max in array:", max);
    console.log("Even elements in array",evenArray);
    console.log("Odd elements in array",oddArray);
};

miniMaxSum("1 2 3 3 4");





