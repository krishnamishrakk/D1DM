//Decision making

//one condition
//if else
//let a = 10
//if (a == 10){
    //success
//}else{
    //failure
//}

//two condition
//if else ladder
//let a=-10;
//if (a<0)) {
    //console.log("Negative")
//} else if (a==0) {
//   console.log("Zero")
//} else {
//    console.log("Positive")
//}

//three or more condition
//switch-case statement
//let gender="m";
//switch(gender){
//    case "m":
//        console.log("Male");
//       break;
//    case "f":
//        console.log("Female");
//        break;
//    default:
//        console.log("Transgender");
//        break;
//}

// Take age as the variable 
// age < 18 = Child
// greater than 18 but less than 40 = Adult 
// age is greater than 40 = Old age
//let age=21;
//switch(true):
//case age<18:
//console.log("Child");
//  break;
//case 18<age<40:
//  console.log("Adult");
//    break;
//  default age>40:
//      console.log("Old age");
//        break;
//}

// take variable name as day , its possible values are 0 1 2 3 4 5
// 0 = Monday 
// 1 = tuesday
// 2 = wednesday
// 3 = thursday
// 4 = friday
// 5 = saturday

//var day = 5;
//switch(day){
    //  case 0:
        //console.log("Monday");
        //break;
    //case 1:
        //console.log("Tuesday");
        //break;
    //case 2:
        //console.log("Wednesday");
        //break;
    //case 3:
        //console.log("Thursday");
        //break;
    //case 4:
        //console.log("Friday");
        //break;
    //case 5:
        //console.log("Saturday");
        //break;
    //default :
        //console.log("Sunday");
        //break;
//}

//loops(3 stages)
//initialisation
//condition
//increment/decrement
// Question : Print the table of 19

for (let i=1;i<=10;i++){
    console.log("19*"+i + "=" + 19*i);
}