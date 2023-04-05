//Write a function that accepts an array of strings and console.logs each element using a for loop.
function nameList(strings){
    for(let p=0;p<strings.length;p++){
console.log(strings[p]);
    }
}
let strings=["Muna","Kyla","Khan"]
nameList(strings);
//Write a function that accepts an array of numbers 
//and uses the forEach() method to console.log each number multiplied by 2.
function arrayOfnum(nums){
    nums.forEach(function(num){
        console.log(num *2);
    });
}
let nums=[5,7,9,10,12];
arrayOfnum(nums);

// Write a function that takes in an array of numbers 
//consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function calculate(arr){
const resultArr=[...arr];
for (let k=0; k<4;k++){
    resultArr[k] *=8
}
const lastItems=resultArr.length;
resultArr[lastItems-1]+=5;
resultArr[lastItems-2]+=5;

console.log(resultArr);
}
const arr=[20,5,3,12,6,7];
calculate(arr)
//Write a function that takes in the following array and use a while loop to iterate 
// break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function takesArray(arrNum){
    let i=0;
    while(i<arrNum.length){
        if(i===4){
            break;
        }
        console.log(arrNum[i]);
        i++
    }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
takesArray(arrNum);

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitsArr(str){
for(let j=0;j<str.length;j++){
        if(j===3){
            continue;
        }
        console.log(str[j]);
    }
}
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruitsArr(fruits);
