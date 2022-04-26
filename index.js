// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
 
}
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(arr){
  return arr.slice(arr.length-2)
}
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers ,  returnLastTwoDrivers];

const createFareMultiplier = function(integer){
  return function(integer){
    for( let i =0; i < integer; i ++){
      integer *= integer
    } 
    return integer;   
  }
}


const fareDoubler = function(num){
  return 2 * createFareMultiplier(num)
}

