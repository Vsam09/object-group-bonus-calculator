const employees = [
  { 
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function determineEmployeeBonus( employee ){
  let updatedEmployeeInfo= {
    name: 'name',
    bonusPercentage: 'bonus percentage',
    totalCompensation: 'total compensation' ,
    totalBonus: 'total bonus'
    
  }
  return updatedEmployeeInfo;
} 
 for (let employee of employees) {
  let updatedEmployeeInfo = determineEmployeeBonus(employee)  
  console.log(updatedEmployeeInfo);
   
 if (employees.reviewRating <= 2){
   
   
 }

 if (employees.reviewRating === 3){

 }

 if (employees.reviewRating === 4){

 }

 if (employees.reviewRating === 5){

 }

 if (employees.employeeNumber){
 
 }
 console.log('aahhh')
 }
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
