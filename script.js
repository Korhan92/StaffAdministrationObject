//console.log(staff)

// staff.forEach(element => {
//     console.log(element)
// });

for (let index = 0; index < staff.length; index++) {
    const element = staff[index];
    //console.log(element.lastName)
    element.email = `${element.lastName.toLowerCase()}@coorparation.com`
    element.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
    element.fullname = () => element.firstName + " " + element.lastName;

    //console.log(element.fullname())
}

staff.forEach(element => {
    element.fullName = `${element.firstName} ${element.lastName}`
});
console.log(staff);

// add fullname method to return fullname
for(let i of staff) {
  i.fullNames = ()=>i.firstName+ ' ' + i.lastName
 }
 console.log(staff[0].fullNames()); // test fullname method


 for(i=0 ; i < staff.length ; i++) {
   console.log(staff[i]["firstName"])
  staff[i].fullNames2 = function () { return this.firstName + ' ' + this.lastName }
 }
 console.log(staff[0].fullNames2()); // test fullname method


// add email property to all staff 
for(let i of staff) {
  i.email = `${i.lastName}@coorparation.com`
 }
 console.log(staff);

// filter
// Get 21 and older

// let biggerThan = [];
// for(let i = 0; i < staff.length; i++) {
//   if(staff[i].age >= 21) {
//     biggerThan.push(staff[i]);
//   }
// }
// console.log(biggerThan)

// const biggerThan = staff.filter(function(element) {
    //   if(element.age >= 21) {
        //     return true;
        //   }
        // });
        
const biggerThan = staff.filter(item => item.age >= 21);
console.log(biggerThan)
        



// Sort staff by experience

const sortedStaff  = staff.sort(function(a, b) {
  if(a.experience > b.experience) {
    return 1;
  } else {
    return -1;
  }
});

//  const sortedStaff = staff.sort((a, b) => (a.experience > b.experience ? 1 : -1));
 console.log(sortedStaff)


// reduce

let ageSum = 0;
for(let i = 0; i < staff.length; i++) {
  ageSum += staff[i].age;
}
console.log(ageSum)

const totalAge = staff.reduce(function(total, element) {
    return total + element.age ;
}, 0);
console.log(Math.round(totalAge/staff.length));
// or //
// const averageAge = staff.reduce(function(total, element) {
//     return parseFloat(total + element.age/staff.length) ;
// }, 0);

const averageAge = staff.reduce((total, person) => total + person.age/staff.length, 0);
console.log(Math.round(averageAge));



const findTurkish = staff
.map(person => person.language === 'Turkish' ? person:"")
.filter(person => person.age < 40)
.filter(person => person.isActive)
.sort((a, b) => b.age - a.age)

console.log(findTurkish)