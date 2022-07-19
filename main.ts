
// function getingFromUser(num:number):void {
//     if (num > 10) {
//       console.log("greater then 10")
//     }
//     else if(num < 10){
//         console.log("less then 10")
//     }
// }
// getingFromUser(5)



// function getNumber(num1:number):void {
//     if (num1>10) {
//         console.log("greater then 10")
//     }
//     else if(num1<10){
//       console.log("less then 10")
//     }
//     else(num1 == 10)
//       console.log("equle to 10")
    
// }
// getNumber(10)


//     let firstNum = document.getElementById("first");
//     let secondtNum = document.getElementById("second");
//     function getNumbers(firstNum:number,secondtNum:number):void {
//     if (firstNum>secondtNum) {
//         console.log(firstNum);
//     }
//     else if(firstNum<secondtNum){
//        console.log(secondtNum);
//     }
//     else(firstNum == secondtNum)
//     console.log("values are equal")
// }
// getNumbers()


// function getingFromUser(num:number):void {
//     if (num > 10) {
//       console.log("greater then 10")
//     }
//     else if(num < 10){
//         console.log("less then 10")
//     }
// }
// getingFromUser(5)



// function getNumber(num1:number):void {
//     if (num1>10) {
//         console.log("greater then 10")
//     }
//     else if(num1<10){
//       console.log("less then 10")
//     }
//     else(num1 == 10)
//       console.log("equle to 10")
    
// }
// getNumber(10)


//     let firstNum = document.getElementById("first");
//     let secondtNum = document.getElementById("second");
//     function getNumbers(firstNum:number,secondtNum:number):void {
//     if (firstNum>secondtNum) {
//         console.log(firstNum);
//     }
//     else if(firstNum<secondtNum){
//        console.log(secondtNum);
//     }
//     else(firstNum == secondtNum)
//     console.log("values are equal")
// }
// getNumbers()

// function getNum(num:number,num1:number):any{
//   if(num > num1){
//  return console.log(num1)
//   }
//   else(num < num1)
//     return console.log(num)
  
// }
// getNum(10,1);

//  let numbersUser:any = document.getElementById("userNum");
//  let numbersUser1:any = document.getElementById("userNum1");
//  let numbersUser2:any = document.getElementById("userNum2");
//  let result:number = numbersUser + numbersUser1 + numbersUser2; 
// function getNum():any{
// return console.log (result);

// }
// getNum();


// function getNum(firstNum:number,secondtNum:number):any{
//     if (firstNum>secondtNum) {
//         console.log(secondtNum)
//     }
//     else{
//         console.log(firstNum)
//     }
// }
// getNum(10,20);

4.

// function getMin(num1:number,num2:number):any{
//  if(num1 < num2){
// return num1;
//  }
//  else{
//      return num2;
//  }
// }
// console.log(getMin(2,4))

5.

// function numMin(num1:number,num2:number,num3:number):number{
//  if(num1 < (num2 && num3)){
// return num1;
//  }
//  else if(num2 < (num1 && num3)){
// return num2;
//  }
//  else{
//      return num3;
//  }
// }
// console.log(numMin(5,7,2));

6.

// function numSum(num1:number,num2:number,num3:number):number{
//   return (num1 + num2 + num3)/3
// }
// console.log(numMin(10,5,2));

7.

// function numSum(num1:number,num2:number,num3:number,num4:number):number{
//   return (num1 + num2 + num3+num4)
// }
// console.log(numSum(10,5,2,3));




 8.

// let numArray =[4,5,1,9];
// function funcArray():any{
//     let numHolder = numArray[0];
//     for(let i = 0;i< numArray.length; i ++){
//         if(numArray[i] < numHolder)
//       numHolder=numArray[i]
      
//     }
//     return numHolder
// }
// console.log(funcArray()) 

9.

// let sumHolder:any[];
// function printAvg(sumHolder:number[]):number{
//     let sumNum:number =0;
// for(let i = 0; i < sumHolder.length;i++){
//     sumNum += sumHolder[i];
// }
// return sumNum/sumHolder.length
// }
// console.log(printAvg([5,5,5]));

10.

// function sumFoNums(numsHolders:number[]):number{
//     let holder:number=0;
//     for(let i =0; i < numsHolders.length;i++){
//         holder +=numsHolders[i]
//     }
//     return holder;
// }
// console.log(sumFoNums([4,4,10,10]))


11.
// function namesArray(names:string[]):any{
//   for(let i = 0;i < names.length; i ++){
//       return names[1];
//   }
// }
// console.log(namesArray(['avi','asi','ron','lior']))


12.
// function namesList(names:string[]):string{
//     for(let i = 0; i < names.length;i++){
//         if(names[i][0] == 'a'){
         
//         return names[i]
//         }
//     }
// }
// console.log(namesList(["roni","tam","tviel","roni","agam","aviel"]))

13.
// function nums(numsArray:number[]):any{
//     for(let i =0;i<numsArray.length;i++){
//     if(numsArray[i]% 2 == 0){
//     alert("finger licking good");
// }
//  }
// }
// nums([1,20,50,7,3,80])


14.
// function todayDate(holderDate:string):Date{
//     let thisDate:Date = new Date(holderDate)
//     return thisDate;

// }
// console.log(todayDate("07/18/2022"))


15.

// function someFunc(text:string,num:number):any{
//     for(let i =0; i <num;i++){
//       console.log( text);
//     }
// }
// someFunc("avi",5)

16.

// function getDeatails(name:string,age:number):any{
 
//      if(age>18){
//      console.log( `wellcome ${name}`)
//  }
//  else{
//       console.log(`No enter ${name}`)
//  }
// }

// getDeatails("avi",2)

17.
// function getNames(firstName:string,lastName:string):any{
//     if(firstName.substring(0,1) == lastName.substring(0,1)){
//     console.log(firstName.substring(0,1));
// }
// else{
//    console.log(0);
// }
// }

// getNames("avi","asi");

18.

// function arrayFunc(someArray:any[]):any{
// switch(someArray.length){
//     case 1:
//     console.log("no data")
//     return;
//     case 2:
//     console.log("one data")
//     return;
//     default:
//     console.log("there is many values")
//     return;
// }
// }
// arrayFunc([10,"luffy"])

19.
// function funcArray(numArray:number[],someT:String):any{
//     switch(someT){
//         case "reverse":
//         return numArray.reverse();
//            case "2":
//         return numArray.sort((a,b)=>a-b);
//             case "3":
//         return numArray.sort((a,b)=>b-a);
//         default:
//         return numArray.toString().split(",");
//     }
// }
// console.log(funcArray([2,3,42,5],"ONE PIECE"));





