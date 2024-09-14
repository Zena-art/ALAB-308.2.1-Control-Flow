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
const finalPlants = newInitialPlants * Math.pow(2, weeks);

// Calculate the total space required for  plants:

const totalSpaceRequired = finalPlants * 0.8;

// Calculate the additional space required:

const additionalSpaceRequired = totalSpaceRequired - area;


// Calculate the radius of the expanded circular garden
const newRadius = Math.sqrt(totalSpaceRequired / PI);


console.log('============== Part 2 =================');
console.log(`Total Plants: ${finalPlants}
Space needed for plants: ${totalSpaceRequired} square meters 
Radius of expanded garden: ${newRadius} radius
Additional Space for 100 plants reqired: ${additionalSpaceRequired} square meters`);



//===============================================



// Part 3:



/**Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message. */

try {
  // Calculate the total area required for the initial number of plants
  const totalRequiredSpace = (newInitialPlants + initialPlants) * 0.8;
  
  // Check if the required space exceeds the available space
  if (totalRequiredSpace > area) {
    // If required space is more than available space, throw an error
    throw new Error(`Insufficient space: Required ${totalRequiredSpace.toFixed(2)} square meters, but only ${area.toFixed(2)} square meters available.`);
  }
  
  // If there's enough space, log a success message
  console.log(`Sufficient space: Required ${totalRequiredSpace.toFixed(2)} square meters. Available space is ${area.toFixed(2)} square meters.`);
} catch (error) {
  // Log the error message
  console.log(error);
}