//Assignment Week 1 - Part-1

// Age-ify -Step 1: Declare and assign variables

const yearOfBirth = 1987;
const yearFuture = 2045;

// Step 2: Calculate the age

const age = yearFuture - yearOfBirth;

// Step 3: Log out the result using string concatenation

console.log("You will be " + age + " years old in " + yearFuture);

//Assignment Week 1 - Part-2

// Goodboy-Oldboy -Step 1: Declare and assign variables

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth; // Human age in years (10)
const shouldShowResultInDogYears = true;

// Step 2: Handle calculation based on the boolean flag

if (shouldShowResultInDogYears) {
  dogYear = dogYear * 7; // Convert to dog years (70)
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture,
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture,
  );
}

//Assignment Week 1 - Part-3

//Housey pricey --- Peter's House ---

const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterAskingPrice = 2500000;
const peterVolume = peterWidth * peterDepth * peterHeight;
const peterFairPrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;

if (peterAskingPrice > peterFairPrice) {
  console.log(
    "Peter is paying too much! Fair price: " +
      peterFairPrice +
      ", Asking price: " +
      peterAskingPrice,
  );
} else {
  console.log(
    "Peter is paying too little or getting a good deal! Fair price: " +
      peterFairPrice +
      ", Asking price: " +
      peterAskingPrice,
  );
}

//Housey pricey --- Julia's House ---

const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaAskingPrice = 1000000;
const juliaVolume = juliaWidth * juliaDepth * juliaHeight;
const juliaFairPrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (juliaAskingPrice > juliaFairPrice) {
  console.log(
    "Julia is paying too much! Fair price: " +
      juliaFairPrice +
      ", Asking price: " +
      juliaAskingPrice,
  );
} else {
  console.log(
    "Julia is paying too little or getting a good deal! Fair price: " +
      juliaFairPrice +
      ", Asking price: " +
      juliaAskingPrice,
  );
}

//Assignment Week 1 - Part-4
// Ez Namey-Step 1: Create arrays with 10 words each

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Smart",
  "Future",
  "Hyper",
  "Tech",
  "Global",
  "Cyber",
  "Bright",
];
const secondWords = [
  "Corporation",
  "Hub",
  "Solutions",
  "Labs",
  "Ventures",
  "Systems",
  "Logic",
  "Flow",
  "Connect",
  "Studio",
];

// Step 2: Pick random indexes from 0 to 9

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

// Step 3: Combine words to form the startup name

const startupName =
  firstWords[randomNumber1] + " " + secondWords[randomNumber2];

// Step 4: Log out the startup name and character length

console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    " characters",
);
