//Part 1: Growing Pains

// declaring variables

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
// plant doubles every week
let growthWeek = 2;
let plantCount = 20;
let plantSize = 0.8;

// how many plants we can have 
let maxCapacity = area / plantSize;

//Predict the plant growth after a specific number of weeks.

const week1 = plantSize *  plantCount;
if ((week1 / maxCapacity) * 100 <= 50){
  console.log("Planted");
}else if((week1 / maxCapacity) * 100 >= 50 && (week / maxCapacity) * 100 <= 80){
  console.log("Monitored");
}
