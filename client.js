// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

console.log('array of employee data: ', employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let employee of employees) {
  //console.log(employee.name);
  console.log(calculateIndividualEmployeeBonus(employee));
}

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  let salary = Number(employee.annualSalary);
  let bonusPercentage = 0;
  let totalBonus = 0;
  let totalCompensation = 0;
  const bonusMax = 0.13;
  const bonusMin = 0;

  //Create return object
  const bonusCalc = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };

  // //Check reviewRating and calculate bonus
  // if (employee.reviewRating <= 2) {
  //   // console.log('This employee does not get a bonus.');
  // } else if (employee.reviewRating === 3) {
  //   bonusPercentage = 0.04;
  //   // console.log('This employee gets a base bonus of 4%');
  // } else if (employee.reviewRating === 4) {
  //   bonusPercentage = 0.06;
  //   // console.log('This employee gets a base bonus of 6%');
  // } else if (employee.reviewRating === 5) {
  //   bonusPercentage = 0.1;
  //   // console.log('This employee gets a base bonus of 10%');
  // }
  switch (employee.reviewRating) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      bonusPercentage = 0.04;
      break;
    case 4:
      bonusPercentage = 0.06;
      break;
    case 5:
      bonusPercentage = 0.1;
      break;
    default:
      break;
  }

  //Checking length of employementand calculate additional bonus
  if (employee.employeeNumber > 999 && employee.employeeNumber < 10000) {
    // console.log('Employees get an additional 5% bonus');
    bonusPercentage += 0.05;
  }

  //Check if salary
  if (salary > 65000 && bonusPercentage > bonusMin) {
    // console.log('Loses 1% of bonus');
    bonusPercentage -= 0.01;
  }

  if (bonusPercentage > bonusMax) {
    bonusPercentage = bonusMax;
  }

  bonusCalc.bonusPercentage = bonusPercentage;
  bonusCalc.totalBonus = salary * bonusPercentage;
  bonusCalc.totalCompensation = salary + bonusCalc.totalBonus;
  // return new object with bonus results

  return bonusCalc;
}

const atticusBonus = calculateIndividualEmployeeBonus({
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3,
});

console.log(
  atticusBonus.totalCompensation ===
    calculateIndividualEmployeeBonus(employees[0]).totalCompensation
);
