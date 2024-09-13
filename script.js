// Part 1

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

const initialPlants = 20;
const minimumSpace = 0.8;

let currentWeek = 0;

let plants = initialPlants * 2 ** currentWeek;

let plantSpace = plants * 0.8;

const gardern80Percent = area * 0.8;
const gardern50Percent = area * 0.5;

//Predictions

console.log('============== Week 1 =================');
// Week 1
// ==============================================
console.log(`Total Plants: ${plants}
Space needed for plants ${plantSpace} square meters
Garden Area: ${area}`);

if (plantSpace > gardern80Percent) {
  console.log(
    `Week: ${
      currentWeek + 1
    } | Prune: stop them from exceeding the capacity of the garden`
  );
} else if (plantSpace > gardern50Percent) {
  console.log(
    `Week: ${
      currentWeek + 1
    } | Monitor: they are growing at an acceptable rate.`
  );
} else {
  console.log(
    `Week: ${currentWeek + 1} | Plant: there is room to plant more plants`
  );
}
//===============================================
console.log('============== Week 2 =================');
// Week 2
// ==============================================

// increment the week
currentWeek++;

// recalculate plant stats
plants = initialPlants * 2 ** currentWeek;
plantSpace = plants * 0.8;

console.log(`Total Plants: ${plants}
  Space needed for plants ${plantSpace} square meters
  Garden Area: ${area}`);

if (plantSpace > gardern80Percent) {
  console.log(
    `Week: ${
      currentWeek + 1
    } | Prune: stop them from exceeding the capacity of the garden`
  );
} else if (plantSpace > gardern50Percent) {
  console.log(
    `Week: ${
      currentWeek + 1
    } | Monitor: they are growing at an acceptable rate.`
  );
} else {
  console.log(
    `Week: ${currentWeek + 1} | Plant: there is room to plant more plants`
  );
}
//===============================================

// Week 3
console.log('============== Week 3 =================');
// ==============================================

// increment the week
currentWeek++;

// recalculate plant stats
plants = initialPlants * 2 ** currentWeek;

plantSpace = plants * 0.8;

console.log(`Total Plants: ${plants}
  Space needed for plants ${plantSpace} square meters
  Garden Area: ${area}`);

if (plantSpace > gardern80Percent) {
  console.log(
    `Week: ${
      currentWeek + 1
    } | Prune: stop them from exceeding the capacity of the garden`
  );
} else if (plantSpace > gardern50Percent) {
  console.log(
    `Week: ${
      currentWeek + 1
    } | Monitor: they are growing at an acceptable rate.`
  );
} else {
  console.log(
    `Week: ${currentWeek + 1} | Plant: there is room to plant more plants`
  );
}
//===============================================

//Part 2 :
// Calculate the number of plants after 10 weeks:
// Number of plants = 100
// Plants double every week

const newInitialPlants = 100;
const weeks = 10;
const finalPlants = initialPlants * Math.pow(2, weeks);

// Calculate the total space required for  plants:

const totalSpaceRequired = finalPlants * plantSpace;

// Calculate the additional space required:

const additionalSpaceRequired = totalSpaceRequired - area;


// Calculate the radius of the expanded circular garden
const newRadius = Math.sqrt(totalSpaceRequired / PI);




console.log('============== Part 2 =================');
console.log(`The amount of additional space required for 100 plants after 10 weeks: ${totalSpaceRequired}
If the space remainded circular, the radius of the garden will be ${newRadius}`);



